# FlowDesk Workspace

FlowDesk is a **modular email client platform** built with [Nx](https://nx.dev) and [Angular](https://angular.dev).  
It follows a **microfrontend architecture** with a **host shell** and **remote applications**, supported by **shared libraries** for styles and UI consistency.

---

## 📂 Project Structure

```
flowdesk-workspace/
├── apps/
│   ├── flowdesk/          # Host shell application
│   ├── emailClient/       # Remote: Email client module
│
├── libs/
│   ├── shared-styles/     # Shared SCSS, fonts, global styles
│   └── ...                # Future shared libs (UI, models, utils)
│
├── nx.json
├── workspace.json
├── package.json
└── README.md
```

---

## ✨ Features

- **Host + Remote setup** using Nx Module Federation
- **Email Client UI** (Inbox, list, item components, detail view)
- **Shared Styles Library** with global fonts, typography, and box-model rules
- **SCSS-based theming** (WhatsApp-inspired typography & clean layout)
- **Reusable components** across host and remotes
- **Scalable monorepo structure** for future apps and libraries

---

## 🛠️ Tech Stack

- [Nx](https://nx.dev) – Monorepo build system
- [Angular 17+](https://angular.dev) – Frontend framework
- [SCSS](https://sass-lang.com) – Styling
- [TypeScript](https://www.typescriptlang.org) – Type safety
- [Module Federation](https://webpack.js.org/concepts/module-federation/) – Microfrontend integration

---

## 🚀 Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/EswarBalasubramanian/flowdesk-workspace.git
cd flowdesk-workspace
```

### 2. Install dependencies
```sh
npm install
```

### 3. Run the host app (FlowDesk)
```sh
npx nx serve flowdesk
```
- Available at `http://localhost:4200`

### 4. Run the remote app (Email Client)
```sh
npx nx serve emailClient
```
- Available at `http://localhost:4201`

---

## 📦 Build

Build all apps:
```sh
npx nx build
```

Build a specific app:
```sh
npx nx build flowdesk
```

---

## 🧩 Future Roadmap

- 📬 Email detail view with reply/forward actions  
- ⭐ Favorite & label support  
- 🌍 Internationalization (i18n)  
- 📊 Analytics dashboard for email usage  
- ☁️ Cloud deployment with CI/CD  

---

## 🤝 Contributing

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/my-feature`)  
3. Commit changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.
