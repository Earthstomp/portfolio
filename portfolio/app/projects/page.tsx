import { projectDetailData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import Image from "next/image";

export const metadata = {
    title: 'Projects | Keith',
}

const ProjectPage = () => {
    return (
        <>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Projects
            </div>

            <div className="pt-8 gap-28 grid sm:grid-cols-1 md:grid-cols-2">
                {projectDetailData.map((project, index) =>
                    <ProjectCard project={project} />
                )}
            </div>
        </>

    );
};

export default ProjectPage;