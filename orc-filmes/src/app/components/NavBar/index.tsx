"use client";

import Link from "next/link";
import "./index.scss";
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const isLoggedIn = Boolean(localStorage.getItem("logado"));
  const router = useRouter()

  return (
    <nav className="NavBar">
      <Link href='/' className="page-title">Filmes</Link>

      <ul>
        {!isLoggedIn && (
          <li>
            <button className="login-btn"onClick={() => router.push('/login')}>Login</button>
          </li>
        )}

        {isLoggedIn && (
          <Link href='\login'>Olá, {localStorage.getItem('name')}</Link>
        )}
      </ul>
    </nav>
  );
}
