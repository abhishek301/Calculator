/**
 *
 * ResultBar
 *
 */

import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import './style.css';

function ResultBar({ answer }) {
  return (
    <Grid container spacing={1} justify="center" alignItems="center">
      <Grid item>
        <TextField
          variant="filled"
          value={answer}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

ResultBar.propTypes = {
  answer: PropTypes.string,
};

export default ResultBar;
