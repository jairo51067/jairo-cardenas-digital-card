export const profileTemplate = (user, projects) => {
    // Aquí generamos el HTML de los proyectos que ahora están en el config
    const projectsList = projects.map(proj => `
        <div class="dash-btn-container" style="position: relative;">
            ${proj.isNew ? '<span class="badge-new">NUEVO</span>' : ''}
            <a href="${proj.url}" target="_blank" class="dash-btn">
                <i class="fas ${proj.icon}"></i>
                <span>${proj.title}</span>
            </a>
        </div>
    `).join('');

    return `
        <div class="card-header">
            <div class="profile-img"></div>
        </div>
        <div class="card-content">
            <h1 class="name">${user.name}</h1>
            <p class="role">Full-Stack Developer & PM</p>
            
            <div class="dashboard-grid">
                ${projectsList}
                <a href="#" class="dash-btn"><i class="fas fa-user"></i><span>About</span></a>
                <a href="#" class="dash-btn"><i class="fas fa-envelope"></i><span>Contact</span></a>
            </div>
        </div>
    `;
};