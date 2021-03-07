import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography, Card, Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { Formik, Field, Form } from 'formik';
import { phoneRegExp } from '../utils';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { GET_MY_USER, UPDATE_MY_USER } from '../queries';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('This field is required').max(255, '255 Character Maximum'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

const Profile = () => {
  const myUser = useQuery(GET_MY_USER);
  const [updateMyUser] = useMutation(UPDATE_MY_USER, { refetchQueries: [{ query: GET_MY_USER }] });

  if (myUser.loading) return <LinearProgress />;

  if (myUser.error) {
    return <Typography color="error">Failed to load user data</Typography>;
  }

  return (
    <Formik
      initialValues={{
        fullName: myUser.data.myUser?.fullName || '',
        phoneNumber: myUser.data.myUser?.phoneNumber || '',
      }}
      validationSchema={validationSchema}
      onSubmit={(variables) => updateMyUser({ variables })}
    >
      {({ submitForm, isSubmitting }) => (
        <Box flexGrow={1} height="100%" display="flex" flexDirection="column">
          <Box flexGrow={1} p={2}>
            <Box mb={1}>
              <Typography variant="h1">Profile Information</Typography>
            </Box>

            <Card>
              <Box p={2}>
                <Form>
                  <Field fullWidth component={TextField} name="fullName" label="Full Name" />
                  <Field fullWidth component={TextField} name="phoneNumber" label="Phone Number" />
                </Form>
              </Box>
            </Card>
            <Box p={2}>
              <Button variant="contained" color="primary" fullWidth disabled={isSubmitting} onClick={submitForm}>
                {isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export { Profile };
