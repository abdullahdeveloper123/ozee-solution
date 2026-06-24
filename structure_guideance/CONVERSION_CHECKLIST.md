# React to Next.js Conversion Checklist

**Project:** Auto-Car Frontend  
**From:** React JS (with file-based routing)  
**To:** Next.js 16+ (with App Router)  
**Date Started:** ________  
**Completion Target:** ________

---

## 📋 Phase 1: Project Setup & Configuration

### Core Setup
- [ ] Initialize Next.js project or migrate existing project
- [ ] Install Next.js 16.1.1: `npm install next@latest`
- [ ] Install React 19.1.0: `npm install react@latest react-dom@latest`
- [ ] Install TypeScript support
- [ ] Verify `next.config.ts` exists and is configured
- [ ] Verify `tsconfig.json` has `@/*` path alias pointing to `./src/*`
- [ ] Verify `tailwind.config.ts` exists and CSS is configured
- [ ] Verify `.eslintrc` / `eslint.config.mjs` is configured
- [ ] Verify `postcss.config.mjs` exists

### Dependencies Installation
- [ ] Install Redux Toolkit: `npm install @reduxjs/toolkit react-redux`
- [ ] Install React Query: `npm install @tanstack/react-query`
- [ ] Install Axios: `npm install axios`
- [ ] Install UI libraries:
  - [ ] `npm install @headlessui/react @heroicons/react lucide-react react-icons`
- [ ] Install toast/notification: `npm install react-hot-toast react-toastify`
- [ ] Install animation: `npm install framer-motion`
- [ ] Install form libraries (if needed): `npm install react-hook-form`
- [ ] Install date utilities: `npm install date-fns dayjs moment`
- [ ] Install realtime: `npm install socket.io-client`
- [ ] Install theme: `npm install next-themes`
- [ ] Install table: `npm install rc-table @tanstack/react-table`

### Environment Setup
- [ ] Create `.env.local` file
- [ ] Add `NEXT_PUBLIC_API_URL` variable
- [ ] Add `NEXT_PUBLIC_APP_URL` variable
- [ ] Add other required environment variables
- [ ] Test `.env.local` is loaded: `npm run dev`

---

## 📁 Phase 2: Directory Structure Migration

### Create Next.js App Structure
- [ ] Create `src/app/` directory
- [ ] Create `src/app/(routes)/` folder for public routes
- [ ] Create `src/app/(admin-routes)/` folder for admin routes
- [ ] Create `src/app/constant/` folder for data files
- [ ] Create `src/app/componet/` folder for global components
- [ ] Create `src/app/providers/` folder for React providers
- [ ] Create `src/config/` folder for configuration
- [ ] Create `src/store/slices/` folder for Redux slices
- [ ] Create `src/types/` folder for TypeScript types
- [ ] Create `src/utils/` folder for utilities
- [ ] Create `src/hooks/` folder for custom hooks
- [ ] Create `src/layouts/` folder for layout components
- [ ] Create `src/components/` folder for reusable UI components

### Organize Existing Files
- [ ] Move/copy all React components to appropriate folders
- [ ] Move styles to `src/app/globals.css` and component-level CSS modules
- [ ] Move utilities to `src/utils/`
- [ ] Move type definitions to `src/types/`
- [ ] Move public assets to `public/` folder
- [ ] Delete old React Router configuration files
- [ ] Delete old pages directory (if exists)
- [ ] Delete old API routes (will be recreated with App Router)

---

## 🔧 Phase 3: Core Setup Files

### Root Layout
- [ ] Create `src/app/layout.tsx`
- [ ] Import global styles
- [ ] Configure metadata (title, description, icons)
- [ ] Setup Tailwind CSS classes
- [ ] Import ReduxProvider
- [ ] Import Toaster/notification provider
- [ ] Import WhatsAppButton or other global components
- [ ] Test layout renders without errors

### Root Page
- [ ] Create `src/app/page.tsx` (homepage)
- [ ] Update from old React homepage
- [ ] Test page loads at `/`

### Global Styles
- [ ] Copy/update global CSS to `src/app/globals.css`
- [ ] Ensure Tailwind directives are present:
  - [ ] `@tailwind base;`
  - [ ] `@tailwind components;`
  - [ ] `@tailwind utilities;`
- [ ] Add any custom global styles
- [ ] Test styles load correctly

### Redux Provider
- [ ] Create `src/app/providers/ReduxProvider.tsx`
- [ ] Add `'use client'` directive
- [ ] Import Redux Provider component
- [ ] Import store from `@/store/store`
- [ ] Wrap children with Provider
- [ ] Test provider works in layout

---

## 🏪 Phase 4: State Management (Optional)

**Note:** For a static website, state management is typically not needed. Use React's built-in `useState` for component-level state if required.

- [ ] Understand when to use `useState` vs global state
- [ ] Use Context API if shared state is needed
- [ ] Avoid over-engineering for static content

---

## 📝 Phase 5: Dynamic Content System (Data Files)

### Create Data Files
- [ ] Create `src/app/constant/landingpage.text.js`
- [ ] Create `src/app/constant/services.text.js`
- [ ] Create `src/app/constant/employees.text.js`
- [ ] Create `src/app/constant/appointments.text.js`
- [ ] Create other data files as needed for features
- [ ] Each file exports default object with structured data:
  - [ ] Header/title information
  - [ ] Items array with id, name, description, image
  - [ ] Testimonials if applicable
  - [ ] Pricing/features if applicable
  - [ ] Other feature-specific data

### Data File Structure
For each data file, ensure:
- [ ] Clear, descriptive property names
- [ ] Consistent data structure for items (id, name, etc.)
- [ ] Image paths relative to public folder
- [ ] All text content is in data file
- [ ] No hardcoded content in components

### Validate Data Files
- [ ] Test import data file in component: `import Data from '@/app/constant/file.text'`
- [ ] Test access properties: `Data.items`, `Data.header`
- [ ] Test map over arrays without errors
- [ ] Test render data in JSX
- [ ] Verify all image paths are correct

---

## 🛣️ Phase 6: Routing Structure

### Route Groups & Pages
- [ ] Create all website route folders in `(routes)/`:
  - [ ] `(routes)/homepage/page.tsx`
  - [ ] `(routes)/about/page.tsx`
  - [ ] `(routes)/services/page.tsx`
  - [ ] `(routes)/appointment/page.tsx`
  - [ ] `(routes)/car-rent/page.tsx`
  - [ ] `(routes)/contact/page.tsx`
  - [ ] `(routes)/blog/page.tsx`
  - [ ] `(routes)/gallery/page.tsx`
  - [ ] `(routes)/pricing/page.tsx`
  - [ ] Other public pages...

### Dynamic Routes
- [ ] Create dynamic route: `(routes)/products/[id]/page.tsx`
- [ ] Create nested dynamic routes if needed: `(routes)/products/[id]/edit/page.tsx`
- [ ] Access `params` using `useParams()` in client components
- [ ] Test dynamic routes with actual IDs

### Layouts
- [ ] Create `(routes)/layout.tsx` for main layout wrapper
- [ ] Add navigation components as needed
- [ ] Add footer component
- [ ] Test layouts apply correctly to nested pages

### Loading & Error States
- [ ] Create `(routes)/loading.tsx` for loading state
- [ ] Create `(routes)/error.tsx` for error boundary
- [ ] Create `(admin-routes)/loading.tsx`
- [ ] Create `(admin-routes)/error.tsx`
- [ ] Test loading/error states display correctly

---

## ⚙️ Phase 7: Configuration System

### Routes Configuration
- [ ] Create `src/config/routes.ts`
- [ ] Define all route paths as constants:
  - [ ] Public routes object
  - [ ] Admin routes object
  - [ ] Auth routes object
  - [ ] Dynamic route functions
- [ ] Export routes object
- [ ] Test import and use routes in components

### Constants Configuration
- [ ] Create `src/config/constants.ts`
- [ ] Define app constants:
  - [ ] CURRENCY_CODE, LOCALE
  - [ ] ROW_PER_PAGE_OPTIONS
  - [ ] CACHE_KEYS
  - [ ] API timeouts, limits
  - [ ] Other feature flags
- [ ] Test imports in components

### Site Configuration
- [ ] Create `src/config/site.config.tsx`
- [ ] Define site-wide settings:
  - [ ] Site name, description, URL
  - [ ] Contact information
  - [ ] Feature flags
  - [ ] Theme settings
- [ ] Export configuration object

### Color Presets
- [ ] Create `src/config/color-presets.ts`
- [ ] Define color palette:
  - [ ] Primary, secondary colors
  - [ ] Status colors (danger, warning, success)
  - [ ] Neutral colors
- [ ] Use colors in Tailwind CSS or styled-components

### Messages Configuration
- [ ] Create `src/config/messages.ts`
- [ ] Define all app messages:
  - [ ] Error messages
  - [ ] Success messages
  - [ ] Validation messages
  - [ ] Empty states
- [ ] Use from config in components

---

## 🧩 Phase 8: Component Migration

### Global Components
- [ ] Migrate Navbar component: `src/app/componet/navbar/`
- [ ] Migrate Footer component: `src/app/componet/footer/`
- [ ] Migrate Appointment form: `src/app/componet/appointment.js`
- [ ] Migrate Banner component: `src/app/componet/bannerimage.js`
- [ ] Migrate Car section: `src/app/componet/carsection.js`
- [ ] Migrate ReusableCards: `src/app/componet/Reuseablecards.js`
- [ ] Migrate Video section: `src/app/componet/videosection.js`
- [ ] Migrate Chat components: `src/app/componet/chat/`
- [ ] Migrate Employee components: `src/app/componet/employee/`
- [ ] Migrate Auth components: `src/app/componet/auth/`
- [ ] Migrate Admin components: `src/app/componet/admin/`
- [ ] Migrate WhatsApp integration: `src/app/componet/WhatsApp/`

### Component Updates
For each component:
- [ ] Update imports to use `@/` alias
- [ ] Update data file imports
- [ ] Replace hardcoded content with data file values
- [ ] Add TypeScript types if not present
- [ ] Convert `.map()` loops to use data file arrays
- [ ] Test component renders without errors
- [ ] Test data displays correctly

### UI Components
- [ ] Create/migrate Modal component: `src/components/modal.tsx`
- [ ] Create/migrate Button component: `src/components/ui/button.tsx`
- [ ] Create/migrate Input component: `src/components/ui/input.tsx`
- [ ] Create/migrate Card component: `src/components/ui/card.tsx`
- [ ] Create other base UI components as needed
- [ ] Document component props and usage

---

## 🔗 Phase 9: Routing & Navigation

### Update Navigation Links
- [ ] Replace all `<a>` tags with `<Link>`
- [ ] Replace hardcoded URLs with `routes` config
- [ ] Update all internal links to use `<Link href={routes.path}>`
- [ ] Test navigation works between pages
- [ ] Test links are accessible

### Dynamic Route Linking
- [ ] Create dynamic route links: `routes.admin.userDetails(id)`
- [ ] Test dynamic routing with parameters
- [ ] Test route parameters pass correctly
- [ ] Verify browser back/forward works

### Client vs Server Components
- [ ] Add `'use client'` to components that need:
  - [ ] useState, useEffect hooks
  - [ ] useRouter, useParams hooks
  - [ ] Redux hooks
  - [ ] Event listeners
- [ ] Leave components as Server Components if they only render static content
- [ ] Test client components hydrate correctly

---

## 🪝 Phase 10: Custom Hooks

### Create Custom Hooks
- [ ] Create `src/hooks/use-is-mounted.ts` - Check if component mounted
- [ ] Create `src/hooks/use-media.ts` - Responsive design hook
- [ ] Create `src/hooks/use-window-scroll.ts` - Track scroll position
- [ ] Create other custom hooks as needed

Each hook should:
- [ ] Have clear purpose documented
- [ ] Accept parameters if needed
- [ ] Return typed values
- [ ] Handle cleanup if needed
- [ ] Be tested in components

---

## 📊 Phase 11: Type Definitions

### Create Type Files
- [ ] Create `src/types/index.ts` - Export all types
- [ ] Create `src/types/declarations.d.ts` - Global type declarations
- [ ] Create other domain-specific types as needed

Each type file should define:
- [ ] Interfaces for data models
- [ ] Enums for constants
- [ ] Union types if needed
- [ ] Function signatures

### Update Components with Types
- [ ] Add prop types to all components
- [ ] Type hook return values
- [ ] Type API response data
- [ ] Type Redux state slices
- [ ] Enable strict mode in tsconfig.json

---

## 🎨 Phase 12: Styling & Theme

### Tailwind CSS Setup
- [ ] Verify `tailwind.config.ts` is configured
- [ ] Verify Tailwind directives in `src/app/globals.css`
- [ ] Create custom theme colors if needed
- [ ] Create custom utility classes if needed
- [ ] Test Tailwind classes apply correctly

### Global Styles
- [ ] Move all global CSS to `src/app/globals.css`
- [ ] Import custom fonts using `next/font`
- [ ] Setup font variables for usage
- [ ] Test fonts load correctly
- [ ] Setup CSS variables for theming

### Component Styling
- [ ] Use Tailwind for component styles (preferred)
- [ ] Use CSS modules for scoped styles if needed
- [ ] Use inline styles for dynamic styles only
- [ ] Test responsive design with Tailwind breakpoints

---

## 🧪 Phase 13: Testing & Validation

### Build & Dev Server
- [ ] Run dev server: `npm run dev`
- [ ] Verify no console errors
- [ ] Verify all pages load
- [ ] Test page navigation works
- [ ] Test data displays correctly

### Production Build
- [ ] Run build: `npm run build`
- [ ] Check for build errors or warnings
- [ ] Run production server: `npm start`
- [ ] Test all routes work in production
- [ ] Test performance is acceptable

### Functionality Testing
- [ ] Test all pages render correctly
- [ ] Test data files load and display
- [ ] Test components display data from data files
- [ ] Test navigation between pages
- [ ] Test responsive design on mobile/tablet
- [ ] Test accessibility (keyboard navigation, screen readers)

### Cross-browser Testing
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test on iOS Safari
- [ ] Test on Android Chrome

---

## 🚀 Phase 14: Deployment

### Vercel Setup
- [ ] Create Vercel account if not exists
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Connect GitHub repository
- [ ] Configure deployment settings

### Pre-deployment Checklist
- [ ] Build succeeds: `npm run build`
- [ ] No console errors or warnings
- [ ] No sensitive data in code
- [ ] Git repository clean and committed

### Deploy
- [ ] Deploy to Vercel: `vercel --prod`
- [ ] Test deployed site loads correctly
- [ ] Test all pages accessible
- [ ] Test data displays correctly
- [ ] Check browser console for errors

### Post-deployment
- [ ] Monitor for errors
- [ ] Test all pages on live site
- [ ] Gather user feedback
- [ ] Fix any issues found

---

## 📚 Phase 15: Documentation

### Code Documentation
- [ ] Add JSDoc comments to functions
- [ ] Document component props
- [ ] Document custom hooks
- [ ] Add README.md to project root
- [ ] Document data file structure

### Architecture Documentation
- [ ] Review/update PROJECT_ARCHITECTURE.md
- [ ] Update QUICK_REFERENCE.md with project specifics
- [ ] Document component hierarchy
- [ ] Document data file structure and usage

---

## 🎯 Phase 16: Optimization & Polish

### Performance Optimization
- [ ] Lazy load heavy components
- [ ] Optimize images using `next/image`
- [ ] Code splitting with dynamic imports
- [ ] Minimize bundle size
- [ ] Test Lighthouse score
- [ ] Optimize Core Web Vitals

### SEO Optimization
- [ ] Add metadata to pages
- [ ] Use semantic HTML
- [ ] Add Open Graph tags
- [ ] Setup sitemap.xml
- [ ] Setup robots.txt
- [ ] Test SEO with tools

### Code Quality
- [ ] Run linter: `npm run lint`
- [ ] Fix all linting errors
- [ ] Code review all changes
- [ ] Remove console.log statements
- [ ] Remove dead code
- [ ] Refactor complex components

### User Experience
- [ ] Test user flows end-to-end
- [ ] Verify error messages are helpful
- [ ] Test loading states display
- [ ] Test form validation works
- [ ] Test responsiveness on all devices
- [ ] Get stakeholder feedback

---

## ✅ Final Verification Checklist

### Core Functionality
- [ ] Homepage renders with data from data file
- [ ] All routes accessible
- [ ] Navigation works between pages
- [ ] Dynamic routes work with parameters
- [ ] All pages load without errors

### Data & Content
- [ ] All content comes from data files
- [ ] No hardcoded content in components
- [ ] Data updates reflect in UI
- [ ] Images load correctly
- [ ] Text content displays properly

### Technical
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Build succeeds
- [ ] Development server runs
- [ ] Production build runs
- [ ] No console errors

### Deployment
- [ ] Deployed to Vercel
- [ ] Live site accessible
- [ ] All routes work on live
- [ ] Performance acceptable

---

## 📋 Sign-off

**Project Manager:** _________________  
**Date:** _________________  

**Lead Developer:** _________________  
**Date:** _________________  

**Status:** ☐ Complete  ☐ In Progress  ☐ Blocked

---

**Conversion Checklist Version:** 2.0 (Static Website Edition)  
**Last Updated:** 2024  
**Framework:** Next.js 16.1.1 with App Router  
**Type:** Static Business Website (No Backend)
