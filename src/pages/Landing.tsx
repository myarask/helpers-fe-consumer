import { Box, TextField, Tabs, Tab, Typography, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { useAuth } from '../providers';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

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
  const [loginError, setLoginError] = useState(null);
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      email: 'test123@gmail.com',
      password: '1234567890',
      type: 'login',
    },
    validationSchema,
    onSubmit: async (values) => {
      if (values.type === 'login') {
        setLoginError(null);
        await auth.login(values).catch(setLoginError);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
      <Box style={{ height: '100%' }} display="flex" flexDirection="column">
        <Box p={4} style={{ background: '#edfafa' }}>
          <img
            alt="Helpers"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '80%' }}
            src="https://i.imgur.com/4F3JPov.png"
          ></img>
          <Typography align="center" variant="h1">
            Home Care on Demand
          </Typography>
        </Box>

        <Tabs
          value={tabIndex}
          onChange={(_, newValue) => {
            setTabIndex(newValue);
          }}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>

        <Box p={4}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            margin="dense"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            margin="dense"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>

        <TabPanel value={tabIndex} index={0}>
          <Box display="flex" flexDirection="column" style={{ height: '100%' }}>
            <Box flexGrow={1} />
            <Box p={4}>{loginError && <Typography color="error">Login failed</Typography>}</Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={formik.isSubmitting}
              style={{ borderRadius: '0px', height: '70px' }}
              onClick={() => {
                formik.setFieldValue('type', 'login', false);
                formik.handleSubmit();
              }}
            >
              Log In
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value={tabIndex} index={1}>
          <Box display="flex" flexDirection="column" style={{ height: '100%' }}>
            <Box style={{ background: '#eee' }} p={3}>
              <Typography variant="caption" align="center">
                By signing up, you agree to our terms of service and{' '}
                <a href="https://www.gethelpers.ca/privacy-policy.html" target="_blank" rel="noreferrer">
                  privacy policy
                </a>
                .
              </Typography>
            </Box>
            <Box flexGrow={1} />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={formik.isSubmitting}
              style={{ borderRadius: '0px', height: '70px' }}
              onClick={() => {
                formik.setFieldValue('type', 'signup', false);
                formik.handleSubmit();
              }}
            >
              Sign Up
            </Button>
          </Box>
        </TabPanel>
      </Box>
    </form>
  );
};

export { Landing };
