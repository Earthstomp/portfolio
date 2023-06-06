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

    const imagePath = `/${project.id}/home.png`;
    return (
        <div className="group">
            <div className="rounded-md relative h-80 md:h-[256px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] 3xl:??? overflow-hidden">
                <Image
                    src={imagePath}
                    alt="Unable to load image"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
            </div>
            <div className="pt-4 sm:text-sm md:text-md lg:text-lg uppercase font-semibold text-gray-500">
                {project.label}
            </div>
            <Link href='/projects/[project.id]' as={`projects/${project.id}`} className="pt-1 sm:text-xl md:text-2xl lg:text-3xl font-bold group-hover: hover-cyan">
                {project.shortDesc}
            </Link>


        </div>
    );
};

export default ProjectCard;