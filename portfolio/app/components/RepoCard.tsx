import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

type RepoCardProps = {
    html_url: string
    name: string,
    parent: {
        stargazers_count: number;
        forks_count: number;
        watchers_count: number;
    }
    description: string,
    technologies: string[],
    github: string,
    link: string,
}

async function getServerSideProps(name: string): Promise<RepoCardProps> {
    const response = await fetch(
        `https://api.github.com/repos/Earthstomp/${name}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const repo = await response.json();
    return repo;
}

async function Repo({ name }: { name: string }) {
    const repo = await getServerSideProps(name);

    return (
        <div className="my-8 p-4 rounded bg-white  hover:translate-y-2 transition duration-200">
            <Link href={repo.html_url}>
                <h3 className="font-extrabold text-gray-800">{repo.name}</h3>
                <p className="text-gray-400">{repo.description}</p>
                <div className='flex justify-between text-gray-400'>
                    <span className='flex items-center gap-2'>
                        <FaStar /> {repo.parent.stargazers_count}
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaCodeBranch /> {repo.parent.forks_count}
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaEye /> {repo.parent.watchers_count}
                    </span>
                </div>
            </Link>
        </div>
    );
};
export default Repo;