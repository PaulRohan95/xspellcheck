import React, { useState, useEffect } from 'react';

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
};

function Xspellcheck() {

    const [text, setText] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const checkSpelling = () => {
        const words = text.split(' ');
        for (let word of words) {
            const lowerCaseWord = word.toLowerCase();
            if (customDictionary[lowerCaseWord]) {
                setSuggestion(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
                return;
            }
        }
        setSuggestion('');
    };

    useEffect(() => {
        checkSpelling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };


    return (
        <div>
            <textarea
                placeholder='enter input text...'
                value={text}
                onChange={handleChange}
                rows='10'
                cols='50'
                />
                {suggestion && <p>{suggestion}</p>}
        </div>
    );
};

export default Xspellcheck;