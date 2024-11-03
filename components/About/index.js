import React from "react";

const About = ({tagline, diploma, school, date, tasks}) => {
    return (
        <>
            <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-5/5">
                {tagline ? tagline : ""}
            </p>
            <span className="tablet:m-10 text-l laptop:text-3l w-full laptop:w-5/5">
                {diploma ? diploma + " - " : ""} {school ? school + " - " : ""}  {date ? date : ""}
            </span>

            <div className="tablet:m-10 text-l laptop:text-3l w-full laptop:w-5/5">
                Compétences :
                <ul className="list-disc">
                    {tasks.map((task, key) =>
                        <li key={key}>{task}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default About;