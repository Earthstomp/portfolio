import Link from "next/link";
import Image from "next/image";

type Project = {
    id: string;
    label: string;
    shortDesc: string,
    description: string;
    technologies: string[];
    github: string;
    link: string;
}

const ProjectCard = ({ project }: { project: Project }) => {

    const imagePath = `/${project.label}/home.png`;
    return (
        <div className="w-full">
            <div className="sm:text-sm md:text-md lg:text-lg uppercase font-semibold text-gray-500">
                {project.label}
            </div>
            <Link href='/projects/[project.id]' as={`projects/${project.id}`} className="pt-1 sm:text-2xl md:text-3xl lg:text-4xl font-bold hover: hover-cyan">
                {project.shortDesc}
            </Link>
            <div className="sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-200 lg:w-200 relative rounded-full">
                <Image
                    src={imagePath}
                    alt="cannot load"
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill

                />
            </div>


        </div>

    );
};

export default ProjectCard;