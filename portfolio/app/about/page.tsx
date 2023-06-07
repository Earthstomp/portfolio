import Image from 'next/image'
import Link from "next/link";
import { AiFillThunderbolt } from "react-icons/ai"

export const metadata = {
  title: 'About | Keith',
}

export default function Home() {

  const skills = ["React", "Django", "NextJS", "NodeJS", "Java", "Python", "Solidity", "MongoDB", "SQL", "Tailwind"];

  return (

    <div>
      {/* md:text-cyan-500 lg:text-red-500 xl:text-yellow-300 2xl:text-green-500 */}
      <div className="group relative">
        <div className="text-4xl md:leading-tight md:text-5xl lg:leading-tight lg:text-6xl font-bold sm:w-full md:w-7/8 2xl:w-3/4">
          A developer, minimalist, tennis player & tech enthusiast.
        </div>
        <div className="grid xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 pt-8 sm:text-md md:text-lg lg:text-xl">
            I'm Keith, a Year 3 Undergraduate studying at the National University of Singapore, majoring in Information Systems. I am currently interning at Bites.io on the NUS Overseas College (NOC) Israel exchange programme.
            <br /><br />
            I am enthusiastic about growing my skills in technology and I have interned at three start-ups. I am dedicated to continuous learning and have been recognized as a finalist in over four competitions. Learn more about my experiences by visiting my <Link href="https://tinyurl.com/linkedin-keith" className="hover-cyan underline cyan-500">Linkedin</Link> profile.
            <br /><br />
            In my spare time, I hunt for good food and travel around the world. I also work as a a professional tennis coach and hitting partner.
          </div>
          <div className="mt-8 grid md:grid-cols-3 md:gap-12 lg:gap-20 xl:grid-cols-1">
            <div className="col-span-2 w-full h-80 relative">
              <div className="h-80 xl:h-200 -left-6 -top-6 rounded-md">
                <div className="h-full relative z-20">
                  <Image
                    className="rounded-lg object-cover grayscale-60 group-hover:grayscale-0 duration-500 "
                    src="/KeithSmall.jpg"
                    fill
                    alt="profile pic">
                  </Image>
                </div>
                <div className="inline-block absolute top-5 left-5 h-full w-full border-4 border-cyan-500 rounded-lg group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

              </div>
            </div>
            {/* thunderbolt icons non-2xl breakpoint*/}
            <div className="hidden md:inline xl:hidden">
              <ul className="grid grid-cols-2 gap-2">
                {skills.map(tech =>
                  <li className="flex items-center gap-2 sm:text-md md:text-lg lg:text-xl" key={tech}>
                    <span className="text-cyan-500 ">
                      <AiFillThunderbolt />
                    </span>
                    {tech}
                  </li>
                )}
              </ul>
            </div>

          </div>

        </div>

        <div className="md:hidden xl:inline-flex pt-12 sm:text-sm md:text-md lg:text-lg uppercase text-cyan-500 tracking-tight">
          <span className="pr-2">Skills:</span>

          <span>{skills.map(tech => <span className="px-2" key={tech}> {tech} </span>)
          }</span>

        </div>
      </div>


    </div>





  )
}



