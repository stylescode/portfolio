import test from 'node:test';
import { useEffect, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
  delay?: number;
}

const Typewriter = ({phrases, delay}: TypewriterProps) => {

  const [stringLibrary, setStringLibrary] = useState(phrases);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(stringLibrary[currentIndex]);

  const chooseRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * stringLibrary.length);
    return stringLibrary[randomIndex];
  }

  const typeWord = (word: string, delay: number) => {
    let enteredPhrase = word;
    let result = '';

    while (result !== word) {
      setTimeout(() => {
        result += enteredPhrase[0];
        enteredPhrase = enteredPhrase.slice(1);
        setDisplayedText(result);
        console.log(displayedText);
      }, delay);
    }
  }

  setTimeout(() => {
    const nextWord = chooseRandomWord();
    setDisplayedText(nextWord);
  }, 4000);

  return (
    <div className="flex flex-col">
      <div>
        testing:
      </div>
      <div>
        {displayedText}
      </div>
    </div>
  )
}

export default Typewriter;