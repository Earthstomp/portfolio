import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <main className="px-8">
                <div>
                    <nav className="py-14 mb-12 flex justify-between text-white">
                        <h1 className="text-xl">
                            <Link href="/">keithbuilds</Link>
                        </h1>

                        <ul className="flex items-center sm:text-sm md:text-base lg:text-xl">
                            <li className="px-2 hover-cyan">
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li className="px-2  hover-cyan">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="px-2  hover-cyan">
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li className="px-2  hover-cyan">
                                <a
                                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="#"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>

        </header>
    )
}

export default Header