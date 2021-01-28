import * as React from 'react';
import { Box, Typography, ListItem, Icon, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { paths } from '../../constants';

type Client = {
  fullName: string;
};

type Service = {
  id: string;
  name: string;
};

type HomeServiceProps = {
  id: string;
  client: Client;
  services: Service[];
};

const getMessage = (visit) => {
  if (visit.finishedAt) return 'Visit complete';
  if (visit.startedAt) return 'Visit ongoing';
  if (visit.matchedAt) return 'Helper is on the way';
  if (visit.releasedAt) return 'Searching for a Helper';
  return 'New Request';
};

const HomeService = ({ id, client, services, ...rest }: HomeServiceProps) => {
  // const { fees } = getTotals(services);

  return (
    <>
      <ListItem button component={Link} to={paths.visit.replace(':id', id)}>
        <Box display="flex" width="100%" alignItems="center">
          <Box style={{ marginRight: 'auto' }}>
            <Typography gutterBottom>
              <b>{client.fullName}</b>
            </Typography>
            {services.map((service) => (
              <Typography variant="body2" key={service.id}>
                {service.name}
              </Typography>
            ))}
            <Box pt={2}>
              <Typography color="primary">
                <b>{getMessage(rest)}</b>
              </Typography>
            </Box>
          </Box>
          <Icon color="action">chevron_right</Icon>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default HomeService;
