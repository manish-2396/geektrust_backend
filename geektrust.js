const fs = require("fs");

const filename = process.argv;

// console.log(filename)

let arr = filename[3].split(" ");

let CENTRAL = {};
let CENTRAL_ARRAY = [];
let AIRPORT = {};
let AIRPORT_ARRAY = [];
let BALANCE = {};

let METROCARD_NUMBER = {};

let CENTRAL_COLLECTION = 0;
let AIRPORT_COLLECTION = 0;
let CENTRAL_DISCOUNT = 0;
let AIRPORT_DISCOUNT = 0;

switch (arr[0]) {
  case "BALANCE": {
    fs.appendFile(filename[2], `\n${filename[3]}`, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
    break;
  }

  case "CHECK_IN": {
    fs.appendFile(filename[2], `\n${filename[3]}`, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
    break;
  }

  case "PRINT_SUMMARY": {
    fs.readFile(filename[2], "utf8", (err, data) => {
      if (err) throw err;
      var inputLines = data.toString().split("\n");

      for (let i = 1; i < inputLines.length; i++) {
        let input = inputLines[i].split(" ");

        if (input[0] === "BALANCE") {
          if (BALANCE[input[1]]) {
            BALANCE[input[1]] += Number(input[2]);
          } else {
            BALANCE[input[1]] = Number(input[2]);
          }
        } else {
          if (input[3] === "CENTRAL") {
            if (!CENTRAL[input[2]]) {
              CENTRAL[input[2]] = 1;
            } else {
              CENTRAL[input[2]]++;
            }

            if (input[2] === "ADULT") {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[1] >= 100]) {
                  BALANCE[input[1]] -= 100;
                } else {
                  CENTRAL_COLLECTION += (100 - BALANCE[input[1]]) * 0.02;

                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 100;
                CENTRAL_DISCOUNT += 100;
                delete METROCARD_NUMBER[input[1]];
              } else {
                if (BALANCE[input[1]] >= 200) {
                  BALANCE[input[1]] -= 200;
                } else {
                  CENTRAL_COLLECTION += (200 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 200;
                METROCARD_NUMBER_DATA(input[1]);
              }
            } else if (input[2] === "SENIOR_CITIZEN") {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[1]] >= 50) {
                  BALANCE[input[1]] -= 50;
                } else {
                  CENTRAL_COLLECTION += (50 - BALANCE[input[1]]) * 0.02;

                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 50;
                CENTRAL_DISCOUNT += 50;
                delete METROCARD_NUMBER[input[1]];
              } else {
                if (BALANCE[input[1]] >= 100) {
                  BALANCE[input[1]] -= 100;
                } else {
                  CENTRAL_COLLECTION += (100 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 100;
                METROCARD_NUMBER_DATA(input[1]);
              }
            } else {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[1]] >= 25) {
                  BALANCE[input[1]] -= 25;
                } else {
                  CENTRAL_COLLECTION += (25 - BALANCE[input[1]]) * 0.02;

                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 25;
                CENTRAL_DISCOUNT += 25;
                delete METROCARD_NUMBER[input[1]];
              } else {
                if (BALANCE[input[1]] >= 50) {
                  BALANCE[input[1]] -= 50;
                } else {
                  CENTRAL_COLLECTION += (50 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                CENTRAL_COLLECTION += 50;
                METROCARD_NUMBER_DATA(input[1]);
              }
            }
          } else {
            if (!AIRPORT[input[2]]) {
              AIRPORT[input[2]] = 1;
            } else {
              AIRPORT[input[2]]++;
            }

            if (input[2] === "ADULT") {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[1]] >= 100) {
                  BALANCE[input[1]] -= 100;
                } else {
                  AIRPORT_COLLECTION += (100 - BALANCE[input[1]]) * 0.02;

                  BALANCE[input[1]] = 0;
                }
                AIRPORT_COLLECTION += 100;
                AIRPORT_DISCOUNT += 100;
                delete METROCARD_NUMBER[input[1]];
              } else {
                if (BALANCE[input[1]] >= 200) {
                  BALANCE[input[1]] -= 200;
                } else {
                  AIRPORT_COLLECTION += (200 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                AIRPORT_COLLECTION += 200;
                METROCARD_NUMBER_DATA(input[1]);
              }
            } else if (input[2] === "SENIOR_CITIZEN") {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[i]] >= 50) {
                  BALANCE[input[1]] -= 50;
                } else {
                  AIRPORT_COLLECTION += (50 - BALANCE[input[1]]) * 0.02;

                  BALANCE[input[1]] = 0;
                }
                AIRPORT_COLLECTION += 50;
                AIRPORT_DISCOUNT += 50;
                delete METROCARD_NUMBER[input[1]];
              } else {
                if (BALANCE[input[1]] >= 100) {
                  BALANCE[input[1]] -= 100;
                } else {
                  AIRPORT_COLLECTION += (100 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                AIRPORT_COLLECTION += 100;
                METROCARD_NUMBER_DATA(input[1]);
              }
            } else {
              if (METROCARD_NUMBER[input[1]]) {
                if (BALANCE[input[1]] >= 25) {
                  BALANCE[input[1]] -= 25;
                } else {
                  AIRPORT_COLLECTION += (25 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                delete METROCARD_NUMBER[input[1]];
                AIRPORT_COLLECTION += 25;
                AIRPORT_DISCOUNT += 25;
              } else {
                if (BALANCE[input[1]] >= 50) {
                  BALANCE[input[1]] -= 50;
                } else {
                  AIRPORT_COLLECTION += (50 - BALANCE[input[1]]) * 0.02;
                  BALANCE[input[1]] = 0;
                }
                AIRPORT_COLLECTION += 50;
                METROCARD_NUMBER_DATA(input[1]);
              }
            }
          }
        }
      }

      for (let person in CENTRAL) {
        CENTRAL_ARRAY.push([person, CENTRAL[person]]);
      }
      for (let person in AIRPORT) {
        AIRPORT_ARRAY.push([person, AIRPORT[person]]);
      }
      CENTRAL_ARRAY = CENTRAL_ARRAY.sort();
      AIRPORT_ARRAY = AIRPORT_ARRAY.sort();

      CENTRAL_ARRAY = CENTRAL_ARRAY.sort((a, b) => {
        return b[1] - a[1];
      });

      AIRPORT_ARRAY = AIRPORT_ARRAY.sort((a, b) => {
        return b[1] - a[1];
      });

      console.log(
        "TOTAL_COLLECTION",
        "CENTRAL",
        CENTRAL_COLLECTION,
        CENTRAL_DISCOUNT
      );
      console.log("PASSENGER_TYPE_SUMMARY");
      CENTRAL_ARRAY.forEach((person) => {
        console.log(person[0], person[1]);
      });
      console.log(
        "TOTAL_COLLECTION",
        "AIRPORT",
        AIRPORT_COLLECTION,
        AIRPORT_DISCOUNT
      );
      console.log("PASSENGER_TYPE_SUMMARY");
      AIRPORT_ARRAY.forEach((person) => {
        console.log(person[0], person[1]);
      });
    });
    break;
  }

  default: {
    console.log("Something went wrong");
  }
}

function METROCARD_NUMBER_DATA(input) {
  if (!METROCARD_NUMBER[input]) {
    METROCARD_NUMBER[input] = 1;
  }
}
