import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";
import { projectDetailData } from './data/data';
import ProjectCard from './components/ProjectCard';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"


export const metadata = {
  title: 'Keith, Software Developer',
}

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

async function delay() {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const Home = async () => {

  const MAX_PROJECTS = 2;

  await delay();
  return (
    <>
      <div className="" >

        <section>
          <div >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
              I'm Keith, a passionate developer and aspiring entrepreneur
            </div>
            <div className="pt-8 text-md md:text-lg lg:text-xl">
              As a dedicated software engineer, I harness my skills and expertise to craft efficient and elegant solutions that empower businesses and make a positive impact in the digital realm.
            </div>
            <div className="pt-4">
              <Link className="flex items-center gap-2 sm:text-sm md:text-md lg:text-lg hover-cyan hover-translate-right" href="/about">
                More about me
                <span className="text-cyan-500 sm:text-md md:text-lg lg:text-xl">
                  <HiOutlineArrowNarrowRight />
                </span>

              </Link>
            </div>
            <div>
              <div className="pt-12 font-bold sm:text-lg md:text-xl lg:text-2xl">
                Some of my recent work
              </div>
              <div className="pt-4 gap-8 md:gap-12 2xl:gap-20 grid grid-cols-1 md:grid-cols-2">
                {projectDetailData.slice(0, MAX_PROJECTS).map(project =>
                  <ProjectCard project={project} />
                )}
              </div>
              <div className="pt-4">
                <Link className="flex items-center gap-2 sm:text-sm md:text-md lg:text-lg hover-cyan hover-translate-right" href="/projects">
                  View All Projects
                  <span className="text-cyan-500 sm:text-md md:text-lg lg:text-xl">
                    <HiOutlineArrowNarrowRight />
                  </span>

                </Link>
              </div>
            </div>



          </div>



        </section>
      </div>
    </>
  )
}

export default Home;

