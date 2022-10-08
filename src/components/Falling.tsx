import React, { useState, useEffect, useMemo } from 'react';

export const WIDTH = 48;
export const HEIGHT = WIDTH * 1.9;

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatFromInterval(min: number, max: number) { // min and max included
    return Math.random() * (max - min) + min;
}

function getInitialOffsetY(column: number, row: number) {
    return randomIntFromInterval(-7 * HEIGHT, 0.5 * HEIGHT) - row * 6 * HEIGHT;
}

const map = (value: number, minOrig: number, maxOrig: number, minNew: number, maxNew: number) =>
    (value - minOrig) * (maxNew - minNew) / (maxOrig - minOrig) + minNew;

const map01 = (value: number, minNew: number, maxNew: number) =>
    map(value, 0.001, 1, minNew, maxNew);

type FallingProps = {
    column: number;
    row: number;
};

const Falling: React.FC<FallingProps> = (props) => {
    const {
        column,
        row,
    } = props;

    // const [offsetY, setOffsetY] = useState(() => randomIntFromInterval(-7 * SIZE, 3 * SIZE));
    const [offsetY, setOffsetY] = useState(() => getInitialOffsetY(column, row));
    const [depth, setDepth] = useState(() => randomFloatFromInterval(0.001, 1));

    const width = useMemo(() => {
        return WIDTH + map01(depth, -30, 15);
    }, [depth]);

    const height = useMemo(() => {
        return width * 1.9;
    }, [width]);

    const maxY = useMemo(() => {
        return document.body.scrollHeight - height;
    }, []);

    const offsetX = useMemo(() => {
        return column * 150 + randomIntFromInterval(-0.4 * WIDTH, 1.3 * WIDTH);
    }, []);

    useEffect(() => {
        const randomSpeed = map01(depth, 30, 8);

        setInterval(() => {
            setOffsetY(prev => {
                if (prev + 1 > maxY)
                    return getInitialOffsetY(column, row);
                return prev + 1
            });
        }, randomSpeed);
    }, []);

    return (
        <div className='absolute opacity-95' style={{top: offsetY, left: offsetX}}>
            <img src="waterfall.webp" width={width} />
        </div>
    );
};

export default Falling;
