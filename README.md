# Projeto

## Dicas

```
pnpm install -D prettier-plugin-tailwindcss
```

## Trocando a fonte

- Baixar a fonte Poppins.zip no font.google.com (get font), descompactar o zip em src/assets/fonts

Jogar no `index.css`
 
```
@import "tailwindcss";

/* adicionar isso no settings.json para ignorar o erro de linter: "css.lint.unknownAtRules": "ignore" */
@theme {
  --font-sans: "Poppins", sans-serif;
}
```