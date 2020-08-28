import { Button, TextField } from '@material-ui/core';
import React, { ChangeEvent, useContext, useState } from 'react';

import { StoriesContext, StoryModel } from '../providers/StoriesProvider';
import { UserContext } from '../providers/UserProvider';
import Comment from './Comment';

const Comments = (props: StoryModel) => {
  const { comments, id } = props;
  const [newComment, setNewComment] = useState('');
  const { addComment, fetchStories } = useContext(StoriesContext);
  const user = useContext(UserContext);
  const [showAdd, setShowAdd] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setNewComment(event.target.value);
  const handleSave = async () => {
    if (newComment) {
      await addComment!(id, comments, {
        comment: newComment,
        user: user!.email!,
        timestamp: Date.now(),
      });
      fetchStories!();
      handleToggle();
    }
  };
  const handleToggle = () => setShowAdd(!showAdd);
  return (
    <div>
      {comments && comments.map((c) => <Comment key={c.timestamp} {...c} />)}
      {showAdd ? (
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="comment"
            label="Comment"
            name="comment"
            autoComplete="comment"
            autoFocus
            onChange={handleChange}
          />{' '}
          <Button color="primary" variant="contained" onClick={handleSave}>
            Save
          </Button>
        </div>
      ) : (
        <Button color="primary" variant="contained" onClick={handleToggle}>
          Add a comment
        </Button>
      )}
    </div>
  );
};

export default Comments;
