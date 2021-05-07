import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { db, storyConverter } from '../services/firebase';

interface ContextProps {
  children: ReactNode;
}

export interface CommentModel {
  comment: string;
  timestamp: number;
  user: string;
}

export interface StoryModel {
  comments: CommentModel[];
  id: string;
  link: string;
  timestamp: number;
  title: string;
  user: string;
}

export interface StoriesContextModel {
  stories: StoryModel[];
  addComment: (
    id: string,
    comments: CommentModel[],
    newComment: CommentModel
  ) => Promise<void>;
  addStory: (story: Partial<StoryModel>) => Promise<void>;
  fetchStories: () => Promise<void>;
}

const storiesDB = db.collection('stories');

export const StoriesContext = createContext<Partial<StoriesContextModel>>({});

export const StoriesProvider = ({ children }: ContextProps) => {
  const [stories, setStories] = useState<StoryModel[]>();

  const addComment = async (
    id: string,
    comments: CommentModel[],
    newComment: CommentModel
  ): Promise<void> => {
    try {
      await storiesDB.doc(id).update({
        comments: [...comments, newComment],
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addStory = async ({
    link,
    title,
    user,
  }: Partial<StoryModel>): Promise<void> => {
    try {
      await storiesDB.add({
        comments: [],
        link,
        title,
        user,
        timestamp: Date.now(),
      });
      fetchStories();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchStories = async () => {
    const querySnapshot = await storiesDB
      .orderBy('timestamp', 'desc')
      .limit(25)
      .withConverter(storyConverter)
      .get();
    setStories(querySnapshot.docs.map((d) => d.data()));
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <StoriesContext.Provider
      value={{ stories, addComment, addStory, fetchStories }}
    >
      {children}
    </StoriesContext.Provider>
  );
};
