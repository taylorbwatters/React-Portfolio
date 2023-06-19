import React from 'react';

export function Footer() {
    return (
        <footer>
            <div>Footer</div>
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
            `}</style>
        </footer>
    );
}