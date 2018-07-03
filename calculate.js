class Processor {
  constructor(string, dictionary) {
    this.string = string;
    this.dictionary = dictionary;
    this.scoreBoard = {};
  }

  find(str) {
    if (!str) {
      return this.find(this.string) || 0;
    }

    if (this.scoreBoard[str]) {
      return this.scoreBoard[str];
    }

    this.scoreBoard[str] = this.dictionary[str];

    if (str.length === 1) {
      return this.scoreBoard[str];
    }

    for (let i = 1; i < str.length; ++i) {
      const leftSubstringScore = this.find(str.substring(0, i));
      const rightSubstringScore = this.find(str.substring(i, str.length));
  
      if (typeof leftSubstringScore === 'number' && typeof rightSubstringScore === 'number') {
        const score = leftSubstringScore + rightSubstringScore;
        if (typeof this.scoreBoard[str] !== 'number'|| score > this.scoreBoard[str]) {
          this.scoreBoard[str] = score;
        }
      }
    }
    
    return this.scoreBoard[str];
  }
}

module.exports = function (string, dictionary) {
  const instance = new Processor(string, dictionary);
  return instance.find();
}