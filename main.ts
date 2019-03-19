// Here are the different types of blocks
// supported by MakeCode

let last_vote = 0
let can_vote = 0
let countB = 0;
let countA = 0;
let teacher = 12345;

//% color="#abcdef"
namespace ClassPoll {

    /**
     * This is a statement block
     */
    //% block
    export function setup() {
        radio.setGroup(1);
    }

    /**
     * This is a statement block
     */
    //% block
    export function voteA() {
        if (can_vote == 1) {
            radio.sendValue("vote", 1);
            last_vote = 1;
            can_vote = 0;
            basic.showString("A");
        }
    }

    /**
     * This is a statement block
     */
    //% block
    export function voteB() {
        if (can_vote == 1) {
            radio.sendValue("vote", 2);
            last_vote = 2;
            can_vote = 0;
            basic.showString("B");
        }
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
    export function printForTeacher() {
        basic.showString("A =");
        basic.showNumber(countA);
        basic.showString("B =");
        basic.showNumber(countB);
    }

    /**
     * This is a statement block
     */
    //% block
    export function printforStudent() {
        if (can_vote == 1) {
            basic.showString("A or B?")
        } else if (last_vote == 1) {
            basic.showString("A")
        } else if (last_vote == 2) {
            basic.showString("B")
        } else {
            basic.showString("")
        }
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

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function checkForReset(name: string, value: number) {
        if (name == "reset" && value == teacher) {
            can_vote = 1;
        }
    }
}
