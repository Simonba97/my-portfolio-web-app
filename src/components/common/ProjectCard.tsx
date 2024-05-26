import { motion } from 'framer-motion'

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className='w-11/12'>
            <div id={`contentProject_${keyProject}`} className="flex flex-col md:flex-row items-center bg-gray-700 md:rounded-xl max-md:rounded-t-md">
                <div className="p-4 md:p-3 lg:p-6 md:w-1/2 flex flex-col md:flex-1 items-center justify-center space-y-2">
                    <div id="mainInformationProject">
                        <h5 className="text-2xl font-bold text-gray-200 -mb-2">{title}</h5>
                        <span className="text-sm text-gray-400 font-mono">{type}</span>
                    </div>
                    <div id="summaryProject">
                        <p className="flex flex-col text-start text-base font-light leading-tight">
                            {summary}
                        </p>
                    </div>
                    <div id="skillUsed">
                        <p className="flex mt-2">
                            {tags}
                        </p>
                    </div>
                    {linkProject &&
                        <div className="max-md:hidden mt-4">
                            <a href={`${linkProject}/?from=portfolio`} target="_blank"><span className="bg-gray-300 text-gray-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">{'Ver proyecto 👀'}</span></a>
                        </div>
                    }
                </div>
                <div className="p-2 md:p-0 md:w-1/2 flex justify-center -space-x-5">
                    <img className="w-[45%] aspect-auto md:w-1/2 -rotate-12 hover:rotate-0 duration-300 z-10" src={images[0]} alt="PVHome" loading="lazy" />
                    <img className="w-[45%] aspect-auto md:w-1/2 rotate-12 hover:rotate-0 duration-300" src={images[1]} alt="PVHome" loading="lazy" />
                </div>
            </div >
            {linkProject &&
                <div className="md:hidden bg-gray-300 rounded-b-md py-1 text-gray-700">
                    <a href={`${linkProject}/?from=portfolio`} target="_blank"><span className="font-mono tracking-tighter text-sm">{'Ver proyecto'}</span> <span>{'👀'}</span></a>
                </div>
            }

        </motion.div>
    )
}

export default ProjectCard