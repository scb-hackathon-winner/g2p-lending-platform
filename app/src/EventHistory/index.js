import React from 'react';
import { Card, CardHeader, Typography, Avatar, Paper } from '@material-ui/core'

import EventCard from './EventCard';

const events = [
  {
    type: "roundStart",
    roundNumber: 1,
  },
  {
    type: "payShare",
    payList: [
      "P", "W", "J", "N", "T"
    ],
    everyonePaid: true
  },
  {
    type: "bidPeer",
  },
  {
    type: "peerResults",
  }
]

function EventHistory() {
  return (
    <div>
      <Typography variant="h6">
        Event History
      </Typography>

      {
        events.map(event => (
          <EventCard event={event} />
        ))
      } 
    </div>
  )
}
export default EventHistory;