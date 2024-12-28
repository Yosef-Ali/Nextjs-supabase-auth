# Next.js + Supabase Authentication Template

This is a [Next.js](https://nextjs.org/) project with Supabase Authentication integration.

## Features

- 🔐 Email OTP Authentication
- 🌐 OAuth Providers (Google, GitHub)
- 🛡️ Protected Routes
- 🔄 Session Management
- 📱 Responsive Auth UI
- 🎨 Styled with Tailwind CSS

## Environment Variables

Create a `.env.local` file in the root directory with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Authentication Setup

1. **Supabase Configuration**
   - Create a Supabase project
   - Enable Email OTP in Authentication settings
   - Configure OAuth providers (Google, GitHub)
   - Add callback URLs: `{NEXT_PUBLIC_APP_URL}/auth/callback`

2. **OAuth Provider Setup**
   - Google: Configure in Google Cloud Console
   - GitHub: Configure in GitHub Developer Settings

## Usage

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Protected Routes

Add routes to middleware.ts matcher:
```typescript
export const config = {
  matcher: ['/protected/:path*', '/profile/:path*']
}
```

### Authentication Methods

1. **Email OTP:**
   - User enters email
   - Receives magic link
   - Redirects to callback

2. **Social Providers:**
   - Click OAuth button
   - Authorize with provider
   - Automatic redirect

## Project Structure

```
src/
├── actions/        # Server actions
├── components/     # UI components
├── context/        # Auth context
├── hooks/         # Custom hooks
├── middleware.ts  # Auth middleware
└── utils/         # Supabase clients
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
