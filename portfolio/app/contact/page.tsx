import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About | Keith',
};

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-50 h-50"></div>
    </div>
  );
}
