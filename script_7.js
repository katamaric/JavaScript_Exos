let userPhrase = prompt("Yo, quoi ?");

if (userPhrase.endsWith("?")) {
  console.log("Ouais Ouais...");
} else if (userPhrase === userPhrase.toUpperCase() && userPhrase.trim() !== "") {
  console.log("Pwa, calme-toi...");
} else if (userPhrase.toLowerCase().includes("fortnite")) {
  console.log("on s'fait une partie soum-soum ?");
} else if (userPhrase.trim() === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}

