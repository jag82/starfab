const name = process.argv[2]; //e.g. model-1m
const data = require(`./data/${name}.json`);

function print(tag, number) {
    console.log(`${tag}: ${(number * 100).toFixed(1)} cm`);
}
function printBreak() {
    console.log('');
    console.log('===============');
    console.log('');
}

print('bow length (m)', data.bows);

const circumference = data.bows*2;
print('dome circumference', circumference);

const diameter = (circumference/Math.PI);
print('dome diameter', diameter);

const radius = diameter/2;
print('dome height', radius);

printBreak();


const fudge = 1.1; // 1.1 = 10% larger for covering outside of dome
const marks = data.marks.map((m) => {
    return m * fudge;
});
const fabricHeight = data.height * fudge;

//widest mark (for a pair of leaves in AV position)
const middleWidth = marks[5];
const baseWidth = marks[0];
const margin = .055;// .055m = 5.5cm 
const offset = ((baseWidth/2) + (middleWidth) - (baseWidth/2)) + margin;
print('margin', margin);
print('offset', offset);
print('MIDDLE-TO-MIDDLE', offset - (baseWidth/2) );
printBreak();

// //first side keypoints
print('base1-L', 0);
print('base1-C', baseWidth/2);
print('base1-R', baseWidth);
print('peak2', offset + baseWidth/2);


printBreak();

// //second side keypoints



printBreak();

print('peak1', baseWidth/2);
console.log('DRAW CENTER LINE');
print('fabric height', fabricHeight);
print('base2-L', offset);
print('base2-C', offset + baseWidth/2);
print('base2-R', offset + baseWidth);

printBreak();


// fabric height measurements
const unitHeight = fabricHeight / (marks.length-1);
for (let i = 0; i < marks.length; i++) {
    print(`h${i}`, i*unitHeight);
}
print('fabric height', fabricHeight);
printBreak();


// print('fabric width', baseWidth);
for (let i = 0; i < marks.length; i++) {
    print(`w${i}/2`, marks[i]/2);
    print(`w${i}`, marks[i]);
    printBreak();
}




