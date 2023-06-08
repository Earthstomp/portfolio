import { projectDetailData } from "@/app/data/data";
import RepoCard from "@/app/components/RepoCard";
import ProjectPictures from "@/app/components/ProjectPictures";

export const metadata = {
    title: 'Project | Keith',
}

const ProjectPage = ({ params: { name } }: any) => {

    const project = projectDetailData.find(obj => obj.id === name);

    if (!project) {
        return null;
    }

    const github = project.github;

    return (
        <div className="text-left">
            <div>
                <div className="sm: w-full md:w-2/3 lg:w-2/3">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">{project?.label}</h2>
                    <p className="pt-8 text-md md:text-lg lg:text-xl">{project?.description}</p>
                </div>
                <div className="pt-4 lg:text-lg uppercase text-cyan-500 tracking-tight">
                    Technologies used:
                    <span>{project?.technologies?.map(tech => <span className="px-2" key={tech}> {tech} </span>)
                    }</span>

                </div>
                <div className="sm:w-full md:w-5/6 lg:w-5/6">
                    {/* @ts-expect-error Server Component */}
                    <RepoCard repoName={github} />
                </div>
                <div className="pt-20 text-3xl md:text-4xl lg:text-5xl font-bold">
                    Screenshots of my work
                </div>
                <ProjectPictures projectId={project.id} />
            </div>
        </div>
    );
};

export default ProjectPage