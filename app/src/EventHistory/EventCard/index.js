import React from 'react';
import { LocalAtm, AccountBalance } from '@material-ui/icons'
import { Card, CardHeader, CardContent, Typography, Container, Avatar } from '@material-ui/core'

import RoundStartCard from './RoundStartCard';
import PayShareCard from './PayShareCard';
import BidPeerCard from './BidPeerCard';
import PeerResultsCard from './PeerResultsCard';

function EventCard({event}) {
  switch(event.type) {
    case 'roundStart': return <RoundStartCard event={event} />
    case 'payShare': return <PayShareCard event={event} />
    case 'bidPeer': return <BidPeerCard event={event} />
    case 'peerResults': return <PeerResultsCard event={event} />
    default: return <Card><CardContent> EventCard </CardContent></Card>
  }
}

export default EventCard;