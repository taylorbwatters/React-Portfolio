import React from 'react';

export function Project({ name, imgUrl, deployedUrl, githubUrl }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={imgUrl} alt="Project Image" />
            <div className="links">
             <a target="_blank" href={deployedUrl}>Deployed App</a>
             <a target="_blank" href={githubUrl}>GitHub</a>
             </div>

            <style jsx>{`
                img {
                    height: 300px;
                }

                  a {
                    padding: 5px 10px;
                    background-color: lightgrey;
                    width: fit-content;
                    color: black;
                    text-decoration: none;
                    margin: 3px;
                }

                .links {
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                h3 {
                    display: flex;
                    justify-content: center;
                    align-item: center;   
                }
            `}</style>
        </div>
    );
}