import React from 'react';
import { Box, Button, Typography, IconButton, Card, CardContent, Divider, LinearProgress } from '@material-ui/core';
import { Link, useParams, useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useMutation, useQuery } from '@apollo/client';
import { paths } from '../../constants';
import { TopNav } from '../../components';
import { getTotals } from '../../utils';
import ServiceList from './ServiceList';
import { RELEASE_VISIT, GET_MY_USER, GET_ACTIVE_VISITS, GET_VISIT } from '../../queries';

const VisitRelease = () => {
  const { id } = useParams<{ id: string }>();
  const visit = useQuery(GET_VISIT, { variables: { id: Number(id) } });
  const myUser = useQuery(GET_MY_USER);
  const [releaseVisit, { loading: isReleasing }] = useMutation(RELEASE_VISIT, {
    refetchQueries: [{ query: GET_ACTIVE_VISITS }, { query: GET_VISIT }],
  });
  const history = useHistory();

  if (visit.loading || myUser.loading) return <LinearProgress />;

  const { services, baseFee, client, notes } = visit.data.visit;
  const { taxes, total, serviceFees } = getTotals(services, baseFee);

  const handleProceed = async () => {
    if (!myUser.data.myUser.customerId) {
      history.push({ pathname: paths.paymentMethod, search: `?visitId=${id}` });
      return;
    }

    await releaseVisit({ variables: { id } });
  };

  return (
    <>
      <TopNav>
        <IconButton aria-label="Go Back" component={Link} to={paths.visitNew}>
          <ChevronLeftIcon htmlColor="#FFF" />
        </IconButton>
        <Typography variant="h1">
          <b>Confirm Order</b>
        </Typography>
        <Box width="44px" visibility="hidden" />
      </TopNav>
      <Box m={2}>
        <ServiceList services={services} />
      </Box>

      <Box m={2}>
        <Card>
          <CardContent>
            <Typography variant="h2">
              <b>Client</b>
            </Typography>
            <Typography gutterBottom>{client.fullName}</Typography>

            <Box my={2} />
            <Typography variant="h2">
              <b>Notes</b>
            </Typography>
            <Typography gutterBottom>{notes}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Divider />
      <Box p={2}>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Base Fee</Typography>
          <Typography>{`$${(baseFee / 100).toFixed(2)}`}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Service Fees</Typography>
          <Typography>{serviceFees}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>HST/Taxes (13%)</Typography>
          <Typography>{taxes}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>
            <b>Total</b>
          </Typography>
          <Typography>{total}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box p={2}>
        <Typography align="center">Confirm order by tapping &quot;Find a Helper&quot;</Typography>
        <Box py={1} />
        <Button variant="contained" color="primary" fullWidth onClick={handleProceed} disabled={isReleasing}>
          Find a Helper
        </Button>
        <Button fullWidth component={Link} to={paths.visitNew}>
          Go Back
        </Button>
      </Box>
    </>
  );
};

export default VisitRelease;
