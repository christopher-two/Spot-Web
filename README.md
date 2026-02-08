# 🌸 Spot: Momentos Reales

Spot es una red social sentimental basada en la ubicación, diseñada para anclar recuerdos en los lugares donde ocurrieron. Esta web es la landing page oficial del proyecto, migrada recientemente a **Astro 5** con un diseño **Orgánico y Sentimental**.

![Hero Section Mobile](/home/christopher/.gemini/antigravity/brain/9ca2d2a3-32ea-44a6-a860-a8dc64ec4c43/hero_section_mobile_final_1770542491344.png)

## ✨ Características

- **Diseño Emocional**: Una estética suave basada en tonos rosas y fucsias (`Rose & Organic`).
- **Totalmente Responsivo**: Optimizado para una experiencia perfecta tanto en escritorio como en móviles (375px+).
- **Glassmorphism**: Uso extensivo de desenfoques de fondo y formas orgánicas para una sensación premium.
- **Integración de App**: Secciones de características que incluyen mockups reales de la aplicación Android.
- **Google App Links**: Soporte nativo para deep linking a través de `.well-known/assetlinks.json`.

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconos**: [Lucide Astro](https://lucide.dev/)
- **Tipografía**: Outfit (Headlines) & Plus Jakarta Sans (Body) via Google Fonts.

## 🚀 Comandos Rápidos

| Comando        | Acción                                                |
| :------------- | :---------------------------------------------------- |
| `pnpm install` | Instala las dependencias del proyecto.                |
| `pnpm dev`     | Inicia el servidor de desarrollo en `localhost:4321`. |
| `pnpm build`   | Genera la versión de producción en `./dist/`.         |
| `pnpm preview` | Previsualiza la build de producción localmente.       |

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── .well-known/     # Configuración para Google App Links
│   ├── screens/         # Capturas de pantalla de la app Android
│   └── favicon.svg
├── src/
│   ├── components/      # Componentes UI (Section, DownloadButton, etc.)
│   ├── layouts/         # Layout principal con tokens de diseño
│   ├── lib/             # Datos y utilidades
│   └── pages/           # Rutas principales (Home, Privacidad, etc.)
└── package.json
```

## 📜 Licencia

© 2026 Spot App. Todos los derechos reservados.
