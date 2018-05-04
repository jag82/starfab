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

// //first leaf keypoints
print('base1-L', 0);
print('base1-C', baseWidth/2);
print('peak1', baseWidth/2);
print('base1-R', baseWidth);


printBreak();

// //second leaf keypoints
const margin = fabricHeight / 10; //space between leaves on fabric (to reduce precise cutting requriements)

print('margin', margin);
printBreak();

const offset = ((baseWidth/2) + (middleWidth) - (baseWidth/2)) + margin;

print('base2-L', offset);
print('base2-C', offset + baseWidth/2);
print('peak2', offset + baseWidth/2);
print('base2-R', offset + baseWidth);

printBreak();


// fabric height measurements

print('fabric height', fabricHeight);

const unitHeight = data.height / marks.length;
for (let i = 0; i < marks.length; i++) {
    print(`h${i}`, i*unitHeight);
}

printBreak();


print('fabric width', baseWidth);
for (let i = 0; i < marks.length; i++) {
    print(`w${i}`, marks[i]);
}




