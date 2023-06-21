import React from 'react';

export function Footer() {
    return (
        <footer>
            <a href="https://github.com/taylorbwatters">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="github logo"></img>
            </a>
            <a href="https://www.linkedin.com/in/taylor-watters-3a3a68262/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="linkedin logo"></img>
            </a>

            <style jsx>{`
                footer {
                    height: 50px;
                    position: absolute;
                    bottom: 0;
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                img {
                    height: 40px;
                    background-color: white;
                    border-radius: 50%;
                }
            `}</style>
        </footer>
    );
}