
## Prerequisites

1. **Node JS.** This project was made using v20.14.0, but a higher version it's ok. Lowers version could doesn't work appropriately. 


## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Make a `.env` file and set env variables. A example is showed in `.env.example` file.


Now, you can run the project using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:FRONTEND_PORT](http://localhost:3000) with your browser to see the frontend app.


## Good to know

To get the minified code you need run the command.

```bash
npm run build
# or
yarn build
# or
pnpm build
```

You will get the minfied code inside .next folder.


To run that minified code you need run the next command:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

The last command will start a node.js production process running the app.