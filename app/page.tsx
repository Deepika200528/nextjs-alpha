import { Metadata } from 'next';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 md:h-52 shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is an example for the{' '}
            <a
              href="https://nextjs.org/learn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Next.js Learn Course
            </a>{' '}
            brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-3 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 md:text-base"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-lg bg-gray-100 p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-mobile.png"
            alt="Hero"
            width={560}
            height={620}
            className="block md:hidden rounded-lg object-cover"
            priority
          />
          <Image
            src="/hero-desktop.png"
            alt="Hero"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}