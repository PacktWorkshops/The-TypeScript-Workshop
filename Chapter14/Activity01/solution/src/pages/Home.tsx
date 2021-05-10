import {
  Container,
  CssBaseline,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';

import Story from '../components/Story';
import { StoriesContext } from '../providers/StoriesProvider';
import useStyles from '../styles';

const Home = () => {
  const classes = useStyles();
  const { stories } = useContext(StoriesContext);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Latest Stories
        </Typography>
        <div className={classes.root}>
          <List component="span" aria-label="stories">
            {stories?.map((s) => (
              <ListItem key={s.timestamp}>
                <Story {...s} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Container>
  );
};

export default Home;
