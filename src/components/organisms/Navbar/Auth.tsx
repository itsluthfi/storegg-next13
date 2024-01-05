import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const user = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      user.avatar = `${IMG}/${user.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

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
              <Link href="/sign-in" legacyBehavior>
                <a className="dropdown-item text-lg color-palette-2">Log Out</a>
              </Link>
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
