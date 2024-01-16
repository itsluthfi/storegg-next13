import { useEffect, useState } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { JTWPayloadTypes, UserTypes } from '@/services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JTWPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      userPayload.avatar = `${IMG}/${userPayload.avatar}`;
      setUser(userPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={user.avatar}
        width={90}
        height={90}
        className="img-fluid mb-20"
        alt=""
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
