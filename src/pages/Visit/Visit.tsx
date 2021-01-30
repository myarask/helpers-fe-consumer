import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LinearProgress } from '@material-ui/core';
import VisitRelease from './Visit1Release';
import VisitMatch from './Visit2Match';
import VisitStarted from './Visit3Started';
import VisitFinished from './Visit4Finished';
import { BackTopNav } from '../../components';
import { GET_VISIT } from '../../queries';

const Visit = () => {
  const { id } = useParams<{ id: string }>();
  const visit = useQuery(GET_VISIT, {
    variables: { id: Number(id) },
    pollInterval: 10000,
  });

  return (
    <>
      {visit.loading && (
        <>
          <BackTopNav />
          <LinearProgress />
        </>
      )}
      {visit.data && (
        <Switch>
          {!visit.data.visit.releasedAt && <Route component={VisitRelease} />}
          {!visit.data.visit.matchedAt && <Route component={VisitMatch} />}
          {!visit.data.visit.finishedAt && <Route component={VisitStarted} />}
          {visit.data.visit.finishedAt && <Route component={VisitFinished} />}
        </Switch>
      )}
    </>
  );
};

export { Visit };
