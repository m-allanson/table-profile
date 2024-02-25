import table from "table";
import { performance } from "perf_hooks";

// 3256 rows of data
import rows from "./rows.json" assert { type: "json" };

const columnWidths = { 0: 5, 1: 2, 2: 1, 3: 158, 4: 29 };
const messageWidth = 52;

const startTime = performance.now();

const output = table.table(rows, {
  border: table.getBorderCharacters("void"),
  columns: {
    0: {
      alignment: "right",
      width: columnWidths[0],
      paddingRight: 0,
      paddingLeft: 2,
    },
    1: { alignment: "left", width: columnWidths[1] },
    2: { alignment: "center", width: columnWidths[2] },
    3: {
      alignment: "left",
      width: messageWidth,
      wrapWord: true,
    },
    4: { alignment: "left", width: columnWidths[4], paddingRight: 0 },
  },
  drawHorizontalLine: () => false,
});

const endTime = performance.now();
const executionTime = (endTime - startTime) / 1000;

// console.log(output);
console.log(`Execution time:  ${executionTime.toFixed(2)} seconds`);
