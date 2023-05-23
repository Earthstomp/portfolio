import Link from "next/link";

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
    return (
        <div className="py-8">
            <div className="sm:text-sm md:text-md lg:text-lg uppercase font-semibold text-gray-500">
                {project.label}
            </div>
            <Link href='/projects/[project.id]' as={`projects/${project.id}`} className="pt-1 sm:text-2xl md:text-3xl lg:text-4xl font-bold hover: hover:text-cyan-500 transition duration-500">
                {project.shortDesc}
            </Link>

        </div>

    );
};

export default ProjectCard;