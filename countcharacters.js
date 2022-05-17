// This function counts all the occurring characters in a string.
function count (string) {  
    let chars = {}
    string.split("").forEach(c => {
      !chars[c] ? chars[c] = 1 : chars[c]++
    })
    return chars
  }