// To experiment with error handling , "threshold" values cause errors randomly

const THRESHOLD_A = 8; 

function tetheredGetNumber(resolve, reject) {
    setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if(value < THRESHOLD_A) {
        resolve(value);
    }  else {
        reject(`Too large:${value}`);
    }
    })

}