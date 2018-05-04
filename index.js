const name = process.argv[2]; //e.g. model-1m

const data = require(`./data/${name}.json`);

// for (let i = 0; i < data.marks.length; i++) {
//     j = data.marks.length - 1 - i;
//     const sum = (data.marks[i] + data.marks[j]).toFixed(3);
//     console.log(i + ' = ' + sum);
// }a

//widest mark (for a pair of leaves in AV position)
const middleWidth = data.marks[5];
const baseWidth = data.marks[0];

const margin = 0;
const offset = (baseWidth/2) + (middleWidth) - (baseWidth/2);

//
console.log(`${baseWidth/2} < ${offset} > ${baseWidth}`)
