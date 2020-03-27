import React from 'react';
import { Accordion } from '../../gamut-templates';

export default {
  component: Accordion,
  title: 'Templates/Accordion',
};

export const accordion = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid black',
      padding: '1rem',
    }}
  >
    <p>hello world</p>
    <Accordion size="small" summary="Click for More Contents">
      oh whoa look at me
      <br />
      haha wtf
    </Accordion>
  </div>
);

accordion.story = {
  name: 'Accordion',
};
