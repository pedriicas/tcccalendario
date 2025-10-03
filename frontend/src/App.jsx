import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <header>
    <div class="container">
      <div class="header-content">
      <Link to="./login.jsx">Ir para Login</Link>
      </div>

      <nav class="desktop-nav">
        <a href="#eventos">Eventos</a>
        <a href="#sobre">Sobre Nós</a>
        <a href="#contato">Divulgue!</a>
      </nav>

      <button id="menu-btn" class="mobile-toggle">☰</button>
    </div>

  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h2>Fique por dentro de tudo que acontece no Cotil.</h2>
        <p>O seu guia completo para os eventos, palestras, workshops e atividades do colégio.</p>
        <a href="#eventos">Ver Próximos Eventos</a>
      </div>
    </section>

    <section id="eventos">
      <div class="container">
        <h3>Próximos Eventos</h3>
        <div class="eventos-grid">

          <div class="evento">
            <p>15 de Setembro, 19:30</p>
            <h4>Palestra: IA Generativa</h4>
            <p>Uma introdução ao mundo das IAs que criam texto e imagem. Com o Prof. Dr. Exemplo. No auditório.</p>
            <a href="#">Saiba Mais</a>
          </div>

          <div class="evento">
            <p>22 a 24 de Setembro</p>
            <h4>Hackathon de Inovação</h4>
            <p>Maratona de programação para criar soluções inovadoras para a cidade. Inscrições abertas!</p>
            <a href="#">Inscreva-se</a>
          </div>

          <div class="evento">
            <p>05 de Outubro, 08:00</p>
            <h4>Campanha de Doação</h4>
            <p>Arrecadação de alimentos e agasalhos para instituições de caridade locais. Participe!</p>
            <a href="#">Veja como Ajudar</a>
          </div>

        </div>
      </div>
    </section>

    <section id="sobre">
      <div class="container sobre-content">
        <div class="texto">
          <h3>Quem somos?</h3>
          <p>O "Eventos Cotil" é uma iniciativa de alunos para alunos. Queremos conectar todos às oportunidades do Cotil.</p>
        </div>
        <div class="imagem">
          <img src="https://placehold.co/600x400" alt="Equipe Eventos Cotil" />
        </div>
      </div>
    </section>

    <section id="contato">
      <div class="container contato">
        <h3>Tem um evento para divulgar?</h3>
        <p>É organizador ou está planejando algo? Manda pra gente! Teremos o prazer de divulgar.</p>
        <a href="mailto:contato@eventoscotil.com.br">Fale Conosco</a>
      </div>
    </section>
  </main>
  <Route path="./login.jsx" element={<Login />} />


  <footer>
    <div class="container">
      <p>&copy; 2025 Eventos Cotil. Uma iniciativa de alunos para alunos.</p>
    </div>
  </footer>
      </div>
      
  
    </>

  )
}

export default App
