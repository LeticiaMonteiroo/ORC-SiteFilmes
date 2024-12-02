"use client";

import Link from "next/link";
import "./style.scss";
import { useState } from "react";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function whenFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(data);

    const correctEmail = localStorage.getItem("email");
    const corretPassword = localStorage.getItem("password");

    if((data.email !== correctEmail) && (data.password !== corretPassword)) {
      alert('email e ou senha errados')
    } else {
      localStorage.setItem('logado', 'true');
      window.location.href='/'
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={whenFormSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={data.email}
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              required
              value={data.password}
              onChange={(e) => {
                setData({
                  ...data,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button type="submit" className="btn">
            Entrar
          </button>
        </form>
        <div id="naoconta">
          <Link href="/cadastro">Não tenho uma conta</Link>
        </div>
      </div>
    </div>
  );
}
