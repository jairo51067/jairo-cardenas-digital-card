export function renderProjectsPage() {
    const container = document.getElementById('app');
    
    container.innerHTML = `
        <article class="card fade-in">
            <section class="card-content projects-view">
                <nav class="nav-header">
                    <a href="#" id="btn-home" class="nav-link">
                        <i class="fa-solid fa-house"></i> Home
                    </a>
                </nav>

                <h1 class="projects-main-title">Key Projects</h1>
                <p class="projects-subtitle">Soluciones digitales con impacto real, arquitectura simple y escalable.</p>
                
                <div class="projects-list-container">
                    <div class="project-card">
                        <span class="badge-new">NUEVO</span>
                        <div class="project-card-header">
                            <div class="project-icon-box"><i class="fa-solid fa-cart-shopping"></i></div>
                            <div class="project-info">
                                <h3 class="project-title">VendeMás E-commerce</h3>
                                <p class="project-desc">🛍️ Tu tienda online con WhatsApp integrado en minutos. - Solución de ventas online.</p>
                            </div>
                            <a href="https://e-commerce-2026-peach.vercel.app/" class="project-link-arrow"><i class="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-card-header">
                            <div class="project-icon-box"><i class="fa-solid fa-chart-line"></i></div>
                            <div class="project-info">
                                <h3 class="project-title">PayControl App</h3>
                                <p class="project-desc">💰 Sistema de gestión de pagos y deudas de clientes.</p>
                            </div>
                            <a href="https://paycontrol-app.vercel.app/" class="project-link-arrow"><i class="fa-solid fa-circle-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div class="building-notice">
                    <div class="building-icon"><i class="fa-solid fa-screwdriver-wrench"></i></div>
                    <div class="building-text">
                        <strong>Building the showcase</strong>
                        <p>Estoy actualizando esta sección con mis proyectos más recientes. ¡Vuelve pronto!</p>
                    </div>
                </div>

                <div class="explore-more-section">
                    <p class="explore-label">EXPLORA MÁS</p>
                    <a href="https://jairo51067.github.io/jairo-cardenas-dev-portfolio/" target="_blank" class="btn-portfolio-full">
                        Ver Portafolio Completo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            </section>

            <footer class="projects-footer">
             <span>Explore my code on GitHub</span>
            <a href="https://github.com/jairo51067" target="_blank" class="github-footer-link">
                <i class="fa-brands fa-github"></i>
            </a>
            </footer>
        </article>
    `;
}  