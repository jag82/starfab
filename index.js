const name = process.argv[2]; //e.g. model-1m
const data = require(`./data/${name}.json`);
const fudge = 1.1; // 1.1 = 10% larger for covering outside of dome

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

//widest mark (for a pair of leaves in AV position)
const middleWidth = data.marks[5];
const baseWidth = data.marks[0];

// //first leaf keypoints
print('base1-L', 0);
print('base1-C', baseWidth/2);
print('peak1', baseWidth/2);
print('base1-R', baseWidth);


printBreak();

// //second leaf keypoints
const margin = 0;
const offset = ((baseWidth/2) + (middleWidth) - (baseWidth/2)) + margin;

print('base2-L', offset);
print('base2-C', offset + baseWidth/2);
print('peak2', offset + baseWidth/2);
print('base2-R', offset + baseWidth);

printBreak();

// fabric height measurements

print('fabric height', data.height);

const unitHeight = data.height / data.marks.length;
for (let i = 0; i < data.marks.length; i++) {
    print(`h${i}`, i*unitHeight);
}

printBreak();


print('fabric width', baseWidth);
for (let i = 0; i < data.marks.length; i++) {
    print(`w${i}`, data.marks[i]);
}




