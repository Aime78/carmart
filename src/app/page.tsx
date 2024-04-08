import Link from 'next/link';
import { Button } from './shared/components/Button';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Button  >Hi</Button>
    </div>
  );
}
