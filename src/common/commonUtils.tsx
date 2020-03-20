import React from 'react';

export const nlToParagraph = (text: string) => {
  return (text || '').split('\n\r').map((item, i) => <p key={i}>{item}</p>);
};
