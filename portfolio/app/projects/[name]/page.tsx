import { projectDetailData } from "@/app/data/data";
import { data } from "autoprefixer";




const ProjectPage = ({ params: { name } }: any) => {

    const project = projectDetailData.find(obj => obj.id === name);

    return (
        <div className="h-screen text-left px-8  text-gray-200">
            <div className="flex content-center">
                <div className="sm: w-full md:w-2/3 lg:w-2/3">
                    <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold ">{project?.id}</h2>
                    <p className="pt-8 sm:text-md md:text-lg lg:text-xl">{project?.description}</p>

                </div>
            </div>

        </div>
    );
};

export default ProjectPage