let currentWord = '';

function showRandomWord() {
    const words = [
        { word: "Extravagant", definition: "Having or displaying extreme or excessive behavior or emotions." },
        { word: "Magnificent", definition: "Very impressive and beautiful." },
        { word: "Ingenious", definition: "Clever and original." },
        { word: "Innovative", definition: "New or original in ideas and methods." },
        { word: "Comprehensive", definition: "Having an extensive mental range or grasp, as of a particular subject or many subjects." },
        { word: "Dexterous", definition: "Having or showing great skill in using one's hands." },
        { word: "Romantic", definition: "Relating to or suggestive of love or romance." },
        { word: "Proactive", definition: "Intending or intended to produce a good result or avoid a problem, rather than waiting until there is a problem." },
        { word: "Wealthy", definition: "Having a lot of money or possessions." },
        { word: "Graceful", definition: "Moving or behaving in a smooth and elegant way." },
        { word: "Gentle", definition: "Calm, kind, or soft." },
        { word: "Scholarly", definition: "A scholarly person studies a lot and knows a lot about what they study." },
        { word: "Boisterous", definition: "Noisy and lively." }
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    currentWord = randomWord;
    document.getElementById("wordOfDay").textContent = randomWord.word;
    document.getElementById("definition").style.display = 'none';
}

function revealDefinition() {
    if (currentWord) {
        document.getElementById("definition").textContent = currentWord.definition;
        document.getElementById("definition").style.display = 'block';
    }
}

function addNewWord() {
    const newWord = document.getElementById("newWord").value;
    const newDefinition = document.getElementById("newDefinition").value;
    const wordList = document.getElementById("wordList");

    if (newWord && newDefinition) {
        const newEntry = document.createElement("li");
        newEntry.innerHTML = `<strong>${newWord}:</strong> ${newDefinition}`;
        wordList.appendChild(newEntry);

        document.getElementById("newWord").value = "";
        document.getElementById("newDefinition").value = "";
    }
}
