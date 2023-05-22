import { projectDetailData } from "@/app/data/data";
import { data } from "autoprefixer";
import RepoCard from "../../components/RepoCard"


const ProjectPage = ({ params: { name } }: any) => {

    const project = projectDetailData.find(obj => obj.id === name);
    const github = project?.github;

    return (
        <div className="h-screen text-left px-8  text-gray-200">
            <div>
                <div className="sm: w-full md:w-2/3 lg:w-2/3">
                    <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold ">{project?.label}</h2>
                    <p className="pt-8 sm:text-md md:text-lg lg:text-xl">{project?.description}</p>
                </div>
                <div className="sm: w-full md:w-5/6 lg:w-5/6">
                    <RepoCard name={github} />
                </div>
            </div>

            <ul>

            </ul>


        </div>
    );
};

export default ProjectPage