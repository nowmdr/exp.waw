# exp.waw

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **UI Library**: HeroUI 2.8
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion 12

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── hero.ts        # HeroUI theme configuration
```

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment (Render.com)

- **Build Command**: `npm run build`
- **Publish Directory**: `out`

## Configuration

- HeroUI is configured via `src/hero.ts` and imported as a Tailwind plugin in `src/app/globals.css`
- `HeroUIProvider` wraps the app in `src/app/providers.tsx`
- Dark mode uses the `dark` class variant

## Development Guidelines

- Use HeroUI components exclusively for all UI elements
- Apply HeroUI's built-in spacing, typography, and font size utilities
- All layouts must be fully responsive using HeroUI's responsive design patterns
- Avoid custom CSS when HeroUI provides equivalent styling options
- Use Hero UI MCP server to reach documentation and design settings

## App Check

Run `npm run build` to verify the application compiles correctly. Do not use `npm run dev` for validation.
