const fs = require("fs");
const path = require("path");

const defaultQuotes = path.join(__dirname, "./data.json");
const quotesFile = path.join(__dirname, '../quotes.json');

function loadDefaultQuotes() {
  try {
    const data = fs.readFileSync(defaultQuotes, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function setDefault(){
  const loadedQuotes = loadDefaultQuotes();
  fs.writeFileSync(quotesFile, JSON.stringify(loadedQuotes, null, 2), "utf-8");
}

setDefault();