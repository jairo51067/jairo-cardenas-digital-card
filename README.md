# 📇 Jairo Cárdenas | Digital Card Application

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Una aplicación web **orientada a componentes** y desarrollada con **Vanilla JavaScript**. Este proyecto no es solo una tarjeta de presentación, sino una demostración de arquitectura modular, separación de responsabilidades y manejo de estado local.

🚀 **[Explorar Demo en Vivo](https://jairo51067.github.io/jairo-cardenas-digital-card/)**

---

## 🏛️ Arquitectura del Proyecto

El sistema está diseñado bajo un enfoque de **Feature-Based Architecture** (Arquitectura basada en características), lo que permite que cada sección (Perfil, Proyectos, Contacto) funcione de manera independiente y sea fácil de mantener.

### Estructura de Módulos (CodeViz Logic)
```mermaid
graph TD
    User((Usuario Final)) -->|Interactúa| Init[App Initializer]
    
    subgraph Core_Logic[Web Application]
        Init -->|Renderiza| Profile[Profile Feature]
        Init -->|Renderiza| Projects[Projects Feature]
        Init -->|Renderiza| About[About Feature]
        Init -->|Renderiza| Contact[Contact Feature]
        
        Profile -->|Consume| Config[App Configuration]
        About -->|Invoca| Contact
    end

    subgraph Services[Data & UI]
        Storage[Local Storage Service]
        Components[UI Components]
    end


### 🛠️ Especificaciones Técnicas
Modularidad: Uso de módulos ES6 para organizar la lógica de negocio y la interfaz.

UI Dinámica: Los componentes se generan mediante funciones de renderizado (renderApp, createCard, createButton), permitiendo una interfaz reactiva.

Persistencia: Implementación de un Storage Service para gestionar datos en el navegador mediante localStorage.

Clean Code: Separación estricta entre la configuración de datos (app.config.js) y la lógica de visualización.


📂 Organización del Código

src/
├── app/            # Inicialización y orquestación (main.js, app.js)
├── components/     # Componentes de UI atómicos y reutilizables
├── config/         # Configuración global y constantes
├── features/       # Módulos específicos por funcionalidad
├── services/       # Lógica de persistencia y servicios externos
└── index.html      # Punto de entrada de la aplicación

Aquí tienes el contenido definitivo para tu README.md. He optimizado la estructura para que se vea impecable en GitHub, utilizando iconos, secciones claras y resaltando la arquitectura técnica que muestra tu diagrama.

Para usarlo, simplemente crea un archivo llamado README.md en la raíz de tu repositorio y pega lo siguiente:

Markdown
# 📇 Jairo Cárdenas | Digital Card Application

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

Una aplicación web **orientada a componentes** y desarrollada con **Vanilla JavaScript**. Este proyecto no es solo una tarjeta de presentación, sino una demostración de arquitectura modular, separación de responsabilidades y manejo de estado local.

🚀 **[Explorar Demo en Vivo](https://jairo51067.github.io/jairo-cardenas-digital-card/)**

---

## 🏛️ Arquitectura del Proyecto

El sistema está diseñado bajo un enfoque de **Feature-Based Architecture** (Arquitectura basada en características), lo que permite que cada sección (Perfil, Proyectos, Contacto) funcione de manera independiente y sea fácil de mantener.

### Estructura de Módulos (CodeViz Logic)
```mermaid
graph TD
    User((Usuario Final)) -->|Interactúa| Init[App Initializer]
    
    subgraph Core_Logic[Web Application]
        Init -->|Renderiza| Profile[Profile Feature]
        Init -->|Renderiza| Projects[Projects Feature]
        Init -->|Renderiza| About[About Feature]
        Init -->|Renderiza| Contact[Contact Feature]
        
        Profile -->|Consume| Config[App Configuration]
        About -->|Invoca| Contact
    end

    subgraph Services[Data & UI]
        Storage[Local Storage Service]
        Components[UI Components]
    end
🛠️ Especificaciones Técnicas
Modularidad: Uso de módulos ES6 para organizar la lógica de negocio y la interfaz.

UI Dinámica: Los componentes se generan mediante funciones de renderizado (renderApp, createCard, createButton), permitiendo una interfaz reactiva.

Persistencia: Implementación de un Storage Service para gestionar datos en el navegador mediante localStorage.

Clean Code: Separación estricta entre la configuración de datos (app.config.js) y la lógica de visualización.

📂 Organización del Código
Plaintext
src/
├── app/            # Inicialización y orquestación (main.js, app.js)
├── components/     # Componentes de UI atómicos y reutilizables
├── config/         # Configuración global y constantes
├── features/       # Módulos específicos por funcionalidad
├── services/       # Lógica de persistencia y servicios externos
└── index.html      # Punto de entrada de la aplicación
🚀 Instalación y Desarrollo
Si deseas replicar este entorno localmente:

Clona el repositorio:

Bash
git clone [https://github.com/jairo51067/jairo-cardenas-digital-card.git](https://github.com/jairo51067/jairo-cardenas-digital-card.git)
Accede al directorio:

Bash
cd jairo-cardenas-digital-card
Ejecución:
Debido al uso de módulos de JavaScript, se recomienda abrir el proyecto utilizando un servidor local (como Live Server en VS Code).

👨‍💻 Sobre el Autor
Jairo Cárdenas Desarrollador Web enfocado en la creación de soluciones escalables y diseño centrado en el usuario.

Desarrollado con pasión por el código y el diseño limpio.
