import React, { useState } from 'react';
import { Paper, Modal, Box, Typography, Button, Divider } from '@material-ui/core';
import { auth } from '../services';

const ModalForgotPassword = (props) => {
  const [isResetting, setIsResetting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleReset = async () => {
    setIsResetting(true);
    try {
      await auth.forgotPassword({ email: props.email });
      props.onClose();
    } catch (e) {
      setHasError(false);
    }
    setIsResetting(false);
  };

  return (
    <Modal {...props} style={{ overflow: 'scroll' }}>
      <Box p={2}>
        <Paper>
          <Box p={2}>
            <Typography gutterBottom variant="h1">
              <b>Forgot your Password?</b>
            </Typography>

            <Typography gutterBottom>We can set a new one by sending instructions to your email.</Typography>
            <Divider />
            <Box py={2}>
              {props.email ? (
                <Typography>Tap &quot;Reset Password&quot; to send instructions to {props.email}</Typography>
              ) : (
                <Typography>
                  Please enter your email address in the login form, then tap &quot;Forgot your password?&quot; again
                </Typography>
              )}
            </Box>
            {hasError && (
              <Typography color="error">
                Failed to send the reset password instructions. Please contact{' '}
                <a href="https://www.gethelpers.ca/contact.html">Helpers support</a>.
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={!props.email || isResetting}
              onClick={handleReset}
            >
              Reset Password
            </Button>

            <Button fullWidth onClick={props.onClose} disabled={isResetting}>
              Close
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export { ModalForgotPassword };
