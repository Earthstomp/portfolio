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

    const imagePath = `/${project.id}/1home.png`;
    return (
        <Link href='/projects/[project.id]' as={`projects/${project.id}`} className="pt-1 sm:text-xl md:text-2xl lg:text-3xl font-bold  hover-cyan">
            <div className="group relative">
                <div className="relative z-20 h-80 md:h-[256px] lg:h-[300px] xl:h-[350px] 2xl:h-[450px] ">
                    <div className="rounded-md relative z-20 h-80 md:h-[256px] lg:h-[300px] xl:h-[350px] 2xl:h-[450px] overflow-hidden">
                        <Image
                            src={imagePath}
                            alt="Unable to load image"
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                        />
                    </div>
                    <div className="inline-block absolute top-5 left-5 h-full w-full border-4 border-cyan-500 rounded-lg group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

                </div>

                <div className="pt-12 text-sm md:text-md lg:text-lg uppercase font-semibold text-gray-500">
                    {project.label}
                </div>
                <div className="pt-1 text-xl md:text-2xl lg:text-3xl font-bold hover-cyan">
                    {project.shortDesc}
                </div>
            </div >

        </Link>


    );
};

export default ProjectCard;