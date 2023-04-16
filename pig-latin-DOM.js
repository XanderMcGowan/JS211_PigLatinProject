const wordInput = (str) => {
    str = document.getElementById("user-input").value

    pigLatin(str)
}


const pigLatin = (word) => {
    word = word.trim().toLowerCase();
    let vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(word[0])) {
        document.getElementById("results").innerHTML = "Results: " + word + "yay"
        return;
    } else {
      for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word.charAt(i))) {
          let endLetters = word.substring(i, word.length);
          let firstLetters = word.substring(0, i);
          document.getElementById("results").innerHTML = "Results: " + endLetters + firstLetters + "ay"
          return;
        }
      }
    }
  };
  