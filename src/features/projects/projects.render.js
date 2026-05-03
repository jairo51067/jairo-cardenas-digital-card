export function renderProjectsPage() {
  const container = document.getElementById("app");

  const projects = [
    {
      id: 1,
      title: "VendeMás E-commerce",
      desc: "🛍️ Tu tienda online con WhatsApp integrado en minutos.",
      icon: "fa-cart-shopping",
      link: "https://e-commerce-2026-peach.vercel.app/",
      category: "saas",
      isNew: true,
    },
    {
      id: 2,
      title: "PayControl App",
      desc: "💰 Sistema de gestión de pagos y deudas.",
      icon: "fa-chart-line",
      link: "https://paycontrol-app.vercel.app/",
      category: "app",
      isNew: false,
    },
  ];  

  const renderProjects = (filter = "all") => {
    const filtered =
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter);

    return filtered
      .map(
        (project) => `
            <div class="project-card" data-id="${project.id}">
                ${project.isNew ? `<span class="badge-new">NEW</span>` : ""}
                
                <div class="project-card-header">
                    <div class="project-icon-box">
                        <i class="fa-solid ${project.icon} project-main-icon"></i>
                    </div>

                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.desc}</p>
                    </div>

                    <button class="project-preview-btn" data-id="${project.id}">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                </div>
            </div>
        `,
      )
      .join("");
  };

  container.innerHTML = `
        <article class="card fade-in">

            <section class="card-content projects-view">

                <nav class="nav-header">
                    <a href="#" id="btn-home" class="nav-link">
                        <i class="fa-solid fa-house"></i> Home
                    </a>
                </nav>

                <h1 class="projects-main-title">Key Projects</h1>
                <p class="projects-subtitle">
                    Soluciones digitales con impacto real.
                </p>

                <!-- FILTROS -->
                <div class="filters">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="saas">SaaS</button>
                    <button class="filter-btn" data-filter="app">Apps</button>
                </div>

                <div class="projects-list-container" id="projects-container">
                    ${renderProjects()}
                </div>

                <div class="building-notice">
                    <div class="building-header">
                        <i class="fa-solid fa-rocket"></i>
                    <span>En desarrollo</span>
                </div>

                    <p class="building-text">
                        Actualmente estoy construyendo nuevas soluciones enfocadas en automatización, ventas y sistemas digitales.
                    </p>

                    <div class="building-tags">
                        <span>Automatización</span>
                        <span>AI Tools</span>
                        <span>SaaS</span>
                    </div>
                </div>

                <div class="explore-more-section">
                    <a href="https://jairo51067.github.io/jairo-cardenas-dev-portfolio/" 
                       target="_blank" 
                       class="btn-portfolio-full">
                        Ver soluciones <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>

            </section>

            <footer class="projects-footer">
                <span>Explore my code on GitHub</span>
                <a href="https://github.com/jairo51067" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
            </footer>

            <!-- MODAL -->
            <div class="project-modal" id="project-modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2 id="modal-title"></h2>
                    <p id="modal-desc"></p>
                    <a id="modal-link" target="_blank" class="btn-portfolio-full">
                        Abrir proyecto
                    </a>
                </div>
            </div>

        </article>
    `;

  // ===== FILTROS =====
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      document.getElementById("projects-container").innerHTML =
        renderProjects(filter);
      attachPreviewEvents();
    });
  });

  // ===== MODAL =====
  const modal = document.getElementById("project-modal");

  function attachPreviewEvents() {
    document.querySelectorAll(".project-preview-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const project = projects.find((p) => p.id == id);

        document.getElementById("modal-title").innerText = project.title;
        document.getElementById("modal-desc").innerText = project.desc;
        document.getElementById("modal-link").href = project.link;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // bloquea scroll fondo

        // tracking simple
        console.log("Preview opened:", project.title);
      });
    });
  }

  attachPreviewEvents();

  document.querySelector(".close-modal").onclick = () =>
    (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}
