# SkillLink Backend

Node.js, Express, TypeScript, Prisma, SQLite REST API for the SkillLink frontend.

## Setup

```powershell
cd backend
Copy-Item .env.example .env
npm install
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

The API listens on `http://localhost:4000`. Seed users all use password `password123`:

- `aditi@aria.example` (MANUFACTURER)
- `rajesh.kumar@skilllink.example`, `meera.joshi@skilllink.example`, `imran.sheikh@skilllink.example` (ARTISAN)
- `admin@skilllink.example` (ADMIN)

Use `Authorization: Bearer <token>` for protected endpoints. The default database is `prisma/dev.db`; change `DATABASE_URL` for another SQLite file.

## API

- `GET /health`
- `POST /api/auth/register`, `POST /api/auth/login`
- `GET /api/users/me`, `GET /api/users/:id`
- `GET /api/artisans`, `GET /api/artisans/:id`, `GET/PUT /api/profiles/me`
- `GET/POST/PATCH /api/requirements`
- `GET/POST/PATCH /api/applications`
- `GET /api/matches/:requirementId` weighted scoring: craft 40, experience 20, location 15, availability 15, rating 10
- `GET/PATCH /api/projects`, `POST /api/projects/:id/milestones`
- `GET/POST /api/messages`
- `GET/PATCH/POST /api/notifications`
- `GET/POST /api/reviews/:artisanId` and `/api/reviews`
- `GET /api/admin/stats`, `GET /api/admin/users`, `PATCH /api/admin/artisans/:id/verify`

JSON validation failures return HTTP 400. Missing or invalid JWTs return 401; role failures return 403.
