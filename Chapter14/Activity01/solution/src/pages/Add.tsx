import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { ChangeEvent, useContext, useState } from 'react';

import { StoriesContext } from '../providers/StoriesProvider';
import { UserContext } from '../providers/UserProvider';
import useStyles from '../styles';
import { useHistory } from 'react-router-dom';

const Add = () => {
  const { addStory } = useContext(StoriesContext);
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();
  const user = useContext(UserContext);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'link':
        setLink(value);
        break;
      case 'title':
        setTitle(value);
        break;
    }
  };
  const handleSubmit = async () => {
    if (link && title && user?.email) {
      await addStory!({
        link,
        title,
        user: user.email,
        timestamp: Date.now(),
      });
      history.push('/');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add a Story
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="link"
            label="Link"
            name="link"
            autoComplete="link"
            autoFocus
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default Add;
