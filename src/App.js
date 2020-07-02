import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import words from "./word.json";
import letters from "./letter.json";
import hearts from "./heart.json"

function App() {


    /*function wordRandom() {
      var randomWords = require('random-words')
      return randomWords()
    }*/
    const word = words[Math.floor(Math.random() * words.length)]
    const splitWord = hiddenWord()
    console.log(splitWord)

    const [triedLetters, setTriedLetters] = useState("")
    const [life, setLife] = useState(hearts)

    function changeWord(event) {
        let triedLetter = (event.target.value)
        let letter = splitWord.indexOf(triedLetter)
        let char = splitWord[letter]
        word.replace("_ ", char)
        //setTriedLetters([...triedLetter])
        console.log(char)
        if (letter == -1)
        life.splice(0,1)
        setLife([...life])
        console.log(life)
    }
    function hiddenWord() {
        var chars = word.split('')
        const tabWord = []
        for (const char of chars) {
            const hiddenChar = "_ "
            tabWord.push(hiddenChar)
        }
        return tabWord
    }


    function loseLife() {

    }

    function displayLife() {

    }

    function isLost() {

    }
    function showWord() {
        if (life == "")
        return word
    }

    function displayButtons() {
        //const alphabet = []
        return letters.map((letter, id) => <button key={id} value={letter} onClick={changeWord}>{letter}</button>)
        //
    }

    return (

        <div className="App">
            <h4>Vies: {hearts}</h4>
            <p>{hiddenWord()}</p>
            {displayButtons()}
        </div>
    );
}

export default App;
