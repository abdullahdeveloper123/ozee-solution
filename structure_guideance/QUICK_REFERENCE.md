# Auto-Car Project - Quick Reference Guide

## Quick Navigation

### 📁 Directory Quick Map

```
src/app/
├── (routes)/              � All website pages
├── constant/              📝 Data files (dynamic content)
├── componet/              🧩 Reusable global components
├── layout.tsx             🏠 Root wrapper
└── page.tsx               📄 Home page

src/
├── config/                ⚙️ Routes, constants, settings
├── types/                 📋 TypeScript definitions
├── utils/                 🔧 Helper functions
├── hooks/                 🪝 Custom React hooks
└── components/            🎨 Base UI components
```

---

## 🚀 Common Tasks

### Add a New Page

```bash
# 1. Create folder
mkdir -p src/app/\(routes\)/new-page

# 2. Create page.tsx
touch src/app/\(routes\)/new-page/page.tsx

# 3. Add content with data file
echo "'use client';
import PageData from '@/app/constant/new-page.text';

export default function NewPage() {
  return (
    <div>
      <h1>{PageData.title}</h1>
      {PageData.items.map(item => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}" > src/app/\(routes\)/new-page/page.tsx
```

### Create Data File

```bash
# Create in src/app/constant/
touch src/app/constant/feature.text.js

# Structure:
const FeatureData = {
  items: [ { id: 1, name: "Item" } ],
  settings: { /* ... */ }
};
export default FeatureData;
```

### Use Data in Component

```typescript
import FeatureData from '@/app/constant/feature.text';

export default function Feature() {
  return (
    <div>
      {FeatureData.items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

## 📊 URL Routing Reference

| Path | URL | Type |
|------|-----|------|
| `(routes)/homepage/page.tsx` | `/homepage` | Public |
| `(routes)/services/page.tsx` | `/services` | Public |
| `(routes)/about/page.tsx` | `/about` | Public |
| `(routes)/contact/page.tsx` | `/contactus` | Public |
| `(routes)/blog/[id]/page.tsx` | `/blog/123` | Dynamic |

---

## 🔧 Configuration

### Add Route

```typescript
// src/config/routes.ts
export const routes = {
  myNewRoute: "/my-new-route",
  myNewRouteDetail: (id: string) => `/my-new-route/${id}`,
};

// Use:
<Link href={routes.myNewRoute}>Go</Link>
```

### Add Constant

```typescript
// src/config/constants.ts
export const MY_CONSTANT = "value";

// Use:
import { MY_CONSTANT } from '@/config/constants';
```

---

## 🎨 Component Structure

### Basic Component

```typescript
// src/components/MyComponent.tsx
interface Props {
  title: string;
  count: number;
}

export default function MyComponent({ title, count }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{count}</p>
    </div>
  );
}
```

### With Hooks

```typescript
'use client';
import { useState, useEffect } from 'react';

export default function Interactive() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

---

## 📝 Data File Template

```javascript
// src/app/constant/myfeature.text.js
const MyFeatureData = {
  // Static data that doesn't change often
  
  header: {
    title: "Feature Title",
    subtitle: "Feature Description",
  },
  
  items: [
    {
      id: "1",
      name: "Item 1",
      description: "Description",
      image: "/image/item1.png",
    },
    {
      id: "2",
      name: "Item 2",
      description: "Description",
      image: "/image/item2.png",
    },
  ],
  
  settings: {
    showCount: true,
    itemsPerPage: 10,
  },
  
  testimonials: [
    {
      id: "1",
      name: "Person Name",
      text: "Quote",
      rating: 5,
    },
  ],
  
  faq: [
    {
      question: "Question?",
      answer: "Answer",
    },
  ],
};

export default MyFeatureData;
```

---

## 🔗 Linking

```typescript
// Always use route config
import { routes } from '@/config/routes';
import Link from 'next/link';

// ✅ Correct
<Link href={routes.admin.dashboard}>Dashboard</Link>

// ❌ Avoid
<Link href="/admin/dashboard">Dashboard</Link>
<a href="/admin/dashboard">Dashboard</a>
```

---

## 🎯 State Management Decision Tree

```
Need to store state?
│
├─ Component only? → useState
│
├─ Multi-component? → useContext or Redux
│  │
│  ├─ Global app state? → Redux (auth, user, settings)
│  └─ Local feature state? → Context or useState
│
├─ Server data?
│  │
│  ├─ Fetch once per page? → React Query / useEffect
│  ├─ Real-time updates? → Socket.io + Redux
│  └─ Form data? → Form library (react-hook-form)
│
└─ Static content? → Data files (constant/)
```

---

## 🔄 Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Update Local/Component State
    ↓
Component Re-renders
    ↓
UI Updates
```

---

## 🐛 Debugging

### Check if Component is Client/Server

```typescript
// At top of file:
console.log('Environment:', typeof window); // Server: undefined, Client: 'object'
```

### Check Route Issue

```bash
# Verify folder structure exists
ls -la src/app/\(routes\)/mypage/

# Check page.tsx exists
cat src/app/\(routes\)/mypage/page.tsx

# Build and check errors
npm run build
```

---

## 📋 Checklist - Adding New Feature

- [ ] Create folder in (routes)/
- [ ] Create `page.tsx` file
- [ ] Create data file if needed: `src/app/constant/feature.text.js`
- [ ] Add routes to `src/config/routes.ts`
- [ ] Create components in `src/app/componet/` if reusable
- [ ] Add TypeScript types in `src/types/` if needed
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Commit changes

---

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start               # Start production server

# Linting
npm run lint            # Run ESLint

# Testing
npm test                # Run tests (if configured)
```

---

## 📚 File Templates

### Page Template
```typescript
// src/app/(routes)/page-name/page.tsx
import DataFile from '@/app/constant/page-name.text';

export default function PageName() {
  return (
    <div>
      <h1>{DataFile.header.title}</h1>
      <p>{DataFile.header.subtitle}</p>
      
      <div className="grid grid-cols-3 gap-4">
        {DataFile.items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Component Template
```typescript
// src/app/componet/FeatureComponent.tsx
interface Props {
  title: string;
  items: any[];
}

export default function FeatureComponent({ title, items }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

---

## 🎓 Learning Path

1. **Understand Structure** - Read PROJECT_ARCHITECTURE.md
2. **Study Example Routes** - Look at existing pages in `(routes)/`
3. **Learn Data Files** - Check `src/app/constant/`
4. **Master Components** - Review `src/app/componet/`
5. **Redux Deep Dive** - Explore `src/store/`
6. **API Integration** - Study axios setup and services
7. **Deployment** - Setup Vercel integration

---

## 🆘 Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Page not rendering | `page.tsx` not in folder | Rename file to `page.tsx` |
| Data not updating | Cache not cleared | Run `rm -rf .next && npm run dev` |
| Component not found | Wrong import path | Use `@/` alias from tsconfig |
| Styling not applied | Tailwind config issue | Check `tailwind.config.ts` |
| Build fails | TypeScript error | Run `npm run build` to see errors |

---

**Version:** 1.0  
**Last Updated:** 2024  
**Use this guide alongside PROJECT_ARCHITECTURE.md for complete reference**
