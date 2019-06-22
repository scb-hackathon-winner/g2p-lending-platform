import React from 'react';
import { Typography } from '@material-ui/core';
import MemberCard from './MemberCard';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

const members = [
  {
    name: 'Piriyapong Laopongsit',
    status: {
      peered: false,
    },
  },
  {
    name: 'Jakpat Mingmongkolmitr',
    status: {
      peered: true,
      peeredOnRound: 1,
    },
  },
  {
    name: 'Natchapol Srisang',
    status: {
      peered: true,
      peeredOnRound: 2,
    },
  },
  {
    name: 'Wattanai Thangsrirojkul',
    status: {
      peered: false,
    },
  },
  {
    name: 'Thad Benjapolpitak',
    status: {
      peered: false,
    },
  },
];

function RoomInfo() {
  const [roomSnapshot, loading, error] = useDocumentOnce(
    db.doc(`rooms/${URLSearchParams roomId}`),
  );
  if (loading || error) {
    return null;
  }
  roomSnapshot

  return (
    <div>
      <Typography variant="h6">Room info</Typography>
      <Typography variant="h5" gutterBottom>
        <strong>แชร์ตังสบายจัย</strong>
      </Typography>

      <hr />

      <Typography gutterBottom>
        Members: <strong>5</strong>
        <br />
        Share Date: <strong>5th June 2019</strong>
        <br />
        Share Amount: <strong> ฿ 2000 </strong>
        <br />
        Peer Dates: <strong>Every Tuesday</strong>
      </Typography>

      <hr style={{ marginTop: '1em', marginBottom: '1em' }} />

      <Typography variant="h6">Members</Typography>
      {members.map(member => (
        <MemberCard member={member} />
      ))}
    </div>
  );
}

export default RoomInfo;
