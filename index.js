// code your solution here
function superbowlWin(DenverBroncos) {
    for (let record of DenverBroncos) {
      if (record.result === "W") {
        return record.year;
      }
    }
  }

record.find(superbowlWin)