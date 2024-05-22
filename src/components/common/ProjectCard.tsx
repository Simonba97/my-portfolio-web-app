interface IProject {
    keyProject: string;
    title: string;
    type: string;
    summary: string;
    tags: React.ReactNode[];
    linkProject?: string;
    images: string[];
} // end IProject

const ProjectCard: React.FC<IProject> = ({ keyProject, title, type, summary, tags, linkProject, images }) => {
    return (
        <>
            <div id={`contentProject_${keyProject}`} className="flex flex-col sm:flex-row items-center bg-gray-700 sm:rounded-md max-sm:rounded-t-md font-mono">
                <div className="p-4 sm:p-2 sm:w-1/2 flex flex-col sm:flex-1 items-center justify-center space-y-2">
                    <div id="mainInformationProject">
                        <h5 className="text-2xl sm:text-3xl font-bold text-gray-200 -mb-2">{title}</h5>
                        <span className="text-sm sm:text-xs text-gray-400 ">{type}</span>
                    </div>
                    <div id="summaryProject">
                        <p className="flex flex-col text-start text-sm -tracking-wider sm:tracking-normal">
                            {summary}
                        </p>
                    </div>
                    <div id="skillUsed">
                        <p className="flex mt-2">
                            {tags}
                        </p>
                    </div>
                    {linkProject &&
                        <div className="max-sm:hidden mt-4">
                            <a href={`${linkProject}/?from=portfolio`} target="_blank"><span className="font-light text-base underline italic">{'Ver proyecto'}</span> <span>{'👉🏻'}</span></a>
                        </div>
                    }
                </div>
                <div className="p-2 sm:p-0 sm:w-1/2 flex justify-center -space-x-5">
                    <img className="w-1/2 -rotate-12 hover:rotate-0 duration-300 z-10" src={images[0]} alt="PVHome" />
                    <img className="w-1/2 rotate-12 hover:rotate-0 duration-300" src={images[1]} alt="PVHome" />
                </div>
            </div>
            {linkProject &&
                <div className="sm:hidden bg-gray-300 rounded-b-md py-1 text-gray-700">
                    <a href={`${linkProject}/?from=portfolio`} target="_blank"><span className="font-bold font-mono uppercase tracking-tighter">{'Ver proyecto'}</span> <span>{'👉🏻'}</span></a>
                </div>
            }

        </>
    )
}

export default ProjectCard