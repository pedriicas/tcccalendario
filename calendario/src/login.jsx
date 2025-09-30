import React from 'react';
import './login.module.css'; // Arquivo de CSS que você vai criar para estilizar

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Cabeçalho */}
        <div className="login-header">
          <svg xmlns="http://www.w3.org/2000/svg" className="login-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h1 className="login-title">EVENTOS COTIL</h1>
        </div>

        <div className="login-form-title">
          <h2>Entrar</h2>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu usuário"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="create-account">
          Não tem uma conta? <a href="#">Crie uma aqui</a>
        </p>
      </div>

      <div className="back-link">
        <a href="paginaInicial.html">&larr; Voltar para a página inicial</a>
      </div>
    </div>
  );
}

export default Login;
