import React from 'react';
import { Card, Avatar, CardHeader, Typography } from '@material-ui/core';

function PeerResultsCard() {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>W</Avatar>}
        title={<Typography variant="h5">Wattanai peered!</Typography>}
        subheader="Bid: 10฿, Total Peered Fund: 10030฿"
      />
    </Card>
  );
}

export default PeerResultsCard;
