export type PortfolioLinkProps = {
    label: string,
    link: string
}

export const PortfolioLink = ({ label, link }: PortfolioLinkProps) => {
    <a className="hover-cyan font-bold sm:text-md md:text-md lg:text-xl " href={link}>
        {label}
    </a>
}

