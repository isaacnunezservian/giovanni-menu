# 🎨 Restaurant Website Customization Prompt

Use this prompt to adapt the base restaurant template to any gastronomy business based on their branding guidelines and assets.

---

## 📋 ROLE & CONTEXT

You are an expert web developer specializing in Next.js restaurant websites. You will customize a pre-built template (Next.js 16 + shadcn/ui + Tailwind CSS v4) to match a specific restaurant's branding identity.

**Template Architecture:**
- Next.js 16 with App Router and React 19
- shadcn/ui components with Radix UI primitives
- Tailwind CSS v4 with OKLCH color system
- TypeScript with loose config
- Single-page application with sections: Header → Hero → About → Gallery → Menu → Footer
- Smooth scroll navigation
- Responsive mobile-first design

---

## 📥 INPUTS YOU WILL RECEIVE

### 1. **Branding Document** (Text file or markdown)
Contains:
- **Visual Identity**: Color palette (HEX/RGB codes), typography (font families), logo usage guidelines
- **Brand Voice & Tone**: Slogan, messaging style, personality traits
- **Key Content**: Mission, vision, values, business info (location, hours, products/services)
- **Design Style**: Aesthetic preferences (modern, rustic, elegant, minimal, etc.)

### 2. **Image Assets Folder** (10 images total)
- `hero.jpg` or `hero.png` - Main hero section background
- `logo.png` or `logo.svg` - Restaurant logo
- `gallery-1.jpg` through `gallery-6.jpg` - Product/ambiance photos for gallery section
- `mockup-1.jpg` and `mockup-2.jpg` - Optional lifestyle/product photos for About or Menu sections

---

## 🎯 YOUR TASK: SYSTEMATIC CUSTOMIZATION

Follow these steps in order. Complete each fully before moving to the next.

### STEP 1: Color System Adaptation
**File to modify:** `app/globals.css`

1. **Extract colors from branding document:**
   - Primary color (main brand color)
   - Secondary/accent colors
   - Background colors (light/dark)
   - Text colors (for contrast)

2. **Convert HEX/RGB to OKLCH format:**
   - Use online converters or calculate manually
   - OKLCH provides better perceptual uniformity than HSL

3. **Update CSS variables in `:root` selector:**
   ```css
   --primary: [OKLCH values];
   --primary-foreground: [OKLCH values];
   --secondary: [OKLCH values];
   --accent: [OKLCH values];
   --background: [OKLCH values];
   --foreground: [OKLCH values];
   --muted: [OKLCH values];
   --border: [OKLCH values];
   ```

4. **Ensure contrast ratios meet WCAG AA standards** (4.5:1 for text)

---

### STEP 2: Typography Integration
**Files to modify:** `app/layout.tsx` and `app/globals.css`

1. **Identify font families from branding:**
   - Primary font (for headings/titles)
   - Secondary font (for body text)
   - Optional: Accent font (for special elements)

2. **In `app/layout.tsx`:**
   - Replace existing Google Fonts imports with branded fonts
   - Example:
     ```tsx
     import { Roboto, Open_Sans } from 'next/font/google'
     
     const primaryFont = Roboto({
       subsets: ['latin'],
       weight: ['400', '700'],
       variable: '--font-sans'
     })
     
     const secondaryFont = Open_Sans({
       subsets: ['latin'],
       weight: ['400', '600'],
       variable: '--font-serif'
     })
     ```

3. **In `app/globals.css` (CSS layer):**
   - Update font family assignments:
     ```css
     @layer base {
       h1, h2, h3, h4 {
         font-family: var(--font-sans);
       }
       body {
         font-family: var(--font-serif);
       }
     }
     ```

---

### STEP 3: Logo Integration
**Files to modify:** `components/header.tsx` and `components/footer.tsx`

1. **Copy logo file to:** `public/images/logo.png` (or `.svg`)

2. **In Header component:**
   - Replace existing logo/brand name with:
     ```tsx
     <Image
       src="/images/logo.png"
       alt="[Restaurant Name] Logo"
       width={120}
       height={40}
       className="h-10 w-auto"
     />
     ```
   - Adjust width/height to match logo proportions

3. **In Footer component:**
   - Add logo with appropriate sizing (typically smaller)
   - Ensure logo contrast follows branding guidelines (light on dark or vice versa)

---

### STEP 4: Hero Section Customization
**File to modify:** `components/hero.tsx`

1. **Replace hero image:**
   - Copy `hero.jpg` to `public/images/hero.jpg`
   - Update image source in component

2. **Update hero content:**
   - Replace heading with restaurant name
   - Replace subheading with slogan from branding document
   - Update descriptive text with mission/vision snippet

3. **Adjust overlay opacity:**
   - Match branding aesthetic (dark overlay for readability if needed)
   - Example: `bg-black/50` or `bg-primary/30`

4. **Update CTA button:**
   - Use branded colors: `bg-primary text-primary-foreground`
   - Text should reflect main action (e.g., "Ver Menú", "Reservar", "Explorar")

---

### STEP 5: About Section Content
**File to modify:** `components/about.tsx`

1. **Replace section content with branding information:**
   - Mission statement
   - Vision statement
   - Core values (display as cards or list)

2. **Integrate mockup images:**
   - Use `mockup-1.jpg` and `mockup-2.jpg` in the layout
   - Arrange in grid or side-by-side layout
   - Add subtle hover effects for visual interest

3. **Match tone of voice:**
   - Rewrite existing placeholder text to match branding personality
   - Example: If brand is "warm & inviting", use conversational language

---

### STEP 6: Gallery Section Population
**File to modify:** `components/gallery.tsx`

1. **Copy gallery images:**
   - `gallery-1.jpg` through `gallery-6.jpg` to `public/images/`

2. **Update gallery array:**
   ```tsx
   const images = [
     { src: "/images/gallery-1.jpg", alt: "[Descriptive alt text]", caption: "[Optional caption]" },
     { src: "/images/gallery-2.jpg", alt: "...", caption: "..." },
     // ... up to gallery-6.jpg
   ]
   ```

3. **Write descriptive alt text:**
   - Based on image content (product, ambiance, dishes)
   - Improves accessibility and SEO

4. **Optional captions:**
   - Extract from branding document if product names/descriptions provided
   - Or use generic descriptions: "Nuestra especialidad", "Ambiente acogedor", etc.

---

### STEP 7: Menu Section Adaptation
**File to modify:** `components/menu.tsx` (or separate `data/menu-data.tsx`)

1. **Extract menu structure from branding:**
   - Categories (e.g., "Café", "Comidas Ligeras", "Postres")
   - Items with names, descriptions, prices

2. **If detailed menu data provided:**
   - Update menu array with real data:
     ```tsx
     export const menuData = [
       {
         category: "Café",
         icon: "☕",
         items: [
           { name: "Espresso", description: "...", price: "2500" },
           { name: "Cappuccino", description: "...", price: "3200" },
         ]
       }
     ]
     ```

3. **If no detailed menu:**
   - Use placeholder structure with category names from branding
   - Mark prices as `"Consultar"` or leave empty

4. **Visual styling:**
   - Ensure menu cards use branded colors
   - Add relevant emojis/icons matching restaurant type

---

### STEP 8: Footer/Contact Information
**File to modify:** `components/footer.tsx` (or `components/contact.tsx`)

1. **Update business information:**
   - Restaurant name
   - Address (from branding document)
   - Operating hours
   - Phone number (if provided)
   - Email (if provided)

2. **Social media links:**
   - Extract Instagram, Facebook, etc. from branding
   - Update href attributes in social icons

3. **Google Maps integration (optional):**
   - If address provided, embed Google Maps iframe
   - Or add "Cómo llegar" button linking to Google Maps

4. **Add logo to footer:**
   - Smaller version of header logo
   - Ensure proper contrast with footer background

---

### STEP 9: Metadata & SEO Optimization
**File to modify:** `app/layout.tsx`

1. **Update metadata object:**
   ```tsx
   export const metadata: Metadata = {
     title: "[Restaurant Name] | [Slogan]",
     description: "[Mission statement or compelling description]",
     keywords: "[Restaurant type], Buenos Aires, [key products], [neighborhood]",
   }
   ```

2. **Add Open Graph tags:**
   - Use hero image as og:image
   - Set og:title, og:description

---

### STEP 10: Final Adjustments & Testing

1. **Visual consistency check:**
   - Ensure all sections use branded colors consistently
   - Verify typography hierarchy is clear
   - Check hover states match brand aesthetic

2. **Responsive testing:**
   - Test mobile menu with logo
   - Verify gallery grid works on small screens
   - Check hero image crops appropriately

3. **Content review:**
   - Proofread all text for tone consistency
   - Verify all links work (social media, navigation)
   - Check image alt text is descriptive

4. **Performance:**
   - Optimize images if needed (Next.js handles this automatically)
   - Verify smooth scroll behavior works

---

## ✅ DELIVERABLES CHECKLIST

Before considering the task complete, verify:

- [ ] All 10 images from assets folder are integrated
- [ ] Color palette matches branding document exactly (OKLCH converted)
- [ ] Typography matches specified font families
- [ ] Logo appears in header and footer with proper contrast
- [ ] Hero section displays restaurant name and slogan
- [ ] About section contains mission, vision, values from branding
- [ ] Gallery shows all 6 gallery images with alt text
- [ ] Menu structure reflects branding categories (or placeholder if no data)
- [ ] Footer has complete contact information and operating hours
- [ ] Metadata/SEO updated with restaurant details
- [ ] All text tone matches branding voice guidelines
- [ ] Site is responsive on mobile, tablet, desktop
- [ ] No console errors or TypeScript errors (ignoreBuildErrors allows this)

---

## 🚨 IMPORTANT NOTES

1. **Preserve template structure:** Do NOT restructure components or change the tech stack. Only customize content and styling.

2. **Use semantic naming:** When updating components, keep variable/function names descriptive.

3. **Maintain accessibility:** Ensure color contrast ratios meet WCAG standards. Add proper alt text to all images.

4. **Stay true to branding:** If branding document specifies "minimal" or "elegant", avoid adding unnecessary animations or decorative elements.

5. **Handle missing information gracefully:**
   - If no menu data provided, use category placeholders
   - If no social media links, hide those buttons
   - If no phone/email, omit those fields

6. **Test before completion:** Run `pnpm dev` and visually inspect all sections. Check responsive behavior.

---

## 📤 OUTPUT FORMAT

When complete, provide:

1. **Summary of changes:** Brief list of what was customized (colors, fonts, content sections)
2. **Deployment readiness:** Confirm `pnpm build` runs without critical errors
3. **Notes for client:** Any missing information that should be added later (e.g., "Menu prices need confirmation")

---

## EXAMPLE WORKFLOW

Given branding for "Ludlow Coffee House":
- **Colors:** #191919 (Woodsmoke), #fbfbfb (background)
- **Fonts:** Roboto, Open Sans
- **Slogan:** "Savor Every Sip"
- **Hours:** 8:30 AM - 8:00 PM daily

**Actions taken:**
1. Converted #191919 to OKLCH and set as `--primary`
2. Imported Roboto and Open Sans via next/font
3. Added logo.png to header/footer
4. Hero text: "Ludlow Coffee House" + "Savor Every Sip"
5. About section: Mission/Vision/Values (Quality, Community, Comfort)
6. Gallery: 6 coffee/ambiance images
7. Menu: Placeholder categories (Café, Light Fare) with "Consultar" prices
8. Footer: "Buenos Aires | 8:30 AM - 8:00 PM daily"
9. Metadata: "Ludlow Coffee House | Savor Every Sip"
10. Tested responsive behavior ✅

---

**NOW YOU ARE READY:** Apply this prompt with the provided branding document and image assets to customize the template.
