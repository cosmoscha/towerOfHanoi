class HanoiGame {
  constructor(towers = [[3, 2, 1], [], []]) {
    this.towers = towers
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.towers[startTowerIdx]
    let endTower = this.towers[endTowerIdx]

    if ((endTower === undefined) ||
      (startTower === undefined) ||
      (startTower.length === 0)) {
      return false
    } else if (endTower.length === 0) {
      return true
    } else {
      return (startTower[startTower.length - 1] < endTower[endTower.length - 1])
    }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let endTower = this.towers[endTowerIdx]
      let startTower = this.towers[startTowerIdx]

      endTower.push(startTower.pop())
      return true;
    } else {
      return false;
    }
    // if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
    //   return false
    // }
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      let endTower = this.towers[endTowerIdx];
      let startTower = this.towers[startTowerIdx];

      endTower.push(startTower.pop());
      return true;
    } else {
      return false;
    }
  }



  isWon() { }

  // the below methods are complete and do not need to be modified
  print() {
    // will print our board nicely to our user
    console.log(JSON.stringify(this.towers));
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("Enter a starting tower: ", start => {
      const startTowerIdx = parseInt(start);
      reader.question("Enter an ending tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  run(reader, callback) {
    // we will prompt our user to provide a start and stop index using
    // a readline interface
    this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
      // if the move is invalid we tell the user
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("Invalid move!");
      }

      if (!this.isWon()) {
        // Continue to play!
        this.run(reader, callback);
      } else {
        this.print();
        console.log("You win!");
        callback();
      }
    });
  }
}

module.exports = HanoiGame;
