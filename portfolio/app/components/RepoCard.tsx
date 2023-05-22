import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function getServerSideProps({ name }: any) {
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

async function Repo({ name }: any) {
    // const repo = await getServerSideProps(name);
    const response = await fetch(
        `https://api.github.com/repos/Earthstomp/${name}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const repo = await response.json();

    return (
        <div className="my-8 p-4 rounded bg-white  hover:translate-y-2 transition duration-200 ">
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