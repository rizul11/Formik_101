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
    }, 500);

    function determineParity(value) {
        const isOdd = value % 2 === 1;
        return{ value, isOdd};
    }

    function troubleWithGetNumber(reason){
        const err = new Error("Trouble getting number" , {cause : reason});
        console.error(err);
        
    }

}