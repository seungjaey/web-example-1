import Link from 'next/link';

const Page = () => {
  return (
    <main>
      <ul>
        <li>
          <Link href="/demo-valid">1. demo-valid</Link>
        </li>
        <li>
          <Link href="/demo-invalid">2. demo-invalid</Link>
        </li>
        <li>
          <Link href="/demo-schema-validation">3. demo-schema-validation</Link>
        </li>
      </ul>
    </main>
  );
};

export default Page;
