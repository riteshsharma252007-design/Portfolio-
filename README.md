# Ritesh Ranjan — 3D Interactive Portfolio

> A real-time 3D interactive developer portfolio and digital studio experience engineered with Three.js, WebGL, React, and TypeScript. Featuring an atmospheric sublevel architectural lobby, retro CRT monitor stacks with custom telemetry, a 5×7 dot-matrix mezzanine LED ticker, and a terminal machine view.

[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.160-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview

This portfolio combines digital storytelling and 3D architectural rendering with software engineering. Built from the ground up for 60 FPS performance in modern browsers, visitors can explore interactive spaces, view flagship software projects on cathode-ray tube displays, switch to a low-fidelity retro machine terminal, or inspect curated work cards in a responsive masonry layout.

---

## 🚀 Key Features

### 🕹️ 1. Interactive 3D Sublevel Lobby
* **Real-time WebGL Viewport**: Powered by Three.js with custom lighting, shadows, and smooth camera interpolation.
* **Animated Environment**: 3D lobby featuring animated character models, companion animal, stairs, arcade cabinets, and neon signage.
* **Optimized Frame Rate**: Constant 60 FPS rendering with intelligent canvas resizing and render-loop throttling.

### 📺 2. 7-Screen CRT TV Stack & Telemetry
* **Simulated Cathode Ray Tube Monitors**: Multi-screen monitor array stacked in the lobby, each rendering dynamic canvas textures.
* **Project HUD & Telemetry**: Corner targeting reticles, real-time telemetry headers, custom status blips, and bottom metric bars.
* **CRT Shaders & Scanlines**: Interlaced scanlines, vertical sweep gradients, and radial cathode-tube vignette effects.

### 📟 3. 5×7 Dot-Matrix Mezzanine LED Ticker
* **Custom Dot-Matrix Font**: Hand-crafted 5×7 bitmapped character matrix defining uppercase letters, numbers, and retro glyphs (`•`, `///`, `:`, `/`).
* **Seamless Continuous Scroll**: Dual-buffered LED canvas strip scrolling overhead on the mezzanine beam without frame skips or seam jitter.

### 💻 4. Terminal Mode (`SUBLEVEL_LOG`)
* **Machine-Readable Console**: Toggleable retro terminal view (`[machine view · esc]`) rendering formatted terminal buffers with glowing phosphor segments.
* **Full Accessibility Index**: Hidden machine-readable screen-reader index (`<pre class="sr-only">`) ensuring 100% semantic accessibility.

### 🗂️ 5. Selected Work Masonry Grid
* **Curated Project Cards**: Fluid responsive cards with framed metallic corners, metadata tags, descriptions, and direct deep links to source code repositories.

---

## 📂 Featured Projects

### 🌿 1. AgriScan — AI & Computer Vision Crop Diagnostics
* **Domain**: Computer Vision · Deep Learning · Agriculture
* **Tech**: YOLOv8, ResNet-50, Python, PyTorch, Leaf Disease Image Models
* **Overview**: Smart crop disease detection and plant health diagnostics platform designed to analyze foliage anomalies, detect pathogens, and provide actionable recommendations.
* **CRT Screen**: Dedicated telemetry monitor displaying live model inference confidence (`98.4%`), agro-risk metrics, and detection HUD.

### 🌐 2. Aster Collective — Curated Web Platform
* **Domain**: Full-Stack Web Development · UI/UX Architecture
* **Tech**: React, Next.js, TypeScript, Tailwind CSS, Component System
* **Overview**: Responsive digital platform and curated commerce web product engineered with clean UI architecture, fluid tactile micro-interactions, and accessible design tokens.
* **CRT Screen**: Dedicated display showcasing product layouts, token scale specifications, and typography hierarchy.

### 🍲 3. Recipe Finder — Global Meal Discovery Web App
* **Domain**: Web Application · REST API Integration
* **Tech**: TheMealDB API, Asynchronous Fetch Engine, Responsive UI
* **Overview**: Interactive global recipe discovery application powered by TheMealDB API. Allows users to search delicious recipes from around the world by ingredient or dish name with real-time filtering, categorization, and meal previews.
* **CRT Screen**: Amber-themed culinary monitor displaying endpoint latency (`42ms`), API status (`200 OK`), and cuisine cards.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Core Framework** | React 18, TypeScript, HTML5 / CSS3 |
| **Bundler & Tooling** | Vite 5, PostCSS, ESLint |
| **3D & Graphics** | Three.js (v0.160.0), WebGL, GLTF / GLB Loader |
| **Styling & Typography** | Geist Sans, Geist Mono, Framed Corner CSS, Neon Glow Filters |
| **APIs & Models** | TheMealDB REST API, YOLOv8, Computer Vision pipelines |

---

## ⚡ Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/riteshsharma252007-design/Portfolio-.git
   cd Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5175/` (or the port specified in terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 👤 About the Developer

**Ritesh Ranjan**
* **Education**: B.Tech in Computer Science and Engineering (Class of 2026)
* **Internship Experience**:
  * **Pinnacle Labs** — Mobile App Development Intern (2026): Cross-platform workflows, API integration, and mobile UI optimization.
  * **Prodigy InfoTech** — Generative AI Intern (2025): Generative AI pipelines, prompt engineering, and LLM prototypes.

### 📬 Connect & Inquiries
* **GitHub**: [@riteshsharma252007-design](https://github.com/riteshsharma252007-design?tab=repositories)
* **LinkedIn**: [Ritesh Sharma](https://www.linkedin.com/in/ritesh-sharma-9a6707371/)
* **Email**: [riteshsharma252007@gmail.com](mailto:riteshsharma252007@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
