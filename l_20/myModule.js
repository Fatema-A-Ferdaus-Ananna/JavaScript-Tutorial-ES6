export let text = "Welcome to Module";
export let text2 = "How Can I Help You";

const setText = (changeText)=>{
    text = changeText;
}
export {setText as changeMessage } 