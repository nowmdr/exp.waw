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
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

- HeroUI is configured via `src/hero.ts` and imported as a Tailwind plugin in `src/app/globals.css`
- `HeroUIProvider` wraps the app in `src/app/providers.tsx`
- Dark mode uses the `dark` class variant
