import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";
import { projectDetailData } from './data/data';
import ProjectCard from './components/ProjectCard';

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

        <section className="grid grid-cols-12">
          {/* <div className="col-span-2 rounded mr-8 bg-gradient-to-b from-cyan-700"> 
        </div> */}
          <div className="col-span-12">
            <div className="sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              I'm Keith, a passionate developer and aspiring entrepreneur
            </div>
            <div className="pt-8 sm:text-md md:text-lg lg:text-xl">
              As a dedicated software engineer, I harness my skills and expertise to craft efficient and elegant solutions that empower businesses and make a positive impact in the digital realm.
            </div>
            <div className="pt-4">
              <Link className="sm:text-sm md:text-md lg:text-lg hover-cyan" href="/about">More about me</Link>
            </div>
            <div>
              <div className="pt-20 font-bold sm:text-lg md:text-xl lg:text-2xl">
                Some of my recent work
              </div>
              <div className="pt-4 gap-8 md:gap-12 xl:gap-20 grid grid-cols-1 sm:grid-cols-2">
                {projectDetailData.slice(0, MAX_PROJECTS).map(project =>
                  <ProjectCard project={project} />
                )}
              </div>
              <div className="pt-4">
                <Link className="sm:text-sm md:text-md lg:text-lg hover-cyan" href="/projects">
                  View All Projects
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

