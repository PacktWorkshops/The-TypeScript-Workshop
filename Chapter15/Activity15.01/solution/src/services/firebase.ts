import firebase from 'firebase';

import { StoryModel } from '../providers/StoriesProvider';

const config = {
  your: 'config',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();

export const storyConverter = {
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): StoryModel {
    const data = snapshot.data(options);
    return {
      comments: data.comments,
      link: data.link,
      id: snapshot.id,
      user: data.user,
      timestamp: data.timestamp,
      title: data.title,
    };
  },
  toFirestore(story: StoryModel): firebase.firestore.DocumentData {
    return { ...story };
  },
};
