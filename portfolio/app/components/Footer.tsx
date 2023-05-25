import Link from "next/link"

const Footer = () => {
    return (
        <footer className="pt-20 px-16 text-gray-500">
            <div className="grid sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8">
                <div className="sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Social
                    <div className="">
                        <a className="hover:text-cyan-500 transition duration-500 font-bold sm:text-md md:text-md lg:text-xl " href="https://tinyurl.com/linkedin-keith">
                            Linkedin
                        </a>
                        <br />

                        <a className="hover:text-cyan-500 transition duration-500 font-bold sm:text-md md:text-md lg:text-xl" href="https://github.com/Earthstomp">
                            Github
                        </a>
                    </div>
                </div>
                <div className="col-span-2 sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Email
                    <div className="sm:text-md md:text-md lg:text-xl">
                        <a className="hover:text-cyan-500 transition duration-500 font-bold" href="mailto:keithong100@gmail.com">
                            keithong100@gmail.com
                        </a>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 sm:grid-cols-2">
                        <div className="sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                            Location
                            <div className="font-bold sm:text-xl md:text-lg lg:text-2xl uppercase">

                                <div>
                                    1.3521° N
                                    103.82° E
                                </div>
                                <div className="sm:text-md md:text-lg lg:text-xl">Singapore
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 xl-grid-cols-2 sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                                <div>
                                    © 2023 Keith Ong. <br />
                                    All Rights Reserved.
                                </div>
                                <div className="pl-8 sm:pl-4 ">
                                    Designed and Developed
                                    <br /> by Keith Ong
                                </div>
                                <div>
                                    Version 1.1
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="sm:col-span-2 md:col-span-1 sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    Location
                    <div className="font-bold sm:text-xl md:text-2xl lg:text-3xl uppercase">

                        <div>
                            1.3521° N <br />
                            103.82° E
                        </div>
                        <div className="sm:text-md md:text-lg lg:text-xl">Singapore
                        </div>
                    </div>
                </div>
                <div className="sm:grid-cols-1 grid sm:text-xs md:text-sm lg:text-md uppercase tracking-tight">
                    <div>
                        © 2023 Keith Ong. <br />
                        All Rights Reserved.
                    </div>
                    <div>
                        Designed and Developed
                        <br /> by Keith Ong
                    </div>
                    <div>
                        Version 1.1
                    </div>
                </div> */}
            </div>


        </footer>
    )
}

export default Footer