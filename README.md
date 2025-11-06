<div align="center">

# ⚛️ Reactjs & Nextjs Projects  

📚 Repositório de estudos práticos com **React.js** e **Next.js**, explorando desde os fundamentos até projetos completos e modernos.

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E=16.0.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Author](https://img.shields.io/badge/author-tenmenezes-blueviolet)](https://github.com/tenmenezes)

---

🎮 **Projeto destaque:**  
### 🖤 [Nextgram – Mini Rede Social com Next.js](#6_nextgram)
> Aplicação completa com autenticação, feed de postagens e estilização moderna.  
> Desenvolvida com **Next.js**, **React Hooks**, **Tailwind CSS** e **API Routes**.

</div>

---

## 📌 Sumário

- [Descrição](#descrição)
- [Conteúdo do Repositório](#conteúdo-do-repositório)
- [Pré-requisitos](#pré-requisitos)
- [Como Utilizar](#como-utilizar)
- [Estrutura dos Projetos](#estrutura-dos-projetos)
- [Contribuições](#contribuições)
- [Licença](#licença)

---

## 📝 Descrição

Este repositório reúne diversos **projetos de estudo** desenvolvidos durante o aprendizado de **React.js** e **Next.js**, abrangendo desde o setup inicial até aplicações completas.

A proposta é dominar os principais pilares do ecossistema moderno **Front-end com React**:

- Componentização e reuso de código  
- Rotas e transições de páginas no Next.js  
- Estilização com CSS Modules e Tailwind  
- Data Fetching com `getStaticProps` e `getServerSideProps`  
- Autenticação com providers (Google, GitHub, etc.)  
- Boas práticas de organização de pastas e arquitetura  
- Deploy em ambiente de produção (Vercel) - Ainda não desenvolvido

---

## 📂 Conteúdo do Repositório

```
├── 📁 Next-js
│   ├── 📁 1_introducao
│   │   ├── 📁 public
│   │   │   ├── 🖼️ file.svg
│   │   │   ├── 🖼️ globe.svg
│   │   │   ├── 🖼️ next.svg
│   │   │   ├── 🖼️ vercel.svg
│   │   │   └── 🖼️ window.svg
│   │   ├── 📁 src
│   │   │   └── 📁 app
│   │   │       ├── 📄 favicon.ico
│   │   │       ├── 🎨 globals.css
│   │   │       ├── 📄 layout.js
│   │   │       └── 📄 page.js
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.mjs
│   │   ├── ⚙️ jsconfig.json
│   │   ├── 📄 next.config.mjs
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 postcss.config.mjs
│   ├── 📁 2_transicao_pagina
│   │   ├── 📁 public
│   │   │   ├── 🖼️ file.svg
│   │   │   ├── 🖼️ globe.svg
│   │   │   ├── 🖼️ next.svg
│   │   │   ├── 🖼️ vercel.svg
│   │   │   └── 🖼️ window.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 app
│   │   │   │   ├── 📁 dashboard
│   │   │   │   │   ├── 📄 layout.js
│   │   │   │   │   └── 📄 page.js
│   │   │   │   ├── 📁 exemplo
│   │   │   │   │   └── 📄 page.js
│   │   │   │   ├── 📁 posts
│   │   │   │   │   ├── 📁 [id]
│   │   │   │   │   │   └── 📄 page.js
│   │   │   │   │   └── 📄 page.js
│   │   │   │   ├── 📁 produtos
│   │   │   │   │   ├── 📁 categorias
│   │   │   │   │   │   └── 📁 [categoria]
│   │   │   │   │   │       ├── 📁 [produto]
│   │   │   │   │   │       │   └── 📄 page.js
│   │   │   │   │   │       └── 📄 page.js
│   │   │   │   │   └── 📁 marcas
│   │   │   │   │       └── 📄 page.js
│   │   │   │   ├── 📁 profile
│   │   │   │   │   └── 📄 page.js
│   │   │   │   ├── 📁 sobre
│   │   │   │   │   └── 📄 page.js
│   │   │   │   ├── 📄 favicon.ico
│   │   │   │   ├── 🎨 globals.css
│   │   │   │   ├── 📄 layout.js
│   │   │   │   └── 📄 page.js
│   │   │   └── 📁 components
│   │   │       ├── 📄 BotaoRedirect.jsx
│   │   │       ├── 📄 Footer.jsx
│   │   │       └── 📄 Nav.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.mjs
│   │   ├── ⚙️ jsconfig.json
│   │   ├── 📄 next.config.mjs
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 postcss.config.mjs
│   ├── 📁 3_estilizacao
│   │   ├── 📁 public
│   │   │   ├── 🖼️ file.svg
│   │   │   ├── 🖼️ globe.svg
│   │   │   ├── 🖼️ next.svg
│   │   │   ├── 🖼️ vercel.svg
│   │   │   └── 🖼️ window.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 app
│   │   │   │   ├── 📁 components
│   │   │   │   │   ├── 📄 Button.jsx
│   │   │   │   │   ├── 🎨 Button.module.sass
│   │   │   │   │   ├── 📄 Container.jsx
│   │   │   │   │   ├── 📄 CustomButton.jsx
│   │   │   │   │   └── 📄 MyComponent.jsx
│   │   │   │   ├── 📄 favicon.ico
│   │   │   │   ├── 🎨 globals.css
│   │   │   │   ├── 📄 layout.js
│   │   │   │   ├── 📄 page.js
│   │   │   │   └── 🎨 page.module.css
│   │   │   ├── 📁 css
│   │   │   │   └── 🎨 styles.sass
│   │   │   └── 📁 lib
│   │   │       └── 📄 registry.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.mjs
│   │   ├── ⚙️ jsconfig.json
│   │   ├── 📄 next.config.mjs
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 postcss.config.mjs
│   ├── 📁 4_data_fetching
│   │   ├── 📁 prisma
│   │   │   ├── 📁 migrations
│   │   │   │   ├── 📁 20251025034906
│   │   │   │   │   └── 📄 migration.sql
│   │   │   │   └── ⚙️ migration_lock.toml
│   │   │   ├── 📄 dev.db
│   │   │   └── 📄 schema.prisma
│   │   ├── 📁 public
│   │   │   ├── 🖼️ file.svg
│   │   │   ├── 🖼️ globe.svg
│   │   │   ├── 🖼️ next.svg
│   │   │   ├── 🖼️ vercel.svg
│   │   │   └── 🖼️ window.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 app
│   │   │   │   ├── 📁 todos
│   │   │   │   │   ├── 📁 [id]
│   │   │   │   │   │   ├── 📁 edit
│   │   │   │   │   │   │   ├── 📄 error.js
│   │   │   │   │   │   │   └── 📄 page.js
│   │   │   │   │   │   ├── 📄 loading.js
│   │   │   │   │   │   ├── 📄 not-found.js
│   │   │   │   │   │   └── 📄 page.js
│   │   │   │   │   └── 📁 create
│   │   │   │   │       └── 📄 page.js
│   │   │   │   ├── 📄 favicon.ico
│   │   │   │   ├── 🎨 globals.css
│   │   │   │   ├── 📄 layout.js
│   │   │   │   └── 📄 page.js
│   │   │   ├── 📁 components
│   │   │   │   ├── 📄 Button.jsx
│   │   │   │   ├── 📄 Checkbox.jsx
│   │   │   │   ├── 📄 Header.jsx
│   │   │   │   ├── 📄 ToastConclusao.jsx
│   │   │   │   └── 📄 TodoForm.jsx
│   │   │   ├── 📄 actions.js
│   │   │   └── 📄 db.js
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.mjs
│   │   ├── ⚙️ jsconfig.json
│   │   ├── 📄 next.config.mjs
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   ├── 📄 postcss.config.mjs
│   │   └── 📄 prisma.config.ts
│   ├── 📁 5_auth
│   │   ├── 📁 prisma
│   │   │   ├── 📁 migrations
│   │   │   │   ├── 📁 20251102230921
│   │   │   │   │   └── 📄 migration.sql
│   │   │   │   └── ⚙️ migration_lock.toml
│   │   │   ├── 📄 dev.db
│   │   │   └── 📄 schema.prisma
│   │   ├── 📁 public
│   │   │   ├── 🖼️ file.svg
│   │   │   ├── 🖼️ globe.svg
│   │   │   ├── 🖼️ next.svg
│   │   │   ├── 🖼️ vercel.svg
│   │   │   └── 🖼️ window.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 app
│   │   │   │   ├── 📁 api
│   │   │   │   │   └── 📁 [...nextauth]
│   │   │   │   │       └── 📄 route.ts
│   │   │   │   ├── 📁 client
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 proxy
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 server
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📄 favicon.ico
│   │   │   │   ├── 🎨 globals.css
│   │   │   │   ├── 📄 layout.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 components
│   │   │   │   └── 📄 Navbar.tsx
│   │   │   └── 📄 proxy.ts
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 auth.ts
│   │   ├── 📄 eslint.config.mjs
│   │   ├── 📄 next-env.d.ts
│   │   ├── 📄 next.config.ts
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   ├── 📄 postcss.config.mjs
│   │   ├── 📄 prisma.config.ts
│   │   └── ⚙️ tsconfig.json
│   └── 📁 6_nextgram
│       ├── 📁 prisma
│       │   ├── 📁 migrations
│       │   │   ├── 📁 20251103152937
│       │   │   │   └── 📄 migration.sql
│       │   │   └── ⚙️ migration_lock.toml
│       │   ├── 📄 dev.db
│       │   └── 📄 schema.prisma
│       ├── 📁 public
│       │   ├── 📁 uploads
│       │   │   ├── 🖼️ Design sem nome (1).png
│       │   │   ├── 🖼️ WhatsApp Image 2025-09-25 at 09.12.47.jpeg
│       │   │   ├── 🖼️ WhatsApp Image 2025-10-07 at 09.48.04.jpeg
│       │   │   └── 🖼️ solo-leveling.jpg
│       │   ├── 🖼️ file.svg
│       │   ├── 🖼️ globe.svg
│       │   ├── 🖼️ next.svg
│       │   ├── 🖼️ vercel.svg
│       │   └── 🖼️ window.svg
│       ├── 📁 src
│       │   ├── 📁 app
│       │   │   ├── 📁 api
│       │   │   │   └── 📁 [...nextauth]
│       │   │   │       └── 📄 route.ts
│       │   │   ├── 📁 my-posts
│       │   │   │   └── 📄 page.tsx
│       │   │   ├── 📁 post
│       │   │   │   └── 📁 new
│       │   │   │       └── 📄 page.tsx
│       │   │   ├── 📁 profile
│       │   │   │   └── 📄 page.tsx
│       │   │   ├── 📁 signin
│       │   │   │   └── 📄 page.tsx
│       │   │   ├── 📄 favicon.ico
│       │   │   ├── 🎨 globals.css
│       │   │   ├── 📄 layout.tsx
│       │   │   └── 📄 page.tsx
│       │   ├── 📁 components
│       │   │   ├── 📁 ui
│       │   │   │   ├── 📄 meteors.tsx
│       │   │   │   └── 📄 particles.tsx
│       │   │   ├── 📄 Button.tsx
│       │   │   ├── 📄 ButtonLink.tsx
│       │   │   ├── 📄 CreatePostForm.tsx
│       │   │   ├── 📄 FlashMessage.tsx
│       │   │   ├── 📄 ImagePreview.tsx
│       │   │   ├── 📄 Label.tsx
│       │   │   ├── 📄 Navbar.tsx
│       │   │   └── 📄 ProfileForm.tsx
│       │   ├── 📁 lib
│       │   │   └── 📄 utils.ts
│       │   ├── 📄 actions.ts
│       │   └── 📄 proxy.ts
│       ├── 📁 types
│       │   ├── 📄 Comment.ts
│       │   ├── 📄 Like.ts
│       │   ├── 📄 Post.ts
│       │   ├── 📄 User.ts
│       │   └── 📄 next-auth.d.ts
│       ├── ⚙️ .gitignore
│       ├── 📝 README.md
│       ├── 📄 auth.ts
│       ├── ⚙️ components.json
│       ├── 📄 eslint.config.mjs
│       ├── 📄 next-env.d.ts
│       ├── 📄 next.config.ts
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       ├── 📄 postcss.config.mjs
│       ├── 📄 prisma.config.ts
│       └── ⚙️ tsconfig.json
├── 📁 React-js-base
│   ├── 📁 1_componentes
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   ├── 📄 ClassComponent.jsx
│   │   │   │   ├── 📄 FunctionalComponent.jsx
│   │   │   │   └── 📄 PropsExample.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📁 2_JSX
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   └── 📄 JsxExamples.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📁 3_gerenciamento_estado
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   └── 📄 UseStateComponent.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📁 4_eventos
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   └── 📄 EventHandlingExamples.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📁 5_useEffect
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   └── 📄 UseEffectsExample.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📁 6_estilos
│   │   ├── 📁 public
│   │   │   └── 🖼️ vite.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 assets
│   │   │   │   └── 🖼️ react.svg
│   │   │   ├── 📁 components
│   │   │   │   ├── 🎨 StylesExamples.css
│   │   │   │   ├── 📄 StylesExamples.jsx
│   │   │   │   └── 🎨 StylesExamples.module.css
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .gitignore
│   │   ├── 📝 README.md
│   │   ├── 📄 eslint.config.js
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   └── 📁 7_projeto
│       ├── 📁 public
│       │   └── 🖼️ vite.svg
│       ├── 📁 src
│       │   ├── 📁 assets
│       │   │   └── 🖼️ react.svg
│       │   ├── 📁 components
│       │   │   ├── 🎨 TodoApp.css
│       │   │   └── 📄 TodoApp.jsx
│       │   ├── 📄 App.jsx
│       │   └── 📄 main.jsx
│       ├── ⚙️ .gitignore
│       ├── 📝 README.md
│       ├── 📄 eslint.config.js
│       ├── 🌐 index.html
│       ├── ⚙️ package-lock.json
│       ├── ⚙️ package.json
│       └── 📄 vite.config.js
├── 📄 LICENSE
└── 📝 README.md
```

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** `>= 16.0.0`  
- **npm** ou **yarn**
- (Opcional) **Docker** se quiser containerizar
- (Opcional) **VS Code** com extensão *ES7+ React/Redux Snippets*

---

## ▶️ Como Utilizar

---

1. **Clone o repositório**
   ```bash
   git clone https://github.com/tenmenezes/Reactjs-Nextjs-Projects.git
   cd Reactjs-Nextjs-Projects
   ```
2. **Entre em um módulo**
   ```bash
   cd Next-js/3_estilizacao
   ```
3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```
4. **Execute o servidor**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
5. **Acesse o projeto no navegador**
   ```bash
   http://localhost:3000
   ```
---

## 🧱 Estrutura dos Projetos

---

Cada subpasta dentro de Next-js/ representa uma etapa de aprendizado, com foco em conceitos específicos.

## Etapa	Tópico Descrição

1_introducao/	Introdução	Setup e primeiros componentes Next.js
2_transicao_pagina/	Navegação	Rotas, Links e Transições
3_estilizacao/	Estilização	CSS Modules, Tailwind e UI refinada
4_data_fetching/	Data Fetching	SSR, SSG e chamadas de API
5_auth/	Autenticação	Login e rotas protegidas
6_nextgram/	Projeto Final	App completo simulando rede social

🖤 Destaque: Projeto Nextgram
O Nextgram é o projeto final do repositório — uma mini rede social inspirada no Instagram.

---

## 🧩 Tecnologias principais

Next.js 16+

React Hooks

Tailwind CSS

API Routes

Autenticação JWT / Google Provider

React 19+

Web Components

Tailwind CSS

Framer Motion

Lucide Icons (React)

---

## 🚀 Funcionalidades

Criação e autenticação de usuário

Upload e exibição de posts

Feed com atualizações dinâmicas

Interface moderna e responsiva

---

## 🔗 Deploy (em breve)
➡️ Acesse o Nextgram online (em desenvolvimento)


## 🤝 Contribuições

> Quer contribuir? Fique à vontade!


## Siga o fluxo padrão de contribuição:


# Faça um fork
```
git fork https://github.com/tenmenezes/Reactjs-Nextjs-Projects.git
```

# Crie sua branch
```
git checkout -b feature/nova-feature
```

# Faça o commit das mudanças
```
git commit -m "Adiciona nova feature"
```

# Envie para o seu repositório
```
git push origin feature/nova-feature
```

# Abra um Pull Request 🚀
Sugestões de melhorias, novas etapas de aprendizado e correções são sempre bem-vindas 💡

📜 Licença
Este projeto está licenciado sob a Licença MIT.
Consulte o arquivo LICENSE para mais detalhes.

<div align="center">
👨‍💻 Desenvolvido com 💙 por tenmenezes <br/>
⭐ Se este repositório te ajudou, considere deixar uma estrela!
</div>
