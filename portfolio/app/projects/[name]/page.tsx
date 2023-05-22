import { projectDetailData } from "@/app/data/data";
import { data } from "autoprefixer";




const ProjectPage = ({ params: { name } }: any) => {

    const project = projectDetailData.find(obj => obj.id === name);

    return (
        <div>
            <h2>{project?.id}</h2>
        </div>
    );
};

export default ProjectPage