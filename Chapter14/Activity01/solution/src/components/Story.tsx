import React from 'react';

import { StoryModel } from '../providers/StoriesProvider';
import Comments from './Comments';

const Story = (props: StoryModel) => {
  const { title, link, user, timestamp } = props;
  return (
    <div>
      <h2>
        <a href={link} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
      </h2>
      <p>
        Posted {new Date(timestamp).toString()} by {user}
      </p>
      <Comments {...props} />
    </div>
  );
};

export default Story;
