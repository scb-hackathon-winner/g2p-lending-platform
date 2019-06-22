import React from 'react';
import { Card, CardHeader, Avatar, CardContent, LinearProgress, Container, withStyles, Typography } from '@material-ui/core'

function MemberCard({ member = { name: null, status: { peered: false } } }) {
  return (
    <Card style={{ marginTop: '1em', marginBottom: '1em' }}>
      <CardHeader
        avatar={
          <Avatar>
            {member.name ? member.name.charAt(0) : "?"}
          </Avatar>
        }
        title={member.name || "No name"}
        subheader={
            member.status.peered ? "Peered on round " + member.status.peeredOnRound : "Not peered"
        }
      />
    </Card>
  )
}
export default MemberCard;