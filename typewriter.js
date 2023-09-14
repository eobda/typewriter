const sentence = "hello there from lighthouse labs";

// Prints each character of sentence
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000)
}