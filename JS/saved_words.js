document.addEventListener("DOMContentLoaded", function () {
    showSavedWords();
  });
  
  const sampleWords = [
    "Extravagant - Having or displaying extreme or excessive behavior or emotions.",
    "Magnificent - Very impressive and beautiful.",
    "Ingenious - Clever and original.",
    "Innovative - New or original in ideas and methods.",
    "Comprehensive - Having an extensive mental range or grasp, as of a particular subject or many subjects.",
    "Dexterous - Having or showing great skill in using one's hands.",
    "Romantic - Relating to or suggestive of love or romance.",
    "Proactive - Intending or intended to produce a good result or avoid a problem, rather than waiting until there is a problem.",
    "Wealthy - Having a lot of money or possessions.",
    "Graceful - Moving or behaving in a smooth and elegant way.",
    "Gentle - Calm, kind, or soft.",
    "Scholarly - A scholarly person studies a lot and knows a lot about what they study.",
    "Boisterous - Noisy and lively."
  ];
  
  function showSavedWords() {
    const savedWords = sampleWords;
    const wordList = document.getElementById("wordList");
  
    if (savedWords.length === 0) {
      wordList.innerHTML = "<p>No words saved yet.</p>";
    } else {
      const listItems = savedWords.map((word) => {
        const listItem = document.createElement("li");
        listItem.textContent = word;
        return listItem;
      });
      listItems.forEach((item) => {
        wordList.appendChild(item);
      });
    }
  }
  