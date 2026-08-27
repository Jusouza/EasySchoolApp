# EasySchool · Storybook (ClipEscola)

Design system em React + Storybook, fiel ao layout definido em
`docs/layout/EasySchool.pdf` (página "Design System · ClipEscola para a EasySchool").
Serve como prototipagem visual antes da implementação em Compose Multiplatform.

## Rodar

```bash
npm install
npm run storybook       # catálogo de componentes e telas — http://localhost:6006
npm run dev             # protótipo navegável em tela cheia — http://localhost:5173
npm run build-storybook # gera storybook-static/ (catálogo completo, para hospedar)
npm run build:share     # gera dist-standalone/index.html — arquivo único para compartilhar
```

## Compartilhar o protótipo

`npm run build:share` gera **um único `index.html`** (~370 KB) com tudo
embutido — JS, CSS e a fonte Titillium Web em base64. Não depende de rede;
dá para mandar por e-mail/WhatsApp e a pessoa abre direto no navegador,
offline. Para atualizar, rode o comando de novo depois de mudar telas ou
componentes.

## Estrutura

- `src/tokens/` — cores, tipografia e espaçamento extraídos do PDF (valores
  hex confirmados por amostragem de pixel, não só leitura visual).
- `src/components/` — componentes-mestre (Botão, Campo, Chip, Badge,
  TagStatus, Avatar, ItemLista), navegação (StatusBar, AppHeader, TabBar) e
  padrões de interação (ProgressBar, Toast, ConfirmDialog).
- `src/screens/` — as telas do app (Home, Clips, Agenda, Calendário, Entrada
  e Saída, ClipPag, Loja de Uniformes, Matrícula, Perfil), compostas a partir
  dos componentes-mestre.
- `src/prototype/PrototypeApp.tsx` — o protótipo navegável: pilha de
  navegação real entre as telas, usado tanto pela story "Protótipo/App
  navegável" quanto pelo `npm run dev` / `build:share`.
- `src/foundations/` — stories de documentação (Cores, Tipografia,
  Espaçamento/forma/profundidade, Iconografia), espelhando as seções da
  página de design system do PDF.

## Fonte e ícones

- Tipografia: **Titillium Web**, embutida como base64 em
  `src/tokens/fonts-embedded.css` (funciona offline, sem depender do Google
  Fonts em runtime).
- Ícones: **Lucide** (`lucide-react`), como especificado no PDF. Instagram e
  Facebook (removidos do Lucide) têm SVGs próprios em
  `src/components/SocialIcons/`.

## Próximo passo

Os componentes aqui são a referência visual. A implementação final do app
usa Compose Multiplatform (`app/shared`) — os mesmos tokens e nomes de
componente (`C/Botao`, `C/Campo`, etc., como no PDF) devem ser portados para
lá mantendo os mesmos valores de cor, tipografia e espaçamento.
