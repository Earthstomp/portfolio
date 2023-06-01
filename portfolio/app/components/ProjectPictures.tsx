import fs from "fs";
import path from "path";
import Image from "next/image";

export type ProjectPicturesProps = {
    projectId: string | undefined// is this correct?
}


const ProjectPictures = ({ projectId }: ProjectPicturesProps) => {
    // const dir = `/${projectId}`;

    const dir = path.resolve('./public', projectId);
    const images = fs.readdirSync(dir);

    return (
        <div className="">
            {images.map(image =>
                // <div className="rounded-md my-8 h-80 sm:h-[100vh] overflow-hidden">
                //     <Image
                //         key={image}
                //         src={`/${projectId}/${image}`}
                //         alt="Unable to load image"
                //         fill
                //         style={{ objectFit: 'cover', objectPosition: 'top' }}
                //     />
                // </div>
                <div className="rounded-md my-8 overflow-hidden">
                    <Image
                        key={image}
                        src={`/${projectId}/${image}`}
                        alt={`/${projectId}/${image}`}
                        height={2000}
                        width={2000}
                    // fill // to take size of container
                    // style={{ objectFit: 'cover', objectPosition: 'top' }} // to keep ratio
                    />
                </div>
            )}
        </div>
    )
}

export default ProjectPictures