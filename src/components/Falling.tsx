import React, { useMemo } from 'react';

const SIZE = 48;

const Falling: React.FC = () => {
    const maxX = useMemo(() => {
        return document.body.scrollHeight + SIZE;
    }, []);

    return (
        <p>AAA</p>
    );
};

export default Falling;
