```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function About() {
  const session = await unstable_getServerSession(authOptions);

  if (!session) {
    return <p>Access denied. Please log in.</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
```