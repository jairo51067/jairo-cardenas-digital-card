// src/features/contact/contact.render.js

export function renderContactPage() {
    const container = document.getElementById('app');

    container.innerHTML = `
    <div class="card-contact fade-in">
        <nav class="nav-header">
            <a href="#" id="btn-home-contact" class="nav-link">
                <i class="fa-solid fa-house"></i> Home
            </a>
        </nav>

        <header class="contact-header">
            <h2>Let's Talk</h2>
            <p>¿Tienes un proyecto en mente o una consulta técnica? Estoy a un clic de distancia.</p>
        </header>

        <div class="contact-methods">
            <a href="https://wa.me/584127055024" class="contact-item" target="_blank">
                <div class="icon-box whatsapp-bg"><i class="fa-brands fa-whatsapp"></i></div>
                <div class="details">
                    <span>WhatsApp</span>
                    <small>Respuesta inmediata</small>
                </div>
                <i class="fa-solid fa-chevron-right arrow"></i>
            </a>

            <a href="mailto:jairo.cardenas.dev@gmail.com" class="contact-item">
                <div class="icon-box email-bg"><i class="fa-solid fa-envelope"></i></div>
                <div class="details">
                    <span>Email</span>
                    <small>jairo.cardenas.dev@gmail.com</small>
                </div>
                <i class="fa-solid fa-chevron-right arrow"></i>
            </a>

            <a href="https://www.linkedin.com/in/jairo-a-cárdenas-m-49b94b25" class="contact-item" target="_blank">
                <div class="icon-box linkedin-bg"><i class="fa-brands fa-linkedin-in"></i></div>
                <div class="details">
                    <span>LinkedIn</span>
                    <small>Perfil profesional</small>
                </div>
                <i class="fa-solid fa-chevron-right arrow"></i>
            </a>

            <!-- Nuevo apartado para Instagram -->
            <a href="https://www.instagram.com/jairocardenas.dev?igsh=ZG41a2o1czY1d3Ru" class="contact-item" target="_blank">
                <div class="icon-box instagram-bg"><i class="fa-brands fa-instagram"></i></div>
                <div class="details">
                    <span>Instagram</span>
                    <small>Contenido digital y diseño</small>
                </div>
                <i class="fa-solid fa-chevron-right arrow"></i>
            </a>
        </div>

        <footer class="contact-footer">
            <p>San Cristóbal, Venezuela 🇻🇪</p>
            <small>Disponibilidad para proyectos remotos</small>
        </footer>
    </div>
    `;

    // Lógica para volver al inicio
    document.getElementById('btn-home-contact').onclick = (e) => {
        e.preventDefault();
        location.reload(); 
    };
}