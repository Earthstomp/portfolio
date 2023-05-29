import Image from 'next/image'
import Link from "next/link";

export const metadata = {
  title: 'About | Keith',
}

export default function Home() {
  return (
    <>
      <div className="sm:w-full md:w-5/6 lg:w-2/3">
        <div className="sm:text-4xl md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl font-bold">
          A developer, minimalist, tennis player & tech enthusiast.
        </div>
        <div className="pt-8 sm:text-md md:text-lg lg:text-xl">
          I'm Keith, a Year 3 Undergraduate studying at the National University of Singapore, majoring in Information Systems. I am currently interning at Bites.io on the NUS Overseas College (NOC) Israel exchange programme.
          <br /><br />
          I am enthusiastic about growing my skills in technology and I have interned at three start-ups. I am dedicated to continuous learning and have been recognized as a finalist in over four competitions. Learn more about my experiences by visiting my <Link href="https://tinyurl.com/linkedin-keith" className="hover-cyan underline cyan-500">Linkedin</Link> profile.
          <br /><br />
          In my spare time, I hunt for good food and travel around the world. I also work as a a professional tennis coach and hitting partner.
        </div>
      </div>

    </>
  )
}



