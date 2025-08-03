# Secure Business Investment Platform on Solana

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

---

## Getting Started

### 1. Install Dependencies

Make sure you are inside the project folder and install the required packages:

```bash
npm install
# or
yarn install
````

**Required Dependencies:**

* **Framer Motion** (animations)

  ```bash
  npm install framer-motion
  ```
* **Lucide React** (icons)

  ```bash
  npm install lucide-react
  ```
* **Solana Wallet Adapter** (Phantom wallet integration)

  ```bash
  npm install @solana/wallet-adapter-react @solana/wallet-adapter-wallets @solana/wallet-adapter-react-ui
  ```

After installation, you should see the `node_modules` folder in your project.

---

### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the homepage.

To open a specific page (like the login page), go to:

```
http://localhost:3000/login
```

or replace `login` with any page name.

---

### 3. Project Folder Structure

Your folder structure should look like this:

![Project Folder Structure 1]<img width="225" height="669" alt="image" src="https://github.com/user-attachments/assets/9b553d4f-b842-40ca-a7a8-70c2a2706b0d" />
![Project Folder Structure 2]<img width="224" height="641" alt="image" src="https://github.com/user-attachments/assets/fff6df82-1941-46ad-999e-23e6632bd8db" />


* `pages/` → Contains all the routes (e.g., `login.tsx`, `kyc.tsx`, `dashboard.tsx`)
* `components/` → (Optional) Reusable components
* `public/` → Public assets like images and logos
* `node_modules/` → Auto-generated after installing dependencies

---

## Editing Pages

You can start editing the page by modifying `pages/index.tsx`.
The page auto-updates as you edit the file.

---

## API Routes

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on:

```
http://localhost:3000/api/hello
```

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

---

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Learn More

To learn more about Next.js:

* [Next.js Documentation](https://nextjs.org/docs)
* [Interactive Next.js Tutorial](https://nextjs.org/learn-pages-router)

Check out the [Next.js GitHub repository](https://github.com/vercel/next.js) for feedback and contributions.

---

## Deployment

The easiest way to deploy your Next.js app is via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

```

