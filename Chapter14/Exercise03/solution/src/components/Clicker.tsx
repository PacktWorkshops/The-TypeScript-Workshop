import React, { useContext } from 'react';
import { ClickContext } from '../providers/ClickProvider';

const Clicker = () => {
  const { clicks, setClicks } = useContext(ClickContext);
  const handleClick = () => setClicks(clicks + 1);
  return <button onClick={handleClick}>Add a click</button>;
};

export default Clicker;
