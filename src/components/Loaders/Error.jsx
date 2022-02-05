import React from 'react';

const Error = ({className, message}) => {
  return <div className={className}>ERROR: {message}</div>;
};

export default Error;
