#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const quotesFile = path.join(__dirname, '../quotes.json');
const args = process.argv.slice(2);

function loadQuotes() {
  try {
    const data = fs.readFileSync(quotesFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveQuotes(quotes) {
  fs.writeFileSync(quotesFile, JSON.stringify(quotes, null, 2), 'utf8');
}

if (args[0] === '--add' && args[1]) {
  const newQuote = args.slice(1).join(' ');
  const quotes = loadQuotes();
  quotes.push(newQuote);
  saveQuotes(quotes);
  console.log(`\n💬 New quote added:\n"${newQuote}"\n`);
} else {
  const quotes = loadQuotes();
  if (quotes.length === 0) {
    console.log("\n😢 No quotes available.\n");
  } else {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(`\n🌟 Motivational Quote:\n"${quotes[randomIndex]}"\n`);
  }
}
