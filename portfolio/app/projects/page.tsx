import { projectDetailData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";

export const metadata = {
    title: 'Projects | Keith',
}

const ProjectPage = () => {
    return (
        <>
            <div className="sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Projects
            </div>
            <div className="rounded-md my-4 overflow-hidden">
                <Image
                    src={img}
                    // src={`/dropandgo/home.png`}
                    alt="Unable to load image"
                // height={100}
                // width={300}
                // fill // to take size of container
                // style={{ objectFit: 'cover', objectPosition: 'top' }} // to keep ratio
                />
            </div>

            <div className="pt-8 gap-12 lg:gap-16 grid sm:grid-cols-1 md:grid-cols-2">
                {projectDetailData.map(project =>
                    <ProjectCard project={project} />
                )}
            </div>
        </>

    );
};

export default ProjectPage;