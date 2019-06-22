import React from 'react';
import { Card, CardHeader, Avatar, CardContent, LinearProgress, Container, withStyles } from '@material-ui/core'
import LoanCardHeader from './LoanCardHeader';

const FirstLoanProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress)
const SecondLoanProgress = LinearProgress

function LoanCard({ loan }) {
  return (
    <Card style={{ marginTop: '1em', marginBottom: '1em' }}>
      <LoanCardHeader loan={loan} />
      <CardContent>
        <Container style={{display: 'flex'}}>
          <FirstLoanProgress style={{flex: 1}} variant="determinate" value={100} />
          <SecondLoanProgress style={{flex: 1}} variant="determinate" value={50} />
        </Container>
      </CardContent>
    </Card>
  )
}
export default LoanCard;