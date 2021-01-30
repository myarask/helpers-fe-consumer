import React from 'react';
import { Typography, Box, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ServiceIcon } from '../../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      background: theme.palette.primary.main,
      height: '1.5rem',
      width: '1.5rem',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

type Service = {
  id: number;
  serviceId: number;
  name: string;
  fee: number;
};

type ServiceListProps = {
  services: Service[];
  noFees?: boolean;
};

const ServiceList = ({ services, noFees }: ServiceListProps) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" gutterBottom>
        <b>Services required today:</b>
      </Typography>
      {services.map((service) => (
        <Box key={service.id} display="flex" justifyContent="space-between" pt={1}>
          <Box display="flex" alignItems="center">
            <Box className={classes.icon} mr={1}>
              <ServiceIcon id={service.serviceId} size="small" color="white" name={service.name} />
            </Box>
            <Typography>{service.name}</Typography>
          </Box>

          {!noFees && (
            <Typography>
              <>$</>
              <>{(service.fee / 100).toFixed(2)}</>
            </Typography>
          )}
        </Box>
      ))}
    </>
  );
};

export default ServiceList;
