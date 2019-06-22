import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function RoundStartCard({ event }) {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h2"
          align="center"
          style={{ marginTop: '0.2em', marginBottom: '0.2em' }}
        >
          Round {event.roundNumber}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RoundStartCard;
