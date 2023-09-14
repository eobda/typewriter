const sentence = "hello there from lighthouse labs";
let timer = 0;

for (const char of sentence) {
  // Prints each character of sentence
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  
  // Timer increments to prepare for next character
  timer += 50;
}

// Writes a final newline character so next prompt starts on its own line
process.stdout.write('\n');