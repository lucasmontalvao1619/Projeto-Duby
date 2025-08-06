document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'barraLateral';
    
    sidebar.innerHTML = `
                <div class="logo">
                    <img src="../Assets/imgs/logo-duby.svg" alt="duby">
                </div>
                <nav class="menuNav">
                    <ul>
                        <li class="itemMenu">
                            <a href="../Dashboard/dashboard.html" data-page="dashboard.html">
                                <i class="menuIcone" data-lucide="layout-dashboard"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Conciliacao/conciliacao.html" data-page="conciliacao.html">
                                <i class="menuIcone" data-lucide="clipboard-check"></i>
                                <span>Conciliação</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Usuarios/usuarios.html" data-page="usuarios.html">
                                <i class="menuIcone" data-lucide="users"></i>
                                <span>Usuários</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Relatorios/relatorios.html" data-page="relatorios.html">
                                <i class="menuIcone" data-lucide="file-text"></i>
                                <span>Relatórios</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Graficos/graficos.html" data-page="graficos.html">
                                <i class="menuIcone" data-lucide="pie-chart"></i>
                                <span>Gráficos</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Contas/contas.html" data-page="contas.html">
                                <i class="menuIcone" data-lucide="building-2"></i>
                                <span>Contas Bancárias</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Adquirentes/adquirentes.html" data-page="adquirentes.html">
                                <i class="menuIcone" data-lucide="credit-card"></i>
                                <span>Adquirentes</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="rodapeBarra">
                    <div class="itemMenu rodape">
                        <a class="tema">
                            <i class="menuIcone" data-lucide="moon"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../Configuracoes/configuracoes.html" data-page="configuracoes.html">
                            <i class="menuIcone" data-lucide="settings"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../Ajuda/ajuda.html" data-page="ajuda.html">
                            <i class="menuIcone" data-lucide="help-circle"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../index.html" data-page="index.html">
                            <i class="menuIcone" data-lucide="log-out"></i>
                        </a>
                    </div>
                </div>
    `;
    
    document.body.appendChild(sidebar);
    
    const pageTitle = document.querySelector('h1')?.textContent || 'Página';
    
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu-container';
    mobileMenu.innerHTML = `
        <div class="mobile-header-fixed">
            <button class="menuBtn">
                <i class="menuIcone" data-lucide="menu"></i>
            </button>
            <h1 class="mobile-page-title">${pageTitle}</h1>
            <div class="mobile-header-actions">
                <button class="notification-trigger-btn">
                    <i class="menuIcone" data-lucide="bell"></i>
                </button>
            </div>
        </div>
        <div class="mobileOverlay">
            <div class="mobileCard">
                <div class="mobileHeader">
                    <button class="close-btn">
                        <i class="menuIcone" data-lucide="x"></i>
                    </button>
                    <div class="mobile-user-actions">
                        <a href="#" class="mobile-action-btn">
                            <i class="menuIcone" data-lucide="user"></i>
                        </a>
                        <a href="#" class="mobile-action-btn">
                            <i class="menuIcone" data-lucide="search"></i>
                        </a>
                        <a href="#" class="mobile-action-btn">
                            <i class="menuIcone" data-lucide="bell"></i>
                        </a>
                    </div>
                </div>
                <nav class="mobile-nav">
                    <ul>
                        <li class="itemMenu">
                            <a href="../Dashboard/dashboard.html" data-page="dashboard.html">
                                <i class="menuIcone" data-lucide="layout-dashboard"></i>
                                <span class="menu-text">Dashboard</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Conciliacao/conciliacao.html" data-page="conciliacao.html">
                                <i class="menuIcone" data-lucide="clipboard-check"></i>
                                <span class="menu-text">Conciliação</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Usuarios/usuarios.html" data-page="usuarios.html">
                                <i class="menuIcone" data-lucide="users"></i>
                                <span class="menu-text">Usuários</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Relatorios/relatorios.html" data-page="relatorios.html">
                                <i class="menuIcone" data-lucide="file-text"></i>
                                <span class="menu-text">Relatórios</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Graficos/graficos.html" data-page="graficos.html">
                                <i class="menuIcone" data-lucide="pie-chart"></i>
                                <span class="menu-text">Gráficos</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Contas/contas.html" data-page="contas.html">
                                <i class="menuIcone" data-lucide="building-2"></i>
                                <span class="menu-text">Contas Bancárias</span>
                            </a>
                        </li>
                        <li class="itemMenu">
                            <a href="../Adquirentes/adquirentes.html" data-page="adquirentes.html">
                                <i class="menuIcone" data-lucide="credit-card"></i>
                                <span class="menu-text">Adquirentes</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="mobile-footer">
                    <div class="itemMenu rodape">
                        <a class="tema-mobile">
                             <i class="menuIcone" data-lucide="moon"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../Configuracoes/configuracoes.html" data-page="configuracoes.html">
                            <i class="menuIcone" data-lucide="settings"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../Ajuda/ajuda.html" data-page="ajuda.html">
                            <i class="menuIcone" data-lucide="help-circle"></i>
                        </a>
                    </div>
                    <div class="itemMenu rodape">
                        <a href="../index.html" data-page="index.html">
                            <i class="menuIcone" data-lucide="log-out"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    const notificationOverlay = document.createElement('div');
    notificationOverlay.className = 'notification-overlay';
    notificationOverlay.style.display = 'none';
    notificationOverlay.innerHTML = `
        <div class="notification-card">
            <div class="notification-header">
                <h2>Notificações</h2>
                <button class="close-notification-btn">
                    <i class="menuIcone" data-lucide="x"></i>
                </button>
            </div>
            <div class="notification-body">
                <ul>
                    <li class="notification-item unread">
                        <p><strong>Nova conciliação!</strong></p>
                        <p>Uma nova conciliação foi realizada com sucesso.</p>
                        <span class="notification-time">Há 5 minutos</span>
                    </li>
                    <li class="notification-item">
                        <p><strong>Relatório disponível</strong></p>
                        <p>Seu relatório mensal está pronto para download.</p>
                        <span class="notification-time">Há 2 horas</span>
                    </li>
                    <li class="notification-item">
                        <p><strong>Atualização de segurança</strong></p>
                        <p>A sua senha foi alterada com sucesso.</p>
                        <span class="notification-time">Ontem</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
    document.body.appendChild(notificationOverlay);
    
    function highlightActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop();
        const menuLinks = document.querySelectorAll('.itemMenu a, .mobile-footer a');
        
        menuLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            if (page === currentPage) {
                link.classList.add('ativo');
            } else {
                link.classList.remove('ativo');
            }
        });
    }
    
    highlightActiveMenuItem();
    
    function toggleTheme() {
        const isDark = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        const themeIcons = document.querySelectorAll('.tema .menuIcone, .tema-mobile .menuIcone');
        
        themeIcons.forEach(icon => {
            icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        });

        if (window.lucide) {
            lucide.createIcons();
        }
    }

    const themeButtons = document.querySelectorAll('.tema, .tema-mobile');
    themeButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        const themeIcons = document.querySelectorAll('.tema .menuIcone, .tema-mobile .menuIcone');
        themeIcons.forEach(icon => icon.setAttribute('data-lucide', 'sun'));
    }

    const hamburgerBtn = document.querySelector('.menuBtn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileOverlay = document.querySelector('.mobileOverlay');
    
    function openMenu() {
        mobileOverlay.style.display = 'flex';
        hamburgerBtn.style.display = 'none';
    }
    
    function closeMenu() {
        mobileOverlay.style.display = 'none';
        hamburgerBtn.style.display = 'block';
    }
    
    if (hamburgerBtn && closeBtn && mobileOverlay) {
        hamburgerBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        
        mobileOverlay.addEventListener('click', (e) => {
            if (e.target === mobileOverlay) {
                closeMenu();
            }
        });
    }

    const notificationTrigger = document.querySelector('.notification-trigger-btn');
    const closeNotificationBtn = document.querySelector('.close-notification-btn');

    if (notificationTrigger && notificationOverlay && closeNotificationBtn) {
        notificationTrigger.addEventListener('click', () => {
            notificationOverlay.style.display = 'flex';
        });

        closeNotificationBtn.addEventListener('click', () => {
            notificationOverlay.style.display = 'none';
        });

        notificationOverlay.addEventListener('click', (e) => {
            if (e.target === notificationOverlay) {
                notificationOverlay.style.display = 'none';
            }
        });
    }

    let lastScrollTop = 0;
    const mobileHeader = document.querySelector('.mobile-header-fixed');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop && currentScroll > 50) {
            mobileHeader.style.transform = 'translateY(-100%)';
        } else {
            mobileHeader.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    const style = document.createElement('style');
    style.textContent = `
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }

        body {
            font-family: 'TT Commons', sans-serif;
            margin-left: calc(230px + 8px);
        }

        .barraLateral {
            color: white;
            padding: 1.5rem 0.75rem;
            display: flex;
            position: fixed;
            flex-direction: column;
            height: calc(100vh - 16px);
            top: 8px;
            bottom: 8px;
            left: 8px;
            width: 230px;
            border-radius: 12px;
            z-index: 1;
        }

        .logo {
            margin-top: 1rem;
            margin-bottom: 2rem;
            display: flex;
            justify-content: center;
        }
        .logo img {
            width: 150px;
        }

        .menuNav ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            margin-top: 1.5rem;
        }

        .itemMenu a {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.7rem;
            border-radius: 8px;
            color: white;
            text-decoration: none;
            width: 100%;
        }

        .itemMenu a:hover {
            background: rgba(246, 246, 246, 0.050);
        }

        .itemMenu a.ativo {
            background: rgba(246, 246, 246, 0.120);
        }

        .itemMenu span {
            font-size: 0.875rem;
            font-weight: 500;
        }

        .rodapeBarra {
            margin-top: auto;
            margin-bottom: -10px;
            display: flex;
            justify-content: center;
            gap: 0.5rem;
        }

        .rodapeBarra .menuIcone {
            width: 1.1rem;
            stroke-width: 2.5px;
        }

        .menuIcone {
            width: 1.2rem;
            stroke-width: 2.5px;
        }

        .mobile-header-fixed {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            
            backdrop-filter: blur(6px);
            padding: 15px 20px;
            z-index: 998;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.3s ease-in-out;
        }

        .mobile-page-title {
            font-size: 1.1rem;
            font-weight: 500;
            margin: 0;
            text-align: center;
            flex-grow: 1;
            padding: 0 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .mobile-header-actions {
            display: flex;
            gap: 15px;
        }

        .mobile-menu-container {
            display: none;
        }

        .menuBtn {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
        }

        .mobileOverlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            justify-content: flex-start;
        }

        .mobileCard {
            width: 65%;
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            border-bottom-right-radius: 12px;
            border-top-right-radius: 12px ;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
        }

        .mobileHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
        }

        .mobile-user-actions {
            display: flex;
            gap: 15px;
        }

        .mobile-action-btn {
            color: white;
            font-size: 1.2rem;
        }

        .mobile-nav {
            flex: 1;
            overflow-y: visible;
        }

        .mobile-nav ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 0;
        }

        .mobile-nav .itemMenu a {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            font-size: 1rem;
            color: white;
            border-radius: 6px;
        }

        .menu-text {
            display: block !important;
            color: white !important;
            font-size: 0.95rem !important;
        }

        .mobile-nav .itemMenu a.ativo {
            background: rgba(255, 255, 255, 0.15);
        }

        .mobile-footer {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            padding: 10px 0;
            margin-top: auto;
        }

        .mobile-footer .itemMenu {
            margin: 0;
        }

        .mobile-footer a {
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 600px) {
            body {
                margin-left: 0;
            }
            .barraLateral {
                display: none;
            }
            .mobile-menu-container {
                display: block;
            }
            .mobile-header-fixed {
                display: flex;
            }
            .menuBtn {
                display: block;
            }
            
            .cabecalho h1 {
                display: none;
            }
            
            .conteudoPrincipal {
                margin-top: 10px;
            }
        }

        .notification-trigger-btn {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
            padding: 0;
        }
        
        .notification-trigger-btn .menuIcone {
             color: #1A1A1A;
        }
        
        body.dark .notification-trigger-btn .menuIcone {
            color: white;
        }

        .notification-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .notification-card {
            background-color: #FFFFFF;
            color: #1A1A1A;
            width: 100%;
            max-width: 500px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            max-height: 90vh;
        }

        body.dark .notification-card {
            background-color: #2c2c3e;
            color: white;
        }

        .notification-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #e0e0e0;
        }

        body.dark .notification-header {
            border-bottom: 1px solid #444;
        }

        .notification-header h2 {
            font-size: 1.1rem;
            font-weight: 500;
            margin: 0;
        }

        .close-notification-btn {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            padding: 5px;
        }

        .notification-body {
            padding: 0;
            overflow-y: auto;
        }

        .notification-body ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .notification-item {
            padding: 15px 20px;
            border-bottom: 1px solid #e0e0e0;
        }
        
        .notification-item:last-child {
            border-bottom: none;
        }

        body.dark .notification-item {
            border-bottom: 1px solid #444;
        }

        .notification-item p {
            margin: 0 0 5px 0;
            font-size: 0.9rem;
        }

        .notification-item p strong {
            font-weight: 600;
        }

        .notification-item.unread {
            background-color: #f7f7f7;
        }
        
        body.dark .notification-item.unread {
            background-color: rgba(255, 255, 255, 0.08);
        }

        .notification-time {
            font-size: 0.75rem;
            color: #888;
        }

        body.dark .notification-time {
            color: #aaa;
        }
    `;
    
    document.head.appendChild(style);
    
    if (window.lucide) {
        lucide.createIcons();
    }
});