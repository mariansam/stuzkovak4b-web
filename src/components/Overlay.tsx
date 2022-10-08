import React, { useMemo } from 'react';
import Falling, { HEIGHT } from './Falling';

const Overlay: React.FC = () => {
    const countWidth = useMemo(() => {
        console.log(document.body.scrollHeight);
        return Math.floor(window.innerWidth / 120);
    }, []);

    const countHeight = useMemo(() => {
        return Math.ceil(window.innerHeight / (2 * HEIGHT) + 1);
    }, []);

    console.log({countWidth, countHeight, HEIGHT});

    return (
        <div className="flex flex-row pointer-events-none absolute top-0 left-0 w-full h-full min-h-full">
            {[...Array(countWidth * countHeight)].map((value, index) => (
                <Falling column={index % countWidth} row={Math.floor(index / countWidth)} />
            ))}
        </div>
    );
};

export default Overlay;
