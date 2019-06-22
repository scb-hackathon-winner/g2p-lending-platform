import React from 'react';
import {
  Typography,
  Container,
  Avatar,
  Paper,
  Divider,
} from '@material-ui/core';

const profile = {
  name: 'Jakpat Mingmongkolmitr',
};

function Profile() {
  return (
    <div>
      <Container fixed>
        <Typography variant="h4" style={{ marginBottom: '1em' }}>
          Profile
        </Typography>
        <Paper style={{ padding: '30px' }}>
          <div
            style={{
              display: 'flex',
              'justify-content': 'flex-start',
              'flex-wrap': 'wrap',
            }}
          >
            <Avatar style={{ width: 60, height: 60, marginRight: '1em' }}>
              {profile.name ? profile.name.charAt(0) : '?'}
            </Avatar>
            <Typography variant="h5">{profile.name || 'John Doe'}</Typography>
          </div>

          <Divider style={{ marginTop: '1em', marginBottom: '1em' }} />

          <Typography variant="h6">Personal Information</Typography>

          <div style={{ marginTop: '10px', marginBottom: '20px' }}>
            Citizen ID: 6183389225224 <br />
            Occupation: Developer <br />
            Phone No: 0989199218 <br />
            Address: 105 S. Rocky River St. Westwood, NJ 07675
          </div>

          <Typography variant="h6">History</Typography>

          <div style={{ marginTop: '10px' }}>
            Number of share: 22 <br />
            Average share: ฿ 2000 <br />
            Average peer: ฿ 50 <br />
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Profile;
