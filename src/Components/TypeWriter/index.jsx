import React, { useState, useEffect } from 'react';
import './styles.scss';

// Material UI
import Typography from '@material-ui/core/Typography';

// Custom Component

const TypeWriter = (props) => {
    const { titles, typingInterval = 60, pauseBetweenWords = 1500 } = props;
    const [currentWord, setCurrentWord] = useState('');
    const [currentPrefix, setCurrentPrefix] = useState('');
    const [timeOuts, setTimeOuts] = useState([]);

    let actualIndexWord = 0;

    const loopFunction = (func, pause) => {
        const timeout = setTimeout(func, pause);
        setTimeOuts([...timeOuts, timeout]);
        if (timeOuts.length > 99) {
            clearTimeout(timeOuts[0]);
            setTimeOuts([...timeOuts.slice(0, timeOuts.length - 1)]);
        }
    };

    const eraseWord = (word, index) => {
        setCurrentWord(word.slice(0, index));
        if (index > 0) {
            loopFunction(() => eraseWord(word, index - 1), typingInterval);
        } else {
            // eslint-disable-next-line no-use-before-define
            loopFunction(() => nextWord(), typingInterval + 100);
        }
    };

    const typeWord = async (word, index = 0) => {
        setCurrentWord(word.slice(0, index));
        if (index < word.length) {
            loopFunction(() => {
                typeWord(word, index + 1);
            }, typingInterval);
        } else {
            loopFunction(() => {
                eraseWord(word, word.length);
            }, pauseBetweenWords);
        }
    };

    const nextWord = () => {
        const { prefix, word } = titles[actualIndexWord];
        setCurrentPrefix(prefix);
        typeWord(word);
        if (actualIndexWord < titles.length - 1) {
            actualIndexWord += 1;
        } else {
            actualIndexWord = 0;
        }
    };

    useEffect(() => {
        nextWord();
    }, []);

    return (
        <Typography variant="h1" className="typewriter">
            <span>{`${currentPrefix}${currentWord}`}</span>
        </Typography>
    );
};

export default TypeWriter;
