import { NextComponentType } from "next"
import Link from "next/link"
import { PortfolioLink } from "./PortfolioLink"

const Footer = () => {
    return (
        <footer className="pt-20 text-gray-500">
            <div className="grid sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8">
                <div className="footer-title">
                    Social
                    <div>
                        <PortfolioLink label="Linkedin" link="https://tinyurl.com/linkedin-keith" />
                        <br />
                        <PortfolioLink label="Github" link="https://github.com/Earthstomp" />
                    </div>
                </div>
                <div className="col-span-2 footer-title">
                    Email
                    <div className="sm:text-md md:text-md lg:text-xl">
                        <PortfolioLink label="keithong100@gmail.com" link="mailto:keithong100@gmail.com" />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 sm:grid-cols-2">
                        <div className="footer-title">
                            Location
                            <div>
                                <span className="font-bold sm:text-xl md:text-lg lg:text-2xl uppercase hover:text-red-500">
                                    1.3521° N
                                    103.82° E
                                </span>
                            </div>
                            <div>
                                <span className="font-bold sm:text-md md:text-lg lg:text-xl uppercase hover:text-white">
                                    Singapore
                                </span>
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
            </div>


        </footer>
    )
}

export default Footer