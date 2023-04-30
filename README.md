# Tone WebApp (tone-service-app)
This repo is where the main NextJS application lives.

## Prerequisites
We're believers in [BunJS](https://github.com/oven-sh/bun) and utilize it for most of our infrastructure. If you're on `Linux` or `Mac` and have NPM installed, you can globally install Bun with:

    npm i -g bun
 `Windows` users will have to use **WSL** to get the Tone WebApp to run locally. An excellent guide on setting up WSL and connecting VSCode can be found on the [Microsoft WSL website](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode).

### Why do I have to use WSL on Windows?
Bun manages memory differently than Node, and was developed to run on *nix based systems first (this includes MacOS). While a native implementation of Bun for Windows is on their roadmap, one is not available.

## Install
To get the Tone WebApp running locally on your machine, run the following commands in the project directory:

    bun i
    bun bun

This will install all modules and prepares Bun (create a few files) to utilize NextJS' server, as Bun uses a different http module than Node.

## Usage
The Tone WebApp is essentially a heavily modified NextJS application and has the same options available.

To start a local development server with HMR (Hot Module Reloading), run:

    bun run dev

This will compile and start the application, being available on http://localhost:42000

---

To build the Tone WebApp for production, run:

    bun run build
    
---

To start the Tone WebApp in production mode, run:

    bun run start
