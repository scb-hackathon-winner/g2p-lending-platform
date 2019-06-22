import React from 'react';
import { CardHeader, Avatar } from '@material-ui/core'

function LoanCardHeader({ loan }) {
  return (
    <CardHeader 
    avatar={
      <Avatar>
        {loan.name.charAt(0)}
      </Avatar>
    }
    title={loan.name}
    subheader={
      <div style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          {"฿" + loan.invested || "0"}
        </div>
        <div style={{flex: 1}}>
          {loan.interest && loan.interest + "%"}
        </div>
        <div style={{flex: 1}}>
          {loan.duration}
        </div>
      </div>
    }
    />
  )
}

export default LoanCardHeader;