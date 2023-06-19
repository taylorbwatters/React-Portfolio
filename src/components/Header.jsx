import React from 'react';
import { Navigation } from './Navigation';

export function Header({ selectedRoute, onRouteClick }) {
    return (
        <header>
            <h1>Taylor Watters</h1> 
            <Navigation 
                selectedRoute={selectedRoute} 
                onRouteClick={onRouteClick}
            />
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                }
            `}</style>
        </header>
    );
}