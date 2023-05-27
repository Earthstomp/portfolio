export type ProjectPicturesProps = {
    projectId: string | undefined // is this correct?
}

const ProjectPictures = ({ projectId }: ProjectPicturesProps) => {
    return (
        <div>
            {projectId}
        </div>
    )
}

export default ProjectPictures