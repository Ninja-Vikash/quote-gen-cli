const fs = require("fs");
const path = require("path");

const quotesFile = path.join(__dirname, '../quotes.json');

function resetQuotes() {
  fs.writeFileSync(quotesFile, JSON.stringify([]), "utf-8");
}

resetQuotes();