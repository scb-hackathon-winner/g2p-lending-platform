import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import { AccountBalance } from '@material-ui/icons';

function BidPeerCard() {
  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" align="center">
            <AccountBalance /> Bid Peer
          </Typography>
        }
        style={{ paddingBottom: 0 }}
      />
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          Bid ended.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BidPeerCard;
