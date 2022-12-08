import React from 'react';
import Typography from '@mui/material/Typography';

class Copyright extends React.Component {
  render() {
    return (
      <Typography variant="body2">
        {'Copyright © '}
        {'Simply Recipes'}
        {' '}
        {new Date().getFullYear()}.
      </Typography>
    );
  }
}

export default Copyright;
