import { Box, TextField, Tabs, Tab, Typography, Button } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
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
        <Box>
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

          <Box flexGrow={1} height="100%" display="flex" flexDirection="column">
            <Box flexGrow={1} p={2}>
              <Box p={2}>
                <Form>
                  <Field fullWidth component={TextField} name="email" label="Email" type="email" />
                  <Field fullWidth component={TextField} name="password" label="Password" type="password" />
                </Form>
              </Box>
            </Box>
          </Box>

          <TabPanel value={tabIndex} index={0}>
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                onClick={() => {
                  setFieldValue('type', 'login', false);
                  handleSubmit();
                }}
              >
                Log In
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={tabIndex} index={1}>
            <Box p={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
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
