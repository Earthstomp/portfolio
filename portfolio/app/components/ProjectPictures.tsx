import fs from "fs";
import path from "path";
import Image from "next/image";

export type ProjectPicturesProps = {
    projectId: string | undefined// is this correct?
}


const ProjectPictures = ({ projectId }: ProjectPicturesProps) => {
    // const dir = `/${projectId}`;

    // const dir = path.resolve('./public', projectId);
    // const images = fs.readdirSync(dir);

    return (
        <div className="">
            {/* {images.map(image =>
                // <div className="relative rounded-md my-8 h-80 sm:h-full md:h-[120px] lg:h-[300px] overflow-hidden">
                //     <Image
                //         key={image}
                //         src={`/${projectId}/${image}`}
                //         alt="Unable to load image"
                //         fill
                //     // style={{ objectFit: 'cover', objectPosition: 'top' }}
                //     />
                // </div>
                <div className="relative rounded-md my-8 h-80 sm:h-[100vh] overflow-hidden">
                    <Image
                        key={image}
                        src={`/${projectId}/${image}`}
                        alt="Unable to load image"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                </div>
            )} */}
        </div>
    )
}

export default ProjectPictures