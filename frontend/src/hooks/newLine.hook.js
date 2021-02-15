import React from 'react';

const newLine = text => {
  return text.split('\n').map(str => <p>{str}</p>);
};
export default newLine;
