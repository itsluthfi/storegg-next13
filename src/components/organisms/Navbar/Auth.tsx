import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { JTWPayloadTypes, UserTypes } from '@/services/data-types';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JTWPayloadTypes = jwtDecode(jwtToken);
      const userPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      user.avatar = `${IMG}/${userPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={user.avatar}
              className="rounded-circle"
              width={40}
              height={40}
              alt="Avatar"
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link href="/member" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">
                  My Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">
                  Account Settings
                </a>
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className="dropdown-item text-lg color-palette-2"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in" legacyBehavior>
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}
