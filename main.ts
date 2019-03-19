// Here are the different types of blocks
// supported by MakeCode

//% color="#4C97FF"
namespace basic {

    /**
     * This is a statement block
     */
    //% block
    export function setup() {
        let countB = 0;
        let countA = 0;
        let teacher = 12345;
        radio.setGroup(1);
    }

    /**
     * This is a statement block
     */
    //% block
    export function reset() {

    }

    /**
     * This is a statement block
     */
    //% block
    export function showResults() {

    }

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function countVote(vote: number) {

    }
}

basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);