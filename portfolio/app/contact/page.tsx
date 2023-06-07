import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact | Keith',
};

export default function Contact() {
  return (
    <>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
        Contact
      </div>
      <div className="xl:col-span-2 pt-8 sm:text-md md:text-lg lg:text-xl">
        I am currently available to collaborate on new projects to create something new.
        <br /> <br />
        Interested in chatting further? I’d love to hear from you.
      </div>
    </>

  );
}
