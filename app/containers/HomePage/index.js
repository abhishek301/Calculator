/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import KeyPad from 'components/KeyPad/Loadable';
import ResultBar from 'components/ResultBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

export default function HomePage() {
  const [answer, setAnswer] = useState({ result: '' });

  function onClick(button) {
    if (button === '=') {
      calculate();
    } else if (button === 'C') {
      reset();
    } else if (button === 'CE') {
      backspace();
    } else {
      setAnswer({
        result: answer.result + button,
      });
    }
  }

  function calculate() {
    let checkResult = '';
    if (answer.result.includes('--')) {
      checkResult = answer.result.replace('--', '+');
    } else {
      checkResult = answer.result;
    }

    try {
      setAnswer({
        // eslint-disable-next-line no-eval
        result: `${eval(checkResult) || ''}`,
      });
    } catch (e) {
      setAnswer({
        result: 'error',
      });
    }
  }

  function reset() {
    setAnswer({
      result: '',
    });
  }

  function backspace() {
    setAnswer({
      result: answer.result.slice(0, -1),
    });
  }

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Typography variant="h3" component="h1" gutterBottom>
        <FormattedMessage {...messages.header} />
      </Typography>
      <ResultBar answer={answer.result} />
      <KeyPad onClick={onClick} />
    </Grid>
  );
}
