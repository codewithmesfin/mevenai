// app/(public)/page.js

import { getMeta } from '../lib/seo';

export const metadata = getMeta({
  title: 'Welcome to Our Site',
  description: 'Explore our services and join today!',
});

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Site</h1>
      <p>This is a public page. Log in to access more features.</p>
    </div>
  );
}
