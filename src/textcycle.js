import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const FONTLEN = 13

const TextCycle = (arr) => {
    const TEXTS = arr
    const [textIndex, setTextIndex] = React.useState(0);

    React.useEffect(() => {
    const intervalId = setInterval(
        () => setTextIndex((textIndex) => textIndex + 1),
        5000, // every 5 seconds
    );
    return () => clearTimeout(intervalId);
    }, []);

    return (
        <TextTransition springConfig={presets.default} className="shortblock"><p className={"loud font" + (textIndex % FONTLEN + 1)}>{TEXTS[textIndex % TEXTS.length]}</p></TextTransition>
    );
};

export default TextCycle;