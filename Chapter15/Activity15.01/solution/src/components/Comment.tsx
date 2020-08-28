import React from 'react';

import { CommentModel } from '../providers/StoriesProvider';

const Comment = (props: CommentModel) => (
  <div>
    {props.comment}{' '}
    <em>
      by {props.user} on {new Date(props.timestamp).toString()}
    </em>
  </div>
);

export default Comment;
