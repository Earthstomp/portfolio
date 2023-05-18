import Image from 'next/image'
import Link from "next/link";


async function delay() {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const Home = async () => {

  await delay();
  return (
    <main>
      <section className="bg-blue-700">
        <nav className="pt-10">
          <h1>Welcome</h1>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/projects'>Projects</Link></li>
        </nav>
      </section>
    </main>
  )
}

export default Home;

