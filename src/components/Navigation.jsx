import React from 'react';

const routes = [
    { name: 'About Me', path: 'about' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Contact', path: 'contact' },
    { name: 'Resume', path: 'resume' },
];

export function Navigation({ selectedRoute, onRouteClick }) {
    return (
        <nav>
            <ul>
                {routes.map(({ name, path }) => {
                    return (
                        <li className={selectedRoute === path ? 'selected' : ''}>
                            <a onClick={() => onRouteClick(path)} href="javascript:;">
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <style jsx>{`
                .selected {
                    color: orange;
                }
                a { 
                    color: inherit; 
                    text-decoration: none;
                }
                li {
                    list-style-type: none;
                    padding: 10px;
                }
                ul {
                    padding: 0;
                    display: flex;
                }
            `}</style>
        </nav>
    );
}