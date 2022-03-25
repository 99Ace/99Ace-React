import React from 'react';
import { ReactSession } from 'react-client-session';

export default function ShowUser() {
  const username = ReactSession.get("username");

  return (
    <p>User Name is: {username}</p>
  )
}

