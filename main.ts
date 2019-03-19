// Here are the different types of blocks
// supported by MakeCode

//% color="#abcdef"
namespace ClassPoll {
    /**
     * This is a statement block
     */
    //% block
    export function Setup() {
        radio.setGroup(4);
        radio.setTransmitSerialNumber(true);
        basic.showIcon(IconNames.Ghost);
    }

    /**
     * This is a statement block
     */
    //% block
    export function VoteForA() {
        radio.sendNumber(0);
        basic.showString("A");
    }

    /**
     * This is a statement block
     */
    //% block
    export function VoteForB() {
        radio.sendNumber(255);
        basic.showString("B");
    }
}
