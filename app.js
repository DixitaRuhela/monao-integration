code => {
    const excludedCharacters = ["\t"];
    const filteredCode = code.split("").filter(char => !excludedCharacters.includes(char)).join("");
    return filteredCode;
  }