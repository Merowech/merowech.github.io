import React, {useEffect} from 'react';

import './resume.css';

export function Resume(props) {

   console.log(props);
   

    const skillmessage = props.data.skillmessage;
    
    const education = props
        .data
        .education
        .map(function (education, i) {
            return (
                <div key={i}>
                    <h3>{education.school}</h3>
                    <p className="info">{education.degree}
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

    const work = props
        .data
        .work
        .map(function (work, i) {
            return (
                <div key={i}>
                    <h3>{work.company}</h3>
                    <p className="info">{work.title}
                        <span>&bull;</span>
                        <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });

    const skills = props
        .data
        .skills
        .map(function (skills) {
            var className = 'bar-expand ' + skills
                .name
                .toLowerCase();
            return (
                <li key={skills.name}>
                    <span
                        style={{
                        width: skills.level
                    }}className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });

    useEffect(() => {}, []);

    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1>
                        <span>Education</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">

                <div className="three columns header-col">
                    <h1>
                        <span>Work</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

            <div className="row skill">

                <div className="three columns header-col">
                    <h1>
                        <span>Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">

                    <p>{skillmessage}
                    </p>

                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}