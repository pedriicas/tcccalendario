document.addEventListener('DOMContentLoaded', function() {
    // --- DADOS MOCK ---
    const eventos = [
        { id: 1, titulo: 'Semana de Tecnologia 2025', data: '2025-08-18', descricao: 'Uma semana inteira dedicada a palestras, workshops e competições.', imagem: 'https://placehold.co/900x450/0d1b2a/e0e1dd?text=Semana+de+Tecnologia' },
        { id: 2, titulo: 'Feira de Ciências Anual', data: '2025-09-22', descricao: 'Apresentação dos melhores projetos científicos dos alunos.', imagem: 'https://placehold.co/900x450/1b263b/e0e1dd?text=Feira+de+Ciências' },
        { id: 3, titulo: 'Palestra: IA no Mercado', data: '2025-08-20', descricao: 'Convidado especial discute o impacto da Inteligência Artificial.', imagem: 'https://placehold.co/900x450/2a3950/e0e1dd?text=Palestra+de+IA' },
        { id: 4, titulo: 'Campeonato de E-Sports', data: '2025-10-05', descricao: 'Competições de jogos com prêmios para os vencedores.', imagem: 'https://placehold.co/900x450/415a77/e0e1dd?text=E-Sports' },
        { id: 5, titulo: 'Dia da Consciência Negra', data: '2025-11-20', descricao: 'Evento com palestras e apresentações culturais.', imagem: 'https://placehold.co/900x450/c4a287/0d1b2a?text=Consciência+Negra' },
        { id: 6, titulo: 'Evento de Junho', data: '2025-06-25', descricao: 'Um evento de teste no mês de Junho.', imagem: 'https://placehold.co/900x450/c4a287/0d1b2a?text=Evento+de+Junho' }
    ];
    const avisos = [
        { titulo: 'Inscrições Abertas para Monitoria', descricao: 'Procure a coordenação para mais informações.' },
        { titulo: 'Alteração no Cardápio do Restaurante', descricao: 'Novas opções a partir da próxima semana.' },
        { titulo: 'Manutenção da Biblioteca', descricao: 'A biblioteca estará fechada nos dias 15 e 16 de Julho.' }
    ];
    const minhasInscricoes = [1, 4];

    // --- ELEMENTOS DO DOM ---
    const loginSection = document.getElementById('login-section');
    const appContainer = document.getElementById('app-container');
    const loginForm = document.getElementById('login-form');
    const profileButton = document.querySelector('.profile-button');
    const profileDropdown = document.querySelector('.profile-dropdown');
    const logoutButton = document.querySelector('.logout-button');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // --- LÓGICA DE LOGIN/LOGOUT & UI ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        appContainer.style.display = 'block';
        initApp();
    });
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.style.display = 'flex';
        appContainer.style.display = 'none';
        profileDropdown.classList.remove('show');
    });
    profileButton.addEventListener('click', () => profileDropdown.classList.toggle('show'));
    window.addEventListener('click', (e) => {
        if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) profileDropdown.classList.remove('show');
    });

    // --- LÓGICA DA SIDEBAR MOBILE ---
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
    }
    mobileMenuButton.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    // --- NAVEGAÇÃO ENTRE SEÇÕES ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            const section = document.getElementById(link.dataset.section);
            if (section) section.classList.add('active');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (sidebar.classList.contains('show')) toggleSidebar();
        });
    });

    function initApp() {
        renderNews();
        renderAgenda();
        renderAvisos();
        renderInscricoes();
        renderCalendario();
        document.querySelector('.nav-link[data-section="news-section"]')?.click();
    }

    // --- FUNÇÕES DE RENDERIZAÇÃO ---
    function getLocalDate(dateString) {
        return new Date(dateString.replace(/-/g, '/'));
    }

    function renderNews() { /* ... */ }
    function renderAgenda() { /* ... */ }
    function renderAvisos() { /* ... */ }
    function renderInscricoes() { /* ... */ }
    function renderCalendario() { /* ... */ }

    // --- LÓGICAS DE COMPONENTES ---
    function setupCarousel() { /* ... */ }
    function setupAccordion() { /* ... */ }
    function setupCalendario() { /* ... */ }
});
