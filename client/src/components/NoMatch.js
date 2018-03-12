import React from 'react';

const NoMatch = ({ location }) => (
  <h2>Error 404: There is no page found with {location.pathname}. </h2>
);

export default NoMatch;
