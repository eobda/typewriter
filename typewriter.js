const sentence = "hello there from lighthouse labs";
let timer = 0;

// Prints each character of sentence
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}