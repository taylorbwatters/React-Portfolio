import React from 'react';

export function Project({ name, imgUrl }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={imgUrl} alt="Project Image" />

            <style jsx>{`
                img {
                    height: 300px;
                }
            `}</style>
        </div>
    );
}