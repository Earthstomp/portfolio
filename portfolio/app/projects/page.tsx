import { projectDetailData } from "../data/data";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
    return (
        <>
            <div className="sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Projects
            </div>

            <div className="pt-8 gap-4 grid sm:grid-cols-1 md:grid-cols-2">
                {projectDetailData.map(project =>
                    <ProjectCard project={project} />
                )}
            </div>
        </>

    );
};

export default ProjectPage;