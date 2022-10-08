import React, { useMemo } from 'react';
import Falling from './Falling';

const Overlay: React.FC = () => {
    const count = useMemo(() => {
        console.log(document.body.scrollHeight);
        return Math.floor(window.innerWidth / 60);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full min-h-full bg-rose-500/50">
            {[...Array(count)].map(() => (
                <Falling />
            ))}
        </div>
    );
};

export default Overlay;
