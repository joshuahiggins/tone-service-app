# Tone WebApp (tone-service-app)
## Prerequisites
We're believers in [BunJS](https://github.com/oven-sh/bun) and utilize it for most of our infrastructure. If you're on `Linux` or `Mac` and have NPM installed, you can globally install Bun with:

    npm install -g bun
 `Windows` users will have to use **WSL** to get the Tone WebApp to run locally. An excellent guide on setting up WSL and connecting VSCode can be found on the [Microsoft WSL website](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode).

### Why do I have to use WSL on Windows?
Bun manages memory differently than Node, and is developed to run primarily on *nix based systems (including MacOS). While a native implementation of Bun for Windows is on their roadmap, one is not available.

### Bun Config
Since our package registry is hosted publicly on Github, Bun is going to need a little bit of configuration to download our packages.

#### Github Repo Access

Until we publish packages to NPM, Bun requires us to create a Github Personal Access Token (PAT) with public repository reach access to pull modules.

To create a PAT, visit the "Personal Access Tokens" page here: https://github.com/settings/tokens

Select "Generate new token" and ensure that "Public Repositories (read only)" is selected. Set an expiration date and name the token as desired. After creation, save your token.

Before using this repo for a development session, you will need to export your Github PAT:

    export GITHUB_PAT="yourtokenhere"

## Install
To get the Tone WebApp running locally on your machine, run the following commands in the project directory:

    bun i
    bun bun

This will install all modules and prepares Bun to utilize NextJS' server, as Bun uses a different http module than Node.

## Usage
The Tone WebApp is essentially a heavily modified NextJS application and has the same options available.

To start a local `development` server with HMR (Hot Module Reloading), run:

    bun run dev

This will compile and start the application, being available on http://localhost:42000

To `build` the Tone WebApp for production, run:

    bun run build

To start the Tone WebApp in `production` mode, run:

    bun run start
