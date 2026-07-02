# 🔍 unsplash-pexels-explorer

A media search web app that lets you search and save high-quality photos and videos powered by **Unsplash** and **Pexels** APIs — built with React, Redux Toolkit, and Tailwind CSS.

---

## 🌐 Live Demo

[View Live](https://unsplash-pexels-explorer.vercel.app/) <!-- Replace with your actual link -->

---

## 📸 Preview

![App Preview](./preview.png) <!-- Add a screenshot to your repo -->

---

## ✨ Features

- 🔎 **Dual API Integration** — Search photos via Unsplash API and videos via Pexels API
- 📁 **Save to Collection** — Bookmark your favorite media to a personal collection
- 🖼️ **Tab Switching** — Seamlessly toggle between Photos and Videos
- ⚡ **Redux State Management** — Global state handled via Redux Toolkit
- 📱 **Responsive Design** — Works across desktop and mobile viewports
- 🎨 **Consistent UI** — Violet-centered design system with clear visual hierarchy

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | React 18 |
| State Management | Redux Toolkit |
| Styling | Tailwind CSS |
| Markup | HTML5 |
| Base Styling | CSS3 |
| Build Tool | Vite |
| Photos API | Unsplash API |
| Videos API | Pexels API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
unsplash-pexels-explorer/
├── public/
├── src/
│   ├── app/
│   │   └── store.js            # Redux store config
│   ├── features/
│   │   ├── search/
│   │   │   └── searchSlice.js  # Search state slice
│   │   └── collection/
│   │       └── collectionSlice.js  # Saved items slice
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MediaCard.jsx
│   │   └── MediaGrid.jsx
│   ├── pages/
│   │   ├── SearchPage.jsx
│   │   └── CollectionPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Unsplash API key → [unsplash.com/developers](https://unsplash.com/developers)
- Pexels API key → [pexels.com/api](https://www.pexels.com/api/)


## 🔑 API Setup

### Unsplash
1. Go to [unsplash.com/developers](https://unsplash.com/developers)
2. Create a new application
3. Copy your **Access Key**
4. Paste into `.env` as `VITE_UNSPLASH_ACCESS_KEY`

### Pexels
1. Go to [pexels.com/api](https://www.pexels.com/api/)
2. Sign up and generate an API key
3. Paste into `.env` as `VITE_PEXELS_API_KEY`

## 🧠 What I Learned

- Integrating and managing **two different third-party REST APIs** in the same project
- Managing complex UI state (search query, results, active tab, saved items) with **Redux Toolkit slices**
- Building a consistent **design system** with Tailwind CSS using a single color palette
- Handling **async API calls** with `createAsyncThunk`
- Structuring a scalable React project with feature-based folder organization

---

## 🙋‍♂️ Author

**Dhruv**
- GitHub: [@dhruv-dev-89](https://github.com/dhruv-dev-89)
- LinkedIn: (https://www.linkedin.com/in/dhruv-417122295/)

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).
