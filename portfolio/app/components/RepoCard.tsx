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

async function getRepo(name: string | undefined) {
    const res = await fetch(`https://api.github.com/repos/Earthstomp/${name}`)
    return res.json();
}


export default async function RepoCard({ repoName }: { repoName: string | undefined }) {
    const repoData: Promise<RepoCardProps> = getRepo(repoName);
    const repo = await repoData;

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
