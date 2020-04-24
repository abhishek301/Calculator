/**
 *
 * KeyPad
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function KeyPad({ onClick }) {
  function onButtonClick(e) {
    onClick(e.currentTarget.name);
  }

  return (
    <Grid container spacing={1}>
      <Grid container item justify="center" alignItems="center">
        <Grid item>
          <Button variant="contained" name="(" onClick={onButtonClick}>
            (
          </Button>

          <Button variant="contained" name="CE" onClick={onButtonClick}>
            CE
          </Button>

          <Button variant="contained" name=")" onClick={onButtonClick}>
            )
          </Button>

          <Button variant="contained" name="C" onClick={onButtonClick}>
            C
          </Button>
        </Grid>
      </Grid>
      <Grid container item spacing={3}  justify="center" alignItems="center">
        <Grid item>
          <Button variant="contained" name="1" onClick={onButtonClick}>
            1
          </Button>

          <Button variant="contained" name="2" onClick={onButtonClick}>
            2
          </Button>

          <Button variant="contained" name="3" onClick={onButtonClick}>
            3
          </Button>

          <Button variant="contained" name="+" onClick={onButtonClick}>
            +
          </Button>
        </Grid>
      </Grid>
      <Grid container item spacing={3}  justify="center" alignItems="center">
        <Grid item  >
          <Button variant="contained" name="4" onClick={onButtonClick}>
            4
          </Button>
          <Button variant="contained" name="5" onClick={onButtonClick}>
            5
          </Button>
          <Button variant="contained" name="6" onClick={onButtonClick}>
            6
          </Button>
          <Button variant="contained" name="-" onClick={onButtonClick}>
            -
          </Button>
        </Grid>
      </Grid>
      <Grid container item  justify="center" alignItems="center"  spacing={3}>
        <Grid item  >
          <Button variant="contained" name="7" onClick={onButtonClick}>
            7
          </Button>
          <Button variant="contained" name="8" onClick={onButtonClick}>
            8
          </Button>
          <Button variant="contained" name="9" onClick={onButtonClick}>
            9
          </Button>
          <Button variant="contained" name="*" onClick={onButtonClick}>
            x
          </Button>
        </Grid>
      </Grid>
      <Grid container item  justify="center" alignItems="center"  spacing={3}>
        <Grid item  >
          <Button variant="contained" name="." onClick={onButtonClick}>
            .
          </Button>
          <Button variant="contained" name="0" onClick={onButtonClick}>
            0
          </Button>
          <Button variant="contained" name="=" onClick={onButtonClick}>
            =
          </Button>
          <Button variant="contained" name="/" onClick={onButtonClick}>
            ÷
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

KeyPad.propTypes = {
  onClick: PropTypes.func,
};

export default KeyPad;
