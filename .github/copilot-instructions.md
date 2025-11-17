# Heladerías Giovanini - AI Coding Agent Instructions

## Project Overview
Single-page landing for Heladerías Giovanini ice cream shop in Buenos Aires. Next.js 15 App Router, React 18, TypeScript, Tailwind CSS with **Firebase Firestore backend** for dynamic menu management. Six smooth-scrolling sections with vibrant brand identity.

**Stack**: Next.js 15.0.3, React 18.3.1, TypeScript 5, Tailwind CSS 3.4.14, Firebase 12.5.0  
**Package Manager**: pnpm (preferred) or npm  
**Deploy Platform**: Netlify with `@netlify/plugin-nextjs`

## Architecture Essentials

### Component Flow
- **Entry point**: `app/page.tsx` renders 6 components in sequence: Header → Hero → About → Gallery → MenuWrapper → Contact
- **Client-side only**: All interactive sections require `"use client"` directive (no SSR for animations/state)
- **Menu data flow**: Firebase Firestore (backend) → MenuWrapper (Server Component) → Menu (Client Component)
- **No route nesting**: Single-page app with smooth scroll navigation via section IDs

### Critical Dependencies
- `firebase` (12.5.0): Firestore client SDK for menu data
- `next` (15.0.3): App Router with React Server Components
- `lucide-react`: Icon library for UI decorations
- `tailwind-merge` + `clsx`: Utility for conditional Tailwind classes (see `lib/utils.ts`)
- `@vercel/analytics`: Built-in analytics (no config needed)

### Menu System Architecture (CRITICAL)

**Data Flow**:
```
Firestore Collections → MenuWrapper.tsx (async fetch) → Menu.tsx (render)
```

**Firestore Structure**:
- **`_categoriesMeta` collection**: Metadata for 19+ categories
  - Fields: `id` (collection name), `displayName` (visible name), `icon` (emoji), `order` (sort position)
  - Query: `orderBy("order", "asc")` determines category sequence
  
- **Category collections**: One per category (e.g., `promociones-especiales`, `combos`, `cafeteria-cafe-de-especialidad`)
  - Fields: `nombre` (name), `descripcion` (description), `precio` (number), `orden` (sort position)
  - Query: `orderBy("orden", "asc")` determines item sequence within category

**MenuWrapper.tsx Pattern** (Server Component):
```tsx
// 1. Fetch categories metadata from _categoriesMeta
const categoriesMeta = await fetchCategoriesMetadata();

// 2. Parallel fetch of items for all categories (Promise.all for performance)
const menuDataPromises = categoriesMeta.map(async (categoryMeta) => {
  const items = await fetchCategoryItems(categoryMeta.id);
  return { category: categoryMeta.displayName, icon: categoryMeta.icon, items };
});

const menuData = await Promise.all(menuDataPromises);
```

**Key Characteristics**:
- Categories are **100% dynamic** from Firestore (no hardcoded arrays)
- Admin panel edits to `order` field reflect on next build
- Fetch happens at **build time** (SSG), not runtime
- Error handling: Skip failed categories, show fallback if all fail

### Styling Architecture
**Brand colors** (HSL variables in `app/globals.css`):
```css
--primary: 25 95% 53%;    /* Red/pink core brand */
--secondary: 15 35% 85%;  /* Creamy pink */
--accent: 80 60% 96%;     /* Vanilla cream */
```

**Typography stack** (`layout.tsx` with `next/font/google`):
- `--font-sans`: Quicksand (300-700) → body text
- `--font-display`: Fredoka (300-700) → headings/titles
- `--font-serif`: Playfair Display (400-700) → accents

**Custom animations** (`globals.css`):
- `@keyframes float` → ice cream emojis (3s infinite ease-in-out)
- `@keyframes melt` → subtle hover effects
- Inline `style={{ animationDelay: '1s' }}` for staggered timing

### Navigation Pattern
Smooth scroll via `getElementById()` + `scrollIntoView({ behavior: "smooth" })` in `header.tsx`:
```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth" })
}
```
All sections have `id` attributes: `nosotros`, `galeria`, `menu`, `contacto`

### Image Handling
- **Next Image**: `fill` + `object-cover` for responsive behavior
- **Unoptimized**: `next.config.mjs` sets `images: { unoptimized: true }` (Netlify static export requirement)
- **11 real photos**: Instagram-style numeric filenames in `public/images/` (e.g., `232643342_2605505669756707_2596715125860506940_n.jpg`)
- **Logo**: `/images/logo.jpg` (may be placeholder - see `LOGO-INSTRUCTIONS.md`)

## Data Structure

### Menu Pattern (Firebase Firestore)
**`_categoriesMeta` collection**:
```tsx
{
  id: "promociones-especiales",      // Collection name to fetch items from
  displayName: "Promociones Especiales", // Visible category title
  icon: "🎉",                        // Emoji for visual decoration
  order: 1                           // Sort position (admin-editable)
}
```

**Category collection** (e.g., `promociones-especiales`):
```tsx
{
  nombre: "PROMO 1",                 // Item name
  descripcion: "Details...",         // Description (optional, can be empty)
  precio: 9400,                      // Price as NUMBER (not string)
  orden: 1                           // Sort position within category
}
```

**Critical**: 
- Prices are **numbers** in Firestore, formatted to strings in UI with `toLocaleString('es-AR')`
- Empty descriptions (`""`) are valid and handled by conditional rendering
- `order` field in `_categoriesMeta` determines category sequence on site
- `orden` field in items determines product sequence within category

### TypeScript Interfaces
```tsx
interface CategoryMeta {
  id: string;
  displayName: string;
  icon: string;
  order: number;
}

interface MenuItem {
  name: string;
  description?: string;
  price: number;
  orden: number;
}

interface MenuCategory {
  category: string;
  icon: string;
  items: MenuItem[];
}
```

## Development Workflows

### Commands (pnpm preferred)
```powershell
pnpm install          # Install dependencies
pnpm dev              # Dev server on localhost:3000
pnpm build            # Production build → .next/ (ignores TS errors)
pnpm start            # Test production build locally
pnpm lint             # Run ESLint (not enforced pre-commit)
netlify deploy --prod # Deploy to production (requires netlify-cli)
```

### Environment Setup (REQUIRED)
**Critical**: Copy `.env.local.example` to `.env.local` and populate Firebase credentials:
```bash
cp .env.local.example .env.local
```
Required variables (get from Firebase Console → Project Settings → Web App):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` (default: `digital-menu-4e904`)
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

**Note**: `NEXT_PUBLIC_` prefix makes these client-accessible (safe for Firebase with proper Firestore rules)

### Build Config
- **TypeScript**: `ignoreBuildErrors: true` in `next.config.mjs` (pragmatic shipping over strict types)
- **Images**: `unoptimized: true` required for Netlify static export
- **Netlify**: `netlify.toml` uses `@netlify/plugin-nextjs` for SSG detection
- **No pre-commit linting**: `eslint .` script exists but not enforced

### Firebase Client Initialization
Located in `lib/firebaseClient.ts`:
- Uses singleton pattern (`getApps().length` check)
- Exports `db` (Firestore instance) for imports
- Falls back to hardcoded project ID if env var missing

## Common Modifications

### Add Menu Items (via Firebase Console or Admin Panel)
1. Navigate to appropriate category collection in Firestore (e.g., `combos`)
2. Add new document with fields: `nombre`, `descripcion`, `precio` (number), `orden`
3. Set `orden` to position item in sequence (lower numbers appear first)
4. Changes reflect on next build (SSG refresh required)

### Add New Category
1. Add document to `_categoriesMeta` collection:
   - `id`: new collection name (kebab-case, e.g., `postres-especiales`)
   - `displayName`: visible title (e.g., "Postres Especiales")
   - `icon`: emoji string (e.g., "🍰")
   - `order`: position in menu (1-19+)
2. Create new collection in Firestore with same name as `id`
3. Add item documents to new collection with fields: `nombre`, `descripcion`, `precio`, `orden`
4. Rebuild site to fetch new category dynamically

### Reorder Categories
1. Edit `order` field in `_categoriesMeta` documents (via admin panel or Firebase Console)
2. Rebuild site to reflect new sequence

### Change Prices
1. Edit `precio` field (must be number type, not string) in Firestore document
2. Rebuild site
3. UI automatically formats with `toLocaleString('es-AR')`

### Use Admin Panel (restaurant-menu-manager/)
Separate Firebase CRUD web UI in `/restaurant-menu-manager`:
- **Frontend**: Vanilla JS interface (`frontend/src/`)
- **Backend**: Firebase Cloud Functions (`backend/functions/src/`)
- See `restaurant-menu-manager/README.md` for setup
- Requires separate Firebase credentials in `frontend/src/config.js`
- Deploy functions: `cd backend/functions && firebase deploy --only functions`
### Add Gallery Images
1. Copy file to `public/images/`
2. Push object to `images` array in `components/gallery.tsx`:
```tsx
{ src: "/images/new.jpg", alt: "Description", caption: "Caption" }
```
3. Grid auto-adjusts (3/2/1 columns via Tailwind breakpoints)

### Change Brand Colors
Edit `:root` variables in `app/globals.css` (HSL format):
```css
--primary: 25 95% 53%; /* New hue saturation lightness */
```

### Add Section
1. Create component in `components/` with `"use client"` if interactive
2. Import/render in `app/page.tsx` order
3. Add nav link in `header.tsx` with `scrollToSection('new-id')`
4. Give component `id="new-id"` attribute

## Project Conventions

- **File naming**: kebab-case (`menu-data.tsx`), PascalCase for components
- **Imports**: `@/` alias (tsconfig maps to project root)
- **Minimal comments**: Self-documenting via descriptive names
- **Mobile-first**: Tailwind breakpoints `sm:` (640px), `md:` (768px), `lg:` (1024px)
- **Gradient backgrounds**: Heavy use of `bg-gradient-to-[direction]` for brand vibrancy
- **Hover states**: `group` + `group-hover:` pattern for card interactions (scale, shadow, color)
- **Emoji design**: 🍦🍨🍧 used as structural decoration (not just content)

## External Integrations

- **Google Maps**: Hardcoded iframe in `contact.tsx` (Av. Corrientes 1255 coordinates)
- **Instagram**: `@heladosviagiovanni` link in gallery/contact
- **Analytics**: Vercel Analytics in `layout.tsx` (no config needed)

## Known Gotchas

- **restaurant-menu-manager/**: Separate Firebase CRUD admin panel project - use for editing menu via web UI (see "Use Admin Panel" section above)
- **Menu prices**: Must be **numbers** in Firestore (not strings), formatted with `toLocaleString('es-AR')` in UI
- **Logo**: Path `/images/logo.jpg` may 404 - pending real logo (see `LOGO-INSTRUCTIONS.md`)
- **No contact form**: Contact section is info-only (map + address + social)
- **TypeScript relaxed**: Focus on shipping over strict types (`ignoreBuildErrors: true`)
- **Firebase config**: Credentials in `.env.local` (not in repo, use `.env.local.example` template)
- **SSG at build time**: Menu data fetched during build, not at runtime - changes require rebuild
- **Empty descriptions**: `descripcion: ""` is valid in Firestore, handled by conditional rendering in UI
- **Category filtering**: `MenuWrapper.tsx` returns all categories (including empty ones) - modify `fetchMenuDataFromFirestore()` to filter if needed

## Testing Checklist

- Dev server: Smooth scroll navigation works
- Mobile: Hamburger menu toggle at < 768px
- Images: All 11 photos load (check Network tab)
- Build: `pnpm build` completes (ignore TS warnings)
- Deploy: Netlify build succeeds with `.next/` output

## Deployment

**Platform**: Netlify (configured via `netlify.toml`)
- Build: `npm run build` (auto-detected)
- Publish: `.next/`
- **Environment Variables**: Must configure Firebase credentials in Netlify dashboard (not needed for build, only runtime)
- Post-deploy: Verify smooth scroll + images on live URL

### Netlify Environment Variables Setup
Navigate to Netlify dashboard → Site settings → Environment variables, add:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
