# 💰 Freenance – Personal Finance & Budgeting App

**Freenance** is a full-stack finance and budgeting web application built with modern technologies. It helps users track income, expenses, and spending habits with powerful data visualization, form validation, and secure authentication.

> 🧩 This project serves as my **capstone portfolio project** to demonstrate my full stack development skills, code quality, testing strategy, and deployment readiness.

---

## 📌 Project Scope

- ✅ **User Authentication** (secure login & registration)
- ✅ **Transaction Management** (add/edit/delete/view income & expenses)
- ✅ **Monthly Budgeting** (categorize and view spending)
- ✅ **Data Visualization** (charts for insights over time)
- ✅ **Responsive UI** (mobile-first and accessible design)
- ✅ **Form Validation** (robust client/server-side validation)
- ✅ **Testing & Monitoring** (unit, integration, E2E, and error logging)

---

## 🧰 Tech Stack & Why It Was Chosen

| Tool                          | Purpose                    | Why It Was Used                                                                             |
| ----------------------------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| **Next.js 15 (App Router)**   | Full-stack React framework | Enables seamless UI + API integration, routing, SSR/ISR, and server actions                 |
| **TypeScript**                | Static typing              | Improves reliability and developer productivity                                             |
| **Tailwind CSS**              | Styling                    | Utility-first styling system for rapid, responsive UI development                           |
| **shadcn/ui**                 | Headless component library | Provides accessible, reusable UI primitives with consistent design                          |
| **NextAuth.js**               | Authentication             | Handles secure, session-based authentication with providers                                 |
| **Prisma**                    | ORM                        | Type-safe database queries, fast iteration, and migration handling                          |
| **PostgreSQL (Neon)**         | Relational database        | Cloud-hosted SQL DB with transactional consistency and performance                          |
| **Zod**                       | Schema validation          | Shared input/output validation for forms, APIs, and server actions                          |
| **React Hook Form**           | Form management            | Optimized form state management with minimal re-renders                                     |
| **Zustand**                   | State management           | Lightweight, scalable global state (filters, UI state, etc.)                                |
| **Chart.js**                  | Data visualization         | Simple and effective charts to show income vs. expenses                                     |
| **Framer Motion**             | Animations                 | Smooth, interactive UI transitions for a polished experience                                |
| **date-fns**                  | Date manipulation          | Reliable and readable date formatting utilities                                             |
| **TanStack Query**            | Server state syncing       | Efficient and declarative data fetching and caching                                         |
| **react-hot-toast**           | Notifications              | Lightweight toast system for user feedback                                                  |
| **Sentry**                    | Monitoring                 | Real-time error tracking and performance insight                                            |
| **Vitest**                    | Unit testing               | Fast, modern testing powered by Vite                                                        |
| **React Testing Library**     | Component testing          | Encourages testing UI from the user’s perspective                                           |
| **MSW (Mock Service Worker)** | API mocking                | Tests network requests without touching real backend                                        |
| **Playwright**                | E2E testing                | End-to-end browser testing for full user journey coverage                                   |
| **Husky**                     | Pre-commit hooks           | Enforces linting, formatting, and test coverage on every commit                             |
| **CapacitorJS**               | Mobile app support         | Allows the app to be deployed natively on iOS and Android platforms using a single codebase |

---

## 🏗️ Features

- 🔐 Auth: Google, GitHub login (extendable to email or others)
- 📊 Dashboard: Real-time charts and summaries
- ✍️ Transactions: CRUD operations with form validation
- 🧠 Budgeting: Monthly breakdown with categories
- 🪄 Animations: Seamless page and component transitions
- 🔔 Notifications: Instant feedback on actions
- 📱 Mobile-ready: Supports iOS and Android deployment via CapacitorJS
- 📈 Error Monitoring: Auto-logs issues in production
- ✅ Test Coverage: Unit, integration, and end-to-end tests
- ✅ **Mobile App Deployment** using CapacitorJS

---

## 🧪 Testing Strategy

| Type        | Tool                  | Focus                                          |
| ----------- | --------------------- | ---------------------------------------------- |
| Unit        | Vitest                | Utility functions, Zod schemas, Zustand stores |
| Component   | React Testing Library | UI behavior, form inputs                       |
| Integration | Vitest + MSW          | Server actions + API mocking                   |
| E2E         | Playwright            | Login, transaction flow, dashboard navigation  |

---

## 🚀 Deployment

- Hosted on [**Vercel**](https://vercel.com/)
- Database powered by [**Neon**](https://neon.tech/)
- Observability handled by [**Sentry**](https://sentry.io/)
- Mobile app deployment powered by [**CapacitorJS**](https://capacitorjs.com/)

---

## 📚 Learning Objectives

This project demonstrates my capabilities in:

- Full stack app architecture using modern tooling
- Creating a seamless user experience with custom components and animations
- Designing and consuming REST-like server actions and Prisma queries
- Writing reliable and maintainable code using TypeScript and testing frameworks
- Deploying across web and mobile platforms with shared code
- Using professional dev workflows (Git, Husky, error monitoring, environment separation)

---

## ✍️ Author

**Maurice Filiatreault**  
Freelance Web Developer | Full Stack Engineer  
[LinkedIn](https://www.linkedin.com/in/mauricefh) • [Portfolio](https://mauricefh.com) • [GitHub](https://github.com/mauricefh)

---

## 📌 License

This project is open source under the MIT License.
