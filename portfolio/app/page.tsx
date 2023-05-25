import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";
import { projectDetailData } from './data/data';
import ProjectCard from './components/ProjectCard';

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
    <main>
      <section className="grid grid-cols-12">
        <div className="col-span-2 rounded mr-8 bg-gradient-to-b from-cyan-700">  {/* to-red-500 */}
        </div>
        <div className="col-span-10">
          <div className="sm: w-full md:w-5/6 lg:w-2/3">
            <div className="sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              I'm Keith, a passionate developer and aspiring entrepreneur
            </div>
            <div className="pt-8 sm:text-md md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa corporis unde quis recusandae quaerat ad molestiae rem fugit? Eum exercitationem facere quod similique at illo soluta, excepturi ullam non.
            </div>
            <div className="pt-4">
              <Link className="sm:text-sm md:text-md lg:text-lg hover:text-cyan-500 transition duration-500" href="/about">More about me</Link>
            </div>
          </div>

          <div>
            <div className="pt-20 sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              Some of my recent work
            </div>
            <div className="pt-4 gap-8 grid sm:grid-cols-1 md:grid-cols-2">
              {projectDetailData.slice(0, MAX_PROJECTS).map(project =>
                <ProjectCard project={project} />
              )}
            </div>
            <div className="pt-4">
              <Link className="sm:text-sm md:text-md lg:text-lg hover:text-cyan-500 transition duration-500" href="/projects">
                View Projects
              </Link>
            </div>
          </div>



        </div>



      </section>
    </main>
  )
}

export default Home;

