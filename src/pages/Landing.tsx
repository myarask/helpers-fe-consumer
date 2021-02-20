import { Box, TextField, Tabs, Tab, Typography, Button } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      flexGrow={1}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Box>
  );
};

const Landing = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        type: 'login',
      }}
      // validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
        return undefined;
      }}
      // onSubmit={(variables) => updateMyUser({ variables })}
    >
      {({ isSubmitting, setFieldValue, handleSubmit }) => (
        <Box style={{ height: '100%' }} display="flex" flexDirection="column">
          <Box p={4} style={{ background: '#edfafa' }}>
            <Typography align="center" variant="h1">
              Helpers: Home Care on Demand
            </Typography>
          </Box>

          <Tabs
            value={tabIndex}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Log In" />
            <Tab label="Sign Up" />
          </Tabs>

          <Box p={4}>
            <Form>
              <Field fullWidth component={TextField} margin="dense" name="email" label="Email" type="email" />
              <Field fullWidth component={TextField} margin="dense" name="password" label="Password" type="password" />
            </Form>
          </Box>

          <TabPanel value={tabIndex} index={0}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={isSubmitting}
              style={{ borderRadius: '0px', height: '70px' }}
              onClick={() => {
                setFieldValue('type', 'login', false);
                handleSubmit();
              }}
            >
              Log In
            </Button>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Box display="flex" flexDirection="column" style={{ height: '100%' }}>
              <Box style={{ background: '#eee' }} p={3}>
                <Typography variant="caption" align="center">
                  By signing up, you agree to our terms of service and privacy policy.
                </Typography>
              </Box>
              <Box flexGrow={1} />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                style={{ borderRadius: '0px', height: '70px' }}
                onClick={() => {
                  setFieldValue('type', 'signup', false);
                  handleSubmit();
                }}
              >
                Sign Up
              </Button>
            </Box>
          </TabPanel>
        </Box>
      )}
    </Formik>
  );
};

export { Landing };
