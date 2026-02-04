Полноценный интернет-магазин кормов для кошек с fullstack стеком Next.js 16 + Express + Prisma + TypeScript.
🛠 Технологии

Frontend (Next.js 16)
├── Next.js 16.1.0 (App Router)
├── React 19.2.3
├── TypeScript 5.9.3
├── ESLint + Prettier (кодстайл)
└── Jest + RTL (тесты)

Backend (Express + Prisma + SQLite)
├── Express 5.2.1 (REST API)
├── Prisma 6.19.2 + SQLite (ORM + БД)
├── bcrypt 6.0.0 (хеширование паролей)
├── JWT (аутентификация)
├── Helmet (заголовки безопасности)
└──  CORS + Compression + RateLimit (middleware)

## Getting Started

First, run the development server:

```bash
npm run dev # (server:3000 + client:3001)
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
