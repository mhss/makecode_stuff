// Here are the different types of blocks
// supported by MakeCode

let countB = 0;
let countA = 0;
let teacher = 12345;

//% color="#4C97FF"
namespace basic {

    /**
     * This is a statement block
     */
    //% block
    export function setupTeacher() {
        radio.setGroup(1);
    }

    /**
     * This is a statement block
     */
    //% block
    export function sendReset() {
        radio.sendValue("reset", teacher);
        countA = 0;
        countB = 0;

    }

    /**
     * This is a statement block
     */
    //% block
    export function printResults() {
        basic.showString("A =");
        basic.showNumber(countA);
        basic.showString("B =");
        basic.showNumber(countB);
    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function countVote(name: string, value: number) {
        if (name == "vote") {
            if (value == 1) {
                countA = countA + 1;
            } else if (value == 2) {
                countB = countB + 1;
            } else {
    
            }
        }
    }
}
