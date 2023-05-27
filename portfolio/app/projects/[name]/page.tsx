import { projectDetailData } from "@/app/data/data";
import { data } from "autoprefixer";
import RepoCard from "../../components/RepoCard";

import { ProjectPicturesProps } from "@/app/components/ProjectPictures";
import ProjectPictures from "@/app/components/ProjectPictures";

export const metadata = {
    title: 'Project | Keith',
}

const ProjectPage = ({ params: { name } }: any) => {

    // how do we be sure that this is defined? 
    const project = projectDetailData.find(obj => obj.id === name);
    const github = project?.github;

    return (
        <div className="h-screen text-left">
            <div>
                <div className="sm: w-full md:w-2/3 lg:w-2/3">
                    <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold">{project?.label}</h2>
                    <p className="pt-8 sm:text-md md:text-lg lg:text-xl">{project?.description}</p>
                </div>
                <div className="pt-4 sm:text-sm md:text-md lg:text-lg uppercase text-cyan-500 tracking-tight">
                    Technologies used:
                    <span>{project?.technologies?.map(tech => <span className="px-2" key={tech}> {tech} </span>)
                    }</span>

                </div>
                <div className="sm:w-full md:w-5/6 lg:w-5/6">
                    <RepoCard repoName={github} />
                </div>
                <div>
                    <ProjectPictures projectId={project?.id} />
                </div>
            </div>




        </div>
    );
};

export default ProjectPage