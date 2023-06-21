import React from 'react';
import { Project } from '../components/Project';

const projects = [
    { name: '#Adulting', githubUrl: 'https://github.com/aerostokes/hashtag-adulting', deployedUrl: 'https://hashtag-adulting.herokuapp.com/', imgUrl: './images/hashtag-adulting.png' },
    { name: 'Work Day Scheduler', githubUrl: 'https://github.com/taylorbwatters/work-day-scheduler', deployedUrl: 'https://taylorbwatters.github.io/work-day-scheduler/', imgUrl: './images/work-day-scheduler.png' },
    { name: 'Note Taker', githubUrl: 'https://github.com/taylorbwatters/note-taker', deployedUrl: 'https://tay-note-taker.herokuapp.com/', imgUrl: './images/note-taker.png' },
]

export function Portfolio() {
    return (
        <>
            <h2>Portfolio</h2>
            <section>
                {projects.map(({ name, imgUrl, deployedUrl }) => {
                    return <Project key={name} name={name} imgUrl={imgUrl} deployedUrl={deployedUrl} />
                })}
            </section>

            <style jsx>{`
                section {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
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