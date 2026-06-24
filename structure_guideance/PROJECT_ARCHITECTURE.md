# Auto-Car Frontend - Complete Architecture Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Directory Architecture](#directory-architecture)
5. [Dynamic Content Injection System](#dynamic-content-injection-system)
6. [Routing Architecture](#routing-architecture)
7. [State Management](#state-management)
8. [Configuration System](#configuration-system)
9. [Component Architecture](#component-architecture)
10. [Provider Pattern](#provider-pattern)
11. [Next.js App Router Features](#nextjs-app-router-features)
12. [React to Next.js Conversion Guide](#react-to-nextjs-conversion-guide)
13. [Best Practices](#best-practices)

---

## Project Overview

**Auto-Car** is a modern Next.js static business website built with React 19, TypeScript, and Tailwind CSS. It showcases car rental, booking, and service offerings with a professional, responsive design.

### Key Features
- 🚗 Car rental and booking information
- 📞 Appointment booking interface
- 💼 Service showcase
- 🔧 Services and expertise display
- 📱 Responsive design
- 🎨 Modern UI with animations
- ✉️ Contact and inquiry forms
- 📸 Gallery and portfolio showcase

---

## Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router (not Pages Router)
- **React 19.1.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework

### State Management & Data Fetching
- **Axios** (1.13.1) - HTTP client (optional, for future API integration)

### UI & Components
- **Headless UI** - Unstyled UI components
- **Heroicons** - Icon library
- **Lucide React** - Modern icon library
- **React Icons** - Additional icons
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **Recharts** - Charting library

### Specialized Libraries
- **Socket.io Client** - Real-time communication
- **React Leaflet** - Interactive maps
- **Libphonenumber-js** - Phone number formatting
- **Date-fns & Dayjs** - Date utilities
- **Moment.js** - Date manipulation
- **React Table** (rc-table) - Advanced table component

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

---

## Project Structure

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router root
│   │   ├── (routes)/                 # All website routes (Route Group)
│   │   ├── componet/                 # Global components
│   │   ├── constant/                 # Static data files
│   │   ├── config/                   # Configuration files
│   │   ├── modules/                  # Feature modules
│   │   ├── pages/                    # Page-level components
│   │   ├── providers/                # React providers
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Root page
│   │   └── globals.css               # Global styles
│   ├── components/                   # Reusable UI components
│   ├── config/                       # App-wide configuration
│   ├── constants/                    # App-wide constants
│   ├── hooks/                        # Custom React hooks
│   ├── layouts/                      # Layout components
│   ├── store/                        # Redux store setup
│   ├── types/                        # TypeScript type definitions
│   ├── utils/                        # Utility functions
│   └── shared/                       # Shared utilities
├── public/                           # Static assets
├── package.json                      # Dependencies
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts               # Tailwind configuration
└── eslint.config.mjs                # ESLint configuration
```

---

## Directory Architecture

### 1. **src/app/** - Next.js App Router Root

The app directory is the core of Next.js App Router. It uses file-based routing where folder names become URL paths.

#### Route Groups (Parentheses)
```
(routes)/                # All website routes
├── about/
├── appointment/
├── autowork/
├── blog/
├── buy-car/
├── car-booking-info/
├── car-rent/
├── cardetail/
├── chat/
├── contactus/
├── employee/
├── gallery/
├── homepage/
├── job-portal/
├── landingpage/
├── ourservice/
├── pricing/
├── readmore/
└── services/
```

**Route Groups** (folders in parentheses) don't affect URL paths. They organize routes logically:
- `(routes)` contains all public website pages

### 2. **src/app/componet/** - Global Components

Reusable components used across multiple routes:
```
componet/
├── appointment.js              # Appointment form component
├── bannerimage.js              # Banner component
├── carsection.js               # Car listing component
├── option.js                   # Option selector
├── Reuseablecards.js          # Card template
├── videosection.js             # Video section
├── admin/                      # Admin-specific components
├── auth/                       # Authentication components
├── chat/                       # Chat feature components
├── employee/                   # Employee components
├── footer/                     # Footer component
├── navbar/                     # Navigation bar
└── WhatsApp/                   # WhatsApp integration
```

### 3. **src/app/constant/** - Dynamic Content Injection

**This is the key to dynamic content management.** Static data files that feed content to components:

```
constant/
└── landingpage.text.js         # Landing page content
```

**Example Structure:**
```javascript
// landingpage.text.js
const Landingpage = {
  Services: [
    { id: "01", name: "Engine Repair", img: "/image/labour1.png" },
    { id: "02", name: "Brake Repair", img: "/image/labour2.png" },
    // ... more services
  ],
  Testimonials: [ /* ... */ ],
  Features: [ /* ... */ ],
  PricingPlans: [ /* ... */ ],
  // ... other data
};
export default Landingpage;
```

**How it works:**
1. Data is defined as JavaScript objects
2. Components import these data files
3. `.map()` loops render dynamic content
4. To update content: edit the data file, no component changes needed

**Advantages:**
- ✅ Non-technical users can update content
- ✅ Centralized content management
- ✅ Easy to version control
- ✅ No database queries for static content
- ✅ Instant updates on rebuild

### 4. **src/config/** - Application Configuration

```
config/
├── routes.ts              # Route path constants
├── constants.ts           # App-wide constants
├── color-presets.ts       # Theme colors
├── enums.ts              # TypeScript enums
├── messages.ts           # Error/success messages
└── site.config.tsx       # Site-wide settings
```

**Example - routes.ts:**
```typescript
export const routes = {
  eCommerce: {
    dashboard: "/ecommerce",
    products: "/ecommerce/products",
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
  },
  admin: { /* ... */ },
  support: { /* ... */ },
  // ... more routes
};
```

### 5. **src/store/** - Redux State Management

```
store/
├── store.js              # Redux store configuration
└── slices/
    └── employeeSlice.js  # Employee reducer slice
```

**store.js:**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
```

### 6. **src/types/** - TypeScript Types

```
types/
├── auth.ts               # Authentication types
├── hr-recruiting/        # HR/recruitment types
├── index.ts             # Exported types
└── declarations.d.ts    # Global type declarations
```

### 7. **src/hooks/** - Custom React Hooks

```
hooks/
├── use-is-mounted.ts     # Check if component is mounted
├── use-media.ts          # Responsive design hook
└── use-window-scroll.ts  # Track scroll position
```

### 8. **src/layouts/** - Layout Components

```
layouts/
├── hamburger-button.tsx
├── header-menu-right.tsx
├── layout.tsx
├── messages-dropdown.tsx
├── notification-dropdown.tsx
├── profile-menu.tsx
├── sticky-header.tsx
└── hydrogen/             # Hydrogen theme layouts
```

### 9. **src/utils/** - Utility Functions

```
utils/
├── add-spaces-to-camel-case.tsx   # String utilities
├── class-names.ts                 # CSS class merging
├── hex-to-rgb.ts                  # Color conversion
└── onu/                           # Additional utilities
```

### 10. **src/components/** - Reusable UI Components

```
components/
├── modal.tsx             # Modal component
├── next-progress.tsx     # Page progress bar
├── theme-provider.tsx    # Theme context provider
├── icons/               # Icon components
├── search/              # Search components
└── ui/                  # Basic UI components
```

### 11. **public/** - Static Assets

```
public/
├── carlogo/             # Car logo images
├── gallery/             # Gallery images
├── image/               # General images
├── rentcar/             # Rental car images
├── user/                # User avatars
├── video/               # Video files
└── worker/              # Worker images
```

---

## Dynamic Content Injection System

### How Content Updates Work

The application uses **data files** as the source of truth for dynamic content. This pattern allows:

1. **Content creators** to update information without coding
2. **Developers** to focus on component logic
3. **Easy A/B testing** by switching data objects
4. **Version control** for content changes

### Creating Data Files

**Location:** `src/app/constant/`

**Naming Convention:** `[feature].text.js` or `[feature].data.js`

**Example Template:**

```javascript
// src/app/constant/services.text.js
const ServicesData = {
  header: {
    title: "Our Services",
    subtitle: "Professional car services at affordable prices",
  },
  
  services: [
    {
      id: "1",
      name: "Engine Repair",
      description: "Expert engine repair and maintenance",
      icon: "engine-icon",
      price: "$150 - $500",
    },
    {
      id: "2",
      name: "Oil Change",
      description: "Quick and efficient oil changes",
      icon: "oil-icon",
      price: "$50 - $100",
    },
    // ... more services
  ],
  
  testimonials: [
    {
      id: "1",
      author: "John Doe",
      text: "Great service!",
      rating: 5,
    },
    // ... more testimonials
  ],
};

export default ServicesData;
```

### Using Data Files in Components

**Pattern: Map over data arrays**

```javascript
// src/app/(routes)/services/page.js
import ServicesData from '@/app/constant/services.text';

export default function ServicesPage() {
  return (
    <div>
      <h1>{ServicesData.header.title}</h1>
      
      <div className="grid grid-cols-3 gap-4">
        {ServicesData.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      
      <div className="testimonials">
        {ServicesData.testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </div>
  );
}
```

### Updating Content

To update any content:

1. **Locate** the data file in `src/app/constant/`
2. **Edit** the JavaScript object
3. **Save** the file
4. **Content updates** automatically on next build/deployment

No component changes needed! ✅

---

## Routing Architecture

### Next.js App Router (not Pages Router)

The project uses **App Router** (new), not Pages Router (old).

### Routing Rules

| Path | URL | Route Group Purpose |
|------|-----|-------------------|
| `(routes)/homepage/page.js` | `/homepage` | Public routes |
| `(routes)/auth/login/page.js` | `/auth/login` | Authentication |
| `(admin-routes)/admin-chat/page.js` | `/admin-chat` | Admin protected routes |
| `(admin-routes)/user-management/page.js` | `/user-management` | User management |

### Route Group Anatomy

```
(admin-routes)/                     # Folder in parentheses
├── admin-chat/
│   ├── page.tsx                   # Renders at /admin-chat
│   └── layout.tsx                 # Layout for admin-chat
├── car-list/
│   ├── page.tsx                   # Renders at /car-list
│   ├── [id]/
│   │   └── page.tsx               # Dynamic route: /car-list/[id]
│   └── edit/
│       └── [id]/
│           └── page.tsx           # Nested: /car-list/edit/[id]
└── layout.tsx                     # Shared admin layout
```

### File-Based Routing

- `page.tsx` = Route entry point
- `layout.tsx` = Nested layout wrapper
- `loading.tsx` = Loading state (Suspense boundary)
- `error.tsx` = Error boundary
- `not-found.tsx` = 404 page

---

## State Management

### State Management (Static Site)

For this static website, state management is minimal. Use React hooks instead:

**For component-level state:**
```javascript
import { useState } from 'react';

export default function InteractiveComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return <div>{/* component JSX */}</div>;
}
```

**For shared state across components:**
```javascript
// Use React Context API
import { createContext, useContext } from 'react';

const MyContext = createContext();

export function Provider({ children }) {
  const [state, setState] = useState({});
  return <MyContext.Provider value={{ state, setState }}>{children}</MyContext.Provider>;
}

export function useMyState() {
  return useContext(MyContext);
}
```

---

## Configuration System

### routes.ts - Central Route Definitions

```typescript
// src/config/routes.ts
export const routes = {
  admin: {
    dashboard: "/admin",
    users: "/admin/users",
    userDetails: (id: string) => `/admin/users/${id}`,
  },
  public: {
    homepage: "/",
    about: "/about",
    contact: "/contactus",
  },
};

// Usage in components:
<Link href={routes.admin.dashboard}>Dashboard</Link>
<Link href={routes.admin.userDetails("123")}>User 123</Link>
```

### constants.ts - App Constants

```typescript
// src/config/constants.ts
export const CURRENCY_CODE = "USD";
export const LOCALE = "en";
export const CURRENCY_OPTIONS = {
  formation: "en-US",
  fractions: 2,
};

export const ROW_PER_PAGE_OPTIONS = [
  { value: 5, name: "5" },
  { value: 10, name: "10" },
  { value: 15, name: "15" },
  { value: 20, name: "20" },
];
```

### site.config.tsx - Site-Wide Settings

```typescript
// src/config/site.config.tsx
export const siteConfig = {
  siteName: "Auto-Car",
  siteDescription: "AI Powered Car Rental & Service Platform",
  siteUrl: "https://autocar.com",
  contactEmail: "info@autocar.com",
  // ... more settings
};
```

### color-presets.ts - Theme Colors

```typescript
// src/config/color-presets.ts
export const colorPresets = {
  primary: "#3B82F6",
  secondary: "#10B981",
  danger: "#EF4444",
  warning: "#F59E0B",
  info: "#0EA5E9",
  // ... more colors
};
```

---

## Component Architecture

### Component Hierarchy

```
RootLayout (src/app/layout.tsx)
├── ReduxProvider
│   ├── Toaster (notifications)
│   └── Children
└── WhatsAppButton
```

### Component Organization

**Global Components:** `src/app/componet/`
- Used across multiple routes
- Example: Navbar, Footer, Appointment form

**Page Components:** `src/app/(routes)/[page]/page.js`
- Specific to a page/route
- Example: Homepage, Services page

**UI Components:** `src/components/`
- Reusable base components
- Example: Modal, Button, Input

### Component Naming Convention

```
CamelCase for React Components:
- homepage/page.jsx
- Navbar.jsx
- UserCard.jsx

kebab-case for folders/routes:
- src/app/(routes)/homepage/
- src/app/(routes)/car-booking-info/
- src/app/(admin-routes)/user-management/
```

---

## Provider Pattern

### Root Layout Providers

**File:** `src/app/layout.tsx`

```typescript
import ReduxProvider from "./providers/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Toaster position="top-right" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
```

### ReduxProvider

**File:** `src/app/providers/ReduxProvider.tsx`

```typescript
'use client';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```

**Key Points:**
- `'use client'` enables Redux context
- Wraps entire app to provide store
- All child components can use Redux hooks

---

## Next.js App Router Features

### Key Advantages

1. **Server Components by Default**
   - Components are server-side unless marked `'use client'`
   - Better performance and security

2. **Layouts**
   - `layout.tsx` wraps child routes
   - Preserved across navigation
   - Reduces re-renders

3. **Route Groups**
   - `(groupName)` folders don't affect URL
   - Organize routes logically

4. **Dynamic Routes**
   - `[param]` creates dynamic segments
   - Access via `useParams()` hook

5. **Parallel Routes**
   - `@slot` folders for complex layouts
   - Multiple independent route segments

### Server Components (Default)

```typescript
// src/app/(routes)/about/page.tsx
// This is a Server Component by default
import ServiceData from '@/app/constant/services.text';

export default async function AboutPage() {
  // Can use async/await
  // Can access databases directly
  const services = ServiceData.services;
  
  return <div>{/* render */}</div>;
}
```

### Client Components

```typescript
// src/app/(routes)/appointment/page.tsx
'use client';  // Must be added for client features
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function AppointmentPage() {
  const [form, setForm] = useState({});
  const employee = useSelector((state) => state.employee);
  
  return <form>{/* render */}</form>;
}
```

---

## React to Next.js Conversion Guide

### Step-by-Step Conversion Process

#### Phase 1: Project Setup

**Step 1.1: Create Next.js Project Structure**

```bash
# If starting fresh:
npx create-next-app@latest auto-car --typescript

# Or migrate existing React project:
# Create app/ directory structure
# Keep src/ structure mostly the same
```

**Step 1.2: Install Dependencies**

```bash
npm install next@latest react@latest react-dom@latest
npm install @reduxjs/toolkit react-redux
npm install @tanstack/react-query axios
npm install -D tailwindcss postcss autoprefixer
```

**Step 1.3: Create Configuration Files**

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration

---

#### Phase 2: Directory Structure Migration

**Step 2.1: Move Files to Next.js Structure**

```bash
# Old React Structure       # New Next.js Structure
src/components/     →       src/components/
src/pages/          →       src/app/(routes)/
src/admin/          →       src/app/(admin-routes)/
src/styles/         →       src/app/globals.css
src/config/         →       src/config/
src/store/          →       src/store/
src/types/          →       src/types/
public/             →       public/
```

**Step 2.2: Create Route Structure**

```bash
# Create route groups
mkdir -p src/app/(routes)
mkdir -p src/app/(admin-routes)

# Move pages as page.tsx files
src/app/(routes)/homepage/page.tsx
src/app/(routes)/about/page.tsx
src/app/(routes)/services/page.tsx
src/app/(admin-routes)/admin-chat/page.tsx
src/app/(admin-routes)/user-management/page.tsx
```

**Step 2.3: Create Data Files Directory**

```bash
mkdir -p src/app/constant

# Create data files
src/app/constant/landingpage.text.js
src/app/constant/services.text.js
src/app/constant/employees.text.js
src/app/constant/testimonials.text.js
```

---

#### Phase 3: Core Setup Files

**Step 3.1: Create Root Layout**

**File:** `src/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto-Car",
  description: "AI Powered Car Rental & Service Platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Toaster position="top-right" />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
```

**Step 3.2: Create Redux Provider**

**File:** `src/app/providers/ReduxProvider.tsx`

```typescript
'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
```

**Step 3.3: Setup Redux Store**

**File:** `src/store/store.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    // Add more slices as needed
  },
});

export default store;
```

**Step 3.4: Create First Slice**

**File:** `src/store/slices/employeeSlice.js`

```javascript
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    list: [],
    selected: null,
    loading: false,
  },
  reducers: {
    setEmployees: (state, action) => {
      state.list = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setEmployees, setSelected, setLoading } = employeeSlice.actions;
export default employeeSlice.reducer;
```

---

#### Phase 4: Configuration Files

**Step 4.1: Routes Configuration**

**File:** `src/config/routes.ts`

```typescript
export const routes = {
  public: {
    homepage: "/",
    about: "/about",
    services: "/services",
    contact: "/contactus",
    appointment: "/appointment",
    carRent: "/car-rent",
  },
  admin: {
    dashboard: "/admin",
    users: "/user-management",
    userDetails: (id: string) => `/user-management/${id}`,
    appointments: "/appointment-management",
    chat: "/admin-chat",
    cars: "/car-list",
  },
  auth: {
    login: "/login",
    otp: "/otp",
  },
};
```

**Step 4.2: Constants Configuration**

**File:** `src/config/constants.ts`

```typescript
export const CART_KEY = "autocar-cart";
export const CURRENCY_CODE = "USD";
export const LOCALE = "en";

export const ROW_PER_PAGE_OPTIONS = [
  { value: 5, name: "5" },
  { value: 10, name: "10" },
  { value: 15, name: "15" },
  { value: 20, name: "20" },
];
```

---

#### Phase 5: Dynamic Content Files (Data Files)

**Step 5.1: Migrate Static Content to Data Files**

**File:** `src/app/constant/landingpage.text.js`

```javascript
const LandingPageData = {
  hero: {
    title: "Your Trusted Car Rental & Service Partner",
    subtitle: "Premium car rental and maintenance services",
    cta: "Book Now",
  },
  
  services: [
    {
      id: "01",
      name: "Engine Repair",
      description: "Expert engine diagnostics and repair",
      img: "/image/labour1.png",
      icon: "engine",
    },
    {
      id: "02",
      name: "Brake Repair",
      description: "Safe braking system repair",
      img: "/image/labour2.png",
      icon: "brake",
    },
    // ... more services
  ],
  
  features: [
    {
      id: 1,
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: "support",
    },
    // ... more features
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Car Owner",
      text: "Excellent service quality and professional team",
      rating: 5,
      avatar: "/user/user1.jpg",
    },
    // ... more testimonials
  ],
  
  pricingPlans: [
    {
      id: 1,
      name: "Basic",
      price: "5000",
      features: ["Oil Change", "Basic Inspection"],
    },
    // ... more plans
  ],
};

export default LandingPageData;
```

**File:** `src/app/constant/services.text.js`

```javascript
const ServicesData = {
  mainServices: [
    { id: 1, name: "Car Rental", description: "Affordable rental rates" },
    { id: 2, name: "Maintenance", description: "Regular maintenance plans" },
    { id: 3, name: "Repair", description: "Expert repair services" },
    { id: 4, name: "Customization", description: "Vehicle customization" },
  ],
  
  serviceDetails: {
    rental: {
      title: "Car Rental Services",
      description: "Choose from our fleet of premium vehicles",
      rates: [
        { duration: "Daily", price: "3000" },
        { duration: "Weekly", price: "18000" },
        { duration: "Monthly", price: "60000" },
      ],
    },
    maintenance: {
      title: "Maintenance Services",
      description: "Keep your car in top condition",
      packages: [
        { name: "Basic", price: "2000" },
        { name: "Standard", price: "4000" },
        { name: "Premium", price: "7000" },
      ],
    },
  },
};

export default ServicesData;
```

---

#### Phase 6: Component Migration

**Step 6.1: Convert React Component to Next.js**

**Old React Component:**
```jsx
// src/pages/About.jsx
import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

export default function About() {
  const [selected, setSelected] = useState(null);
  
  return (
    <div>
      <h1>About Our Services</h1>
      <div className="grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
```

**New Next.js Component:**
```typescript
// src/app/(routes)/about/page.tsx
'use client';
import { useState } from 'react';
import ServiceCard from '@/app/componet/ServiceCard';
import ServicesData from '@/app/constant/services.text';

export default function AboutPage() {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <div>
      <h1>About Our Services</h1>
      <div className="grid grid-cols-3 gap-4">
        {ServicesData.mainServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
```

**Step 6.2: Create Reusable Page Components**

**File:** `src/app/pages/services/ServicePage.tsx`

```typescript
import ServicesData from '@/app/constant/services.text';
import ServiceCard from '@/app/componet/ServiceCard';

export default function ServicePage() {
  return (
    <div className="services-container">
      <h2>{ServicesData.mainServices[0].name}</h2>
      <p>{ServicesData.mainServices[0].description}</p>
      
      <div className="service-grid">
        {ServicesData.mainServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
```

---

#### Phase 7: Pages Migration

**Step 7.1: Create Route Pages**

**File:** `src/app/(routes)/homepage/page.tsx`

```typescript
import LandingPageData from '@/app/constant/landingpage.text';
import ServiceCard from '@/app/componet/ServiceCard';
import Navbar from '@/app/componet/navbar';
import Footer from '@/app/componet/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <section className="hero">
        <h1>{LandingPageData.hero.title}</h1>
        <p>{LandingPageData.hero.subtitle}</p>
      </section>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="grid grid-cols-4 gap-4">
          {LandingPageData.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        {LandingPageData.testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.text}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </section>
      
      <Footer />
    </>
  );
}
```

**File:** `src/app/(routes)/services/page.tsx`

```typescript
'use client';
import { useState } from 'react';
import ServicesData from '@/app/constant/services.text';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  
  return (
    <div className="container">
      <h1>Our Services</h1>
      
      <div className="services-list">
        {ServicesData.mainServices.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={selectedService === service.id ? 'active' : ''}
          >
            {service.name}
          </button>
        ))}
      </div>
      
      {selectedService && (
        <div className="service-detail">
          {/* Render service details based on selection */}
        </div>
      )}
    </div>
  );
}
```

**File:** `src/app/(admin-routes)/user-management/page.tsx`

```typescript
'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserTable from '@/app/componet/admin/UserTable';

export default function UserManagementPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.employee.list);
  
  useEffect(() => {
    // Fetch users from API or Redux
  }, [dispatch]);
  
  return (
    <div className="admin-container">
      <h1>User Management</h1>
      <UserTable users={users} />
    </div>
  );
}
```

---

#### Phase 8: API Integration (Optional - Future)

**Skip this phase for static website. API integration can be added later.**

**When/if needed in the future - Setup API Client**

**File:** `src/utils/api.ts`

```typescript
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

**Step 8.2: API Service Functions**

**File:** `src/utils/services/employeeService.ts`

```typescript
import apiClient from '@/utils/api';

export const employeeService = {
  getAll: async () => {
    const response = await apiClient.get('/employees');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await apiClient.get(`/employees/${id}`);
    return response.data;
  },
  
  create: async (data) => {
    const response = await apiClient.post('/employees', data);
    return response.data;
  },
  
  update: async (id: string, data) => {
    const response = await apiClient.put(`/employees/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await apiClient.delete(`/employees/${id}`);
    return response.data;
  },
};
```

---

#### Phase 9: Environment Configuration (Minimal)

**For a static website, minimal environment configuration is needed.**

**Step 9.1: Optional Environment File**

**File:** `.env.local` (optional)

```bash
# Optional: For future use
# NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Step 9.2: Site Configuration**

```typescript
// src/config/site.config.tsx
export const siteConfig = {
  siteName: "Auto-Car",
  siteDescription: "Professional Car Rental & Service Platform",
  // Add other static config as needed
};
```

---

#### Phase 10: Testing & Deployment

**Step 10.1: Build & Test Locally**

```bash
npm run build
npm run start
```

**Step 10.2: Deploy to Vercel**

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

No environment variables needed for a static site.

---

## Best Practices

### 1. File Organization

✅ **DO:**
```
src/
├── app/(routes)/[feature]/
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
├── app/constant/[feature].text.js
├── components/
├── config/
└── store/
```

❌ **DON'T:**
```
src/
├── pages/ (old pages router)
├── api/ (API routes)
├── utils/api.ts
└── data.js (loose files)
```

### 2. Component Composition

✅ **DO:**
```typescript
// Separate concerns
export function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}

export default function UserList() {
  return <UserCard user={user} />;
}
```

❌ **DON'T:**
```typescript
// Mixed concerns
export default function UserList() {
  // 500+ lines of logic
  // Multiple responsibilities
}
```

### 3. Data Management

✅ **DO:**
```typescript
// Data files for static content
const CompanyData = {
  name: "Auto-Car",
  team: [ /* ... */ ],
};

// Redux for state
const userSlice = createSlice({ /* ... */ });

// React Query for server state
const { data } = useQuery(['users'], fetchUsers);
```

❌ **DON'T:**
```typescript
// Hardcoding data in components
<div>"Auto-Car"</div>

// Mixing static and dynamic data
const data = { static: "value", dynamic: getFromDB() };
```

### 4. Routing

✅ **DO:**
```typescript
// Use centralized routes
import { routes } from '@/config/routes';
<Link href={routes.admin.dashboard}>Dashboard</Link>

// Use route groups
(admin-routes)/
(customer-routes)/
```

❌ **DON'T:**
```typescript
// Hardcode URLs
<Link href="/admin/dashboard">Dashboard</Link>

// Inconsistent route naming
/user-management
/users/list
/admin/users
```

### 5. State Management

✅ **DO:**
```typescript
// Redux for app-wide state
const theme = useSelector((state) => state.theme);

// React hooks for local state
const [isOpen, setIsOpen] = useState(false);

// React Query for server state
const { data: users } = useQuery(['users'], fetchUsers);
```

❌ **DON'T:**
```typescript
// Props drilling
<Component prop1 prop2 prop3 prop4={value} />

// All state in Redux
const [inputValue, setInputValue] = useState(""); // Use Redux?

// All state in React Query
const { data: isModalOpen } = useQuery([]); // Use useState instead
```

### 6. TypeScript Usage

✅ **DO:**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function UserCard({ user }: { user: User }): JSX.Element {
  return <div>{user.name}</div>;
}
```

❌ **DON'T:**
```typescript
// No types
function UserCard({ user }) {
  return <div>{user.name}</div>;
}

// Any types
function getData(data: any): any {
  return data;
}
```

### 7. Performance

✅ **DO:**
```typescript
// Use next/image
<Image
  src={image}
  alt="Description"
  width={300}
  height={200}
/>

// Code splitting with dynamic imports
const HeavyComponent = dynamic(() => import('@/components/Heavy'));

// Memoization where needed
export const MemoizedComponent = React.memo(Component);
```

❌ **DON'T:**
```typescript
// Regular img tags
<img src={image} />

// Import everything at top
import * from '@/components/all';

// Unnecessary memoization
React.memo(SimpleComponent);
```

### 8. SEO

✅ **DO:**
```typescript
// Set metadata
export const metadata: Metadata = {
  title: "Services - Auto-Car",
  description: "Professional car services",
  openGraph: { /* ... */ },
};

// Use semantic HTML
<h1>Services</h1>
<article>{content}</article>
```

❌ **DON'T:**
```typescript
// No metadata
// SEO left to client-side

// Non-semantic HTML
<div className="h1">Services</div>
```

### 9. Error Handling

✅ **DO:**
```typescript
// Error boundaries
export const ErrorBoundary = ({ error }: { error: Error }) => (
  <div>Something went wrong: {error.message}</div>
);

// Try-catch in API calls
try {
  const data = await fetchData();
} catch (error) {
  console.error(error);
  // Handle error gracefully
}
```

❌ **DON'T:**
```typescript
// Silent failures
const data = await fetchData();
// No error handling

// Global error logging
console.error(error);
```

### 10. Naming Conventions

✅ **DO:**
```
Files:
- page.tsx          (routes)
- layout.tsx        (layouts)
- UserCard.tsx      (components)
- userService.ts    (services)
- user.ts           (types)

Routes:
- /user-management  (kebab-case)
- /car-booking-info (kebab-case)

Components:
- UserCard          (PascalCase)
- useUserList       (useHook)
```

❌ **DON'T:**
```
Files:
- User.tsx
- user-card.tsx (inconsistent)
- userCardComponent.tsx (too verbose)

Routes:
- /UserManagement (wrong case)
- /user_management (snake_case)

Components:
- user_card (wrong case)
- GetUser (wrong convention)
```

---

## Common Patterns

### Pattern 1: Loading State

```typescript
// src/app/(routes)/products/loading.tsx
export default function Loading() {
  return <div>Loading products...</div>;
}
```

### Pattern 2: Error Handling

```typescript
// src/app/(routes)/products/error.tsx
'use client';
export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Error loading products</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### Pattern 3: Dynamic Routes

```typescript
// src/app/(routes)/products/[id]/page.tsx
export default function ProductPage({ params }: {
  params: { id: string }
}) {
  return <div>Product {params.id}</div>;
}
```

### Pattern 4: Search Params

```typescript
// Access query params
export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; sort: string }
}) {
  return <div>Search: {searchParams.q}</div>;
}
```



---

## Troubleshooting Guide

### Issue: Content not updating after data file change

**Solution:** 
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
npm run dev
```

### Issue: Routes not rendering

**Solution:**
- Ensure file is named `page.tsx` (not `index.tsx`)
- Folder structure matches URL path
- Verify route group syntax: `(name)`

### Issue: Styling not applied

**Solution:**
- Check Tailwind CSS is configured
- Verify `globals.css` is imported in layout
- Use `className` not `class` in JSX

---

## Summary Checklist

When converting a React app to Next.js with this architecture:

- [ ] Create `src/app/` directory structure
- [ ] Setup route groups: `(routes)`
- [ ] Create `src/app/layout.tsx` with providers
- [ ] Create data files in `src/app/constant/`
- [ ] Configure routes in `src/config/routes.ts`
- [ ] Convert components to use data files
- [ ] Test locally and build
- [ ] Deploy to Vercel

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Query Docs](https://tanstack.com/query/latest)

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Framework:** Next.js 16.1.1 with App Router  
**Language:** TypeScript + JavaScript  

For questions or updates to this architecture, consult your development team.
