```php
<?php
// Inicia a sessão (se ainda não estiver iniciada)
if (!isset($_SESSION)) session_start();

// Define tema padrão
if (!isset($_SESSION['theme'])) {
    $_SESSION['theme'] = 'light';
}

// Alterna o tema quando o botão é clicado
if (isset($_GET['toggle_theme'])) {
    $_SESSION['theme'] = ($_SESSION['theme'] === 'light') ? 'dark' : 'light';
    header("Location: " . strtok($_SERVER["REQUEST_URI"], '?')); // recarrega sem manter ? na URL
    exit;
}
?>

<header id="page-header">
    <div class="header-left">
        <button class="mobile-menu-button">
            <i class="fas fa-bars"></i>
        </button>
        <a href="#" class="logo">
            <i class="fas fa-star logo-icon"></i>
            <span>EVENTOS COTIL</span>
        </a>
    </div>
    <div class="header-right">
        <!-- Botão para alternar tema -->
        <a href="?toggle_theme=1" class="theme-toggle" title="Trocar tema">
            <?php echo $_SESSION['theme'] === 'light' ? "🌙" : "☀️"; ?>
        </a>

        <!-- Botão de perfil -->
        <button class="profile-button">
            <img src="https://placehold.co/40x40/e0e1dd/0d1b2a?text=EC" alt="Foto do Perfil" />
        </button>
    </div>
</header>
```
