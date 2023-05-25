import Link from "next/link"

const Footer = () => {
    return (
        <footer className="pt-20 px-16 text-gray-500">
            <div className="sm:grid-cols-2 grid lg:grid-cols-3 gap-8">
                <div className="sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Social
                    <div className="">
                        <a className="hover:text-cyan-500 transition duration-500 font-bold sm:text-md md:text-lg lg:text-xl " href="https://tinyurl.com/linkedin-keith">
                            Linkedin
                        </a>
                        <br />

                        <a className="hover:text-cyan-500 transition duration-500 font-bold sm:text-md md:text-lg lg:text-xl" href="https://github.com/Earthstomp">
                            Github
                        </a>
                    </div>
                </div>
                <div className="sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Email
                    <div className="sm:text-md md:text-lg lg:text-xl">
                        <a className="hover:text-cyan-500 transition duration-500 font-bold" href="mailto:keithong100@gmail.com">
                            keithong100@gmail.com
                        </a>
                    </div>
                </div>
                <div className="sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Location
                    <div className="font-bold sm:text-xl md:text-2xl lg:text-3xl uppercase">

                        <div>
                            1.3521° N
                            103.8198° E
                        </div>
                        <div className="sm:text-md md:text-lg lg:text-xl">Singapore
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 sm:grid-cols-1 grid lg:grid-cols-3 gap-8 sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                <div>
                    © 2023 Keith Ong. All Rights Reserved.
                </div>
                <div>
                    Designed and Developed by Keith Ong
                </div>
                <div>
                    Version 1.1
                </div>


            </div>

        </footer>
    )
}

export default Footer