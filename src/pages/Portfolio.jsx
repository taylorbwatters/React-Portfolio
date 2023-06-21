import React from 'react';
import { Project } from '../components/Project';

const projects = [
    { name: '#Adulting', githubUrl: '', deployedUrl: '', imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Project 2', githubUrl: '', deployedUrl: '', imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Project 3', githubUrl: '', deployedUrl: '', imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Project 4', githubUrl: '', deployedUrl: '', imgUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
]

export function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <section>
                {projects.map(({ name, imgUrl }) => {
                    return <Project key={name} name={name} imgUrl={imgUrl} />
                })}
            </section>

            <style jsx>{`
                section {
                    display: flex;
                    flex-wrap: wrap;
                }

                h2 {
                    display: flex;
                    justify-content: center;
                    align-item: center;
                }
            `}</style>
        </>
    );
}