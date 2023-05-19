import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";

const open_sans = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

async function delay() {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const Home = async () => {

  await delay();
  return (
    <main>
      <section className={open_sans.className}>
        <div className="sm:text-3xl md:text-4xl lg:text-5xl">
          I'm Keith, a passionate developer and aspiring entrepreneur
        </div>
        <div className="py-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa corporis unde quis recusandae quaerat ad molestiae rem fugit? Eum exercitationem facere quod similique at illo soluta, excepturi ullam non.
        </div>
        <div className="20">

        </div>
      </section>
    </main>
  )
}

export default Home;

