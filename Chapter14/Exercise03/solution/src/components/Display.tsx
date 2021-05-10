import React, { useContext } from 'react';
import { ClickContext } from '../providers/ClickProvider';

const Display = () => {
  const { clicks } = useContext(ClickContext);
  return <div>{clicks}</div>;
};

export default Display;
