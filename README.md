# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tutorial

### Executar os comandos:

yarn create react-app atualizacao_cadastral --template=typescript
cd atualizacao_cadastral
code .
git remote add origin https://github.com/duanyrf/atualizacao-cadastral.git
git branch -M main
git push -u origin main

### Apagar arquivos desnecessários neste momento:

On src/:

- App.css
- App.test.tsx
- index.css
- logo.svg
- reportWebVitals.ts
- setupTests.ts

On public/:

- logo192.png
- logo512.png
- manifest.json

### Limpar arquivo public/index.html:

- Apagar da <meta> description até a <title>, deixando esta última.
- Renomear title para "Atualização Cadastral"
- Apagar comentários no body da página

## Executar aplicação:

yarn start

## Padronizando Projeto

- EditorConfig
- ESLint
  - yarn add eslint -D
  - yarn eslint --init (respondendo perguntas)
  - yarn add -D eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
  - criar arquivo .eslintignore
  - editar arquivo .eslintrc.json (adicionando novas configurações)
  - yarn add eslint-import-resolver-typescript -D
  - editar arquivo .eslintrc.json (adicionando settings e novas rules)
  - se necessário, adicionar em rules ""no-use-before-define": "off"" (se erros de importação persistirem)
- Prettier
  - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
  - editar .eslintrc.json, adicionando:
    - Ao extends: "prettier/@typescript-eslint", "plugin:prettier/recommended"
    - Ao plugins: "prettier"
    - Às rules: "prettier/prettier": "error"
  - criar arquivo prettier.config.js

