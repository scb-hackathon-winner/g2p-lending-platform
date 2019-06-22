import React from 'react';
import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  Container,
  Avatar,
} from '@material-ui/core';
import { LocalAtm } from '@material-ui/icons';

function PayShareCard({ event }) {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" align="center">
            <LocalAtm /> Pay Share
          </Typography>
        }
        titleTypographyProps={{ align: 'center' }}
        style={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          {event.payList.map(payerInitial => (
            <Avatar> {payerInitial} </Avatar>
          ))}
        </Container>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          {event.everyonePaid ? 'Everyone paid' : 'Waiting...'}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default PayShareCard;
