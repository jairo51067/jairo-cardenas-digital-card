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
