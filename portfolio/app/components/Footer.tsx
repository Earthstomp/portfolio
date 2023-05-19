import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <div className="">
                <div className="flex justify-center">
                    <Link href="/">Keith Ong</Link>
                </div>
                <div className="flex justify-around">
                    <Link href="/about">About</Link>
                    <Link href="/projects">Projects</Link>
                </div>
            </div>
        </header>
    )
}

export default Header