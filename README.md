# Luminol Documentation

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/installation)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
git clone https://github.com/LuminolMC/docs.git
```

2. Install all required dependencies.

```bash
pnpm install
```

3. Start the development server

```bash
pnpm run dev
```

This will start a local development server and open a browser window. The majority of changes will be instantly reflected live without the need to restart the development server or reload the page in your browser. Edit away!

### Building

```bash
pnpm run build
```

This command builds a production-ready deployment into the `.vitepress/dist` directory. These files are ready to be hosted on any static content server.

## License

The docs (e.g., `.md` files in the `/src` folder) is [CC-BY-SA-4.0](https://github.com/LuminolMC/docs/blob/main/LICENSE-DOCS) licensed.

The supporting code is
[AGPL-3.0](https://github.com/LuminolMC/docs/blob/main/LICENSE) licensed.
