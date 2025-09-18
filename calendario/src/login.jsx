

export default function Login() {
    return (
    <>
      <div>
      <header class="login-header">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon-star" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <h1>EVENTOS COTIL</h1>
    </header>

    <h2 class="login-title">Entrar</h2>

    <form action="#" method="POST" class="login-form">
      <div class="form-group">
        <label for="username">Usuário</label>
        <input type="text" id="username" name="username" placeholder="Digite seu usuário" required></input>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" name="password" placeholder="Digite sua senha" required></input>
      </div>

      <div class="form-footer">
        <a href="#">Esqueceu a senha?</a>
      </div>

      <button type="submit" class="btn-login">Entrar</button>
    </form>

    <p class="register-text">
      Não tem uma conta?
      <a href="#">Crie uma aqui</a>
    </p>
  </div>

  <div class="back-link">
    <a href="paginaInicial.html">&larr; Voltar para a página inicial</a>
  </div>
    </>
  )
}