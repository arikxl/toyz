import React from 'react';

const Error = ({className, message}) => {
  // console.log('message:', message)
  return <div className={className}>{message}</div>;
};

export default Error;
