# Mart11UP Portfolio

My personal game-development portfolio, featuring selected professional and independent projects, detailed case studies, and the skills and tools I use regularly.

**Live portfolio:** [mart11up.github.io/portfolio](https://mart11up.github.io/portfolio/)

**Showcase version (without contact or social links):** [mart11up.github.io/portfolio/showcase](https://mart11up.github.io/portfolio/showcase/)

## Highlights

- Game-development case studies with images, GIFs, responsibilities, and technical details
- Professional experience, academic work, awards, and skills
- Interactive procedural-environment demo
- Responsive design with light and dark themes
- Direct email and professional profile links

## Built With

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Create both synchronized versions with:

```bash
npm run build:all
```

Both versions use the same components and portfolio data. The showcase is a build variant, so project and content changes automatically appear in both; only contact and social features are removed from the showcase build.

## Deployment

The portfolio is configured for GitHub Pages at `/portfolio/`, with the showcase variant at `/portfolio/showcase/`.

```bash
npm run build:all
npm run deploy
```

## License

This project is available under the terms in [LICENSE.md](LICENSE.md).
