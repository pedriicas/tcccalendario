<?php
// Inicia sessão e define tema
if (!isset($_SESSION)) session_start();
$theme = $_SESSION['theme'] ?? 'light';
?>
<?php include 'includes/head.php'; ?>
<body class="<?php echo $theme; ?>">
    <?php include 'includes/header.php'; ?>
    <?php include 'includes/sidebar.php'; ?>

    <main id="main-content">
        <section id="news-section" class="content-section active">
            <h2 class="section-header">Próximos Eventos</h2>
            <!-- O conteúdo pode ser carregado dinamicamente pelo JS -->
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
