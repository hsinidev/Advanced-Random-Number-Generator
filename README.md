# 🎲 Advanced Random Number Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/tech-React%20%7C%20TypeScript%20%7C%20Tailwind-blueviolet)](https://reactjs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](./CONTRIBUTING.md)

> A modern, secure, and highly customizable random number generator built with React, TypeScript, and Tailwind CSS. This tool provides a clean, user-friendly interface for generating both standard and cryptographically secure random numbers for a wide range of applications.

**[Live Demo](https://rng-app.example.com/)** (link placeholder)

---

<!-- PROJECT SCREENSHOT -->
<div align="center">
  <img src="https://via.placeholder.com/800x450.png/0A0A0A/E0E0E0?text=App+Screenshot+Here" alt="Project Screenshot" width="80%">
</div>

---

## ✨ Why This Project?

In a world driven by data and security, the quality of randomness matters. Standard generators like `Math.random()` are often insufficient for security-critical tasks. This tool empowers users by providing a clear choice between speed and cryptographic security, all within an immersive and comfortable interface. It serves as both a practical utility and a demonstration of modern frontend technologies.

## 🚀 Key Features

-   **🔢 Custom Range**: Specify any minimum and maximum values for your number generation.
-   **⚡ Bulk Generation**: Generate up to 10,000 numbers at once.
-   **🌐 Decimal Control**: Easily toggle between integers and floating-point numbers.
-   **🛡️ Cryptographic Security**: Switch between the standard `Math.random()` and the robust `crypto.getRandomValues` for security-sensitive needs.
-   **🎨 Sleek & Modern UI**: A clean, responsive interface built with Tailwind CSS, featuring an immersive animated galaxy background.
-   **📋 Copy to Clipboard**: Instantly copy the full list of generated numbers with a single click.
-   **📖 Built-in Guide**: A comprehensive, SEO-rich article explaining the nuances of random number generation is included on the main page.

## 💻 Tech Stack

-   **Frontend:** [React](https://reactjs.org/) (v18), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Core Logic:** Pure TypeScript/JS (No runtime dependencies)

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/advanced-rng.git
    cd advanced-rng
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
The application will then be available at `http://localhost:3000`.

## 📂 Project Structure

The project follows a modular, component-based architecture to keep the code organized and maintainable.

```
/
├── public/
│   └── favicon.svg       # Application icon
├── components/
│   ├── Layout.tsx        # Main layout with header, footer, background
│   ├── RNGTool.tsx       # The core RNG user interface and state logic
│   └── SEOArticle.tsx    # The collapsible educational article
├── services/
│   └── NumberGenerator.ts# The core logic for generating random numbers
├── App.tsx               # Main app component that assembles the page
├── index.tsx             # Entry point for the React application
└── README.md             # This file
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

## 📄 License

Distributed under the MIT License.

## 📧 Contact

HSINI MOHAMED - [@hsinidev](https://github.com/hsinidev) - hsini.web@gmail.com

Project Link: [https://github.com/hsinidev/advanced-rng](https://github.com/hsinidev/advanced-rng)
