class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const wordArray = string.toLowerCase().split(" ");
    let words = wordArray.map(word => {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from'){
        return word[0].toUpperCase() + word.slice(1)
      } else {
        return word
      }
    }).join(" ")
    return words[0].toUpperCase() + words.slice(1)
  }  
}

console.log(Formatter.titleize("my name is kathy"))