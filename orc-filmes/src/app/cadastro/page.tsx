"use client";

import "./style.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if(data.confirmPassword !== data.password) {
      alert('senha nao conincide')
    }

    localStorage.setItem('email', data.email);
    localStorage.setItem('password', data.password);
    localStorage.setItem('name', data.name);

    alert('conta criada com sucesso');
    router.push('/login');
  }

  return (
    <div className="container">
      <div className="form-container">
        <h2>Crie sua conta</h2>

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={data.name}
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
              required
            />
          </div>
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
          <div className="input-group">
            <label htmlFor="Confirme">Confirme sua senha</label>
            <input
              type="password"
              id="confirmesenha"
              name="confirmesenha"
              required
              value={data.confirmPassword}
              onChange={(e) => {
                setData({
                  ...data,
                  confirmPassword: e.target.value,
                });
              }}
            />

            {data.confirmPassword !== data.password && <p>Senha nao concide</p>}
          </div>
          <button
            type="submit"
            className="btn"
            disabled={data.confirmPassword !== data.password}
          >
            Confirmar
          </button>
        </form>
        <div id="textoconta">
          <Link id="conta" href="/login">
            Já tenho uma conta
          </Link>
        </div>
      </div>
    </div>
  );
}
