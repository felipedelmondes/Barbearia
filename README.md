# Navalha D'Ouro — Barbearia

Landing page moderna pra barbearia. Vite + React + TypeScript + Tailwind CSS v4.

## Rodando

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Stack

- Vite
- React 19 + TypeScript
- Tailwind CSS v4
- lucide-react (ícones)

## Estrutura

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    Marquee.tsx
    About.tsx
    Services.tsx
    Gallery.tsx
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
  App.tsx
  index.css     # tema (cores, fontes) via @theme do Tailwind
```

## Editar conteúdo

- Preço/serviços: `src/components/Services.tsx`
- Endereço/horário/WhatsApp: `src/components/Contact.tsx`
- Cores/fontes: tokens `@theme` em `src/index.css`
