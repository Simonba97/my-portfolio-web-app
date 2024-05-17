import React from "react"

const TitleSection = ({ title, emoji }: { title: string, emoji?: string }) => {
    return (
        <React.Fragment>
            <div className="flex">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-200">
                    <span className="underline underline-offset-3 decoration-8 decoration-blue-600">
                        {title}
                    </span>
                    &nbsp;
                    <span className="text-3xl">
                        {emoji}
                    </span>
                </h1>
                {/*  <h5 className="mb-3 font-semibold text-2xl">
                    {title}
                </h5> */}
            </div>
        </React.Fragment>
    )
}

export default TitleSection