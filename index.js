// Code your solutions in this file

function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
    
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }

    return thankYouMessages;
  }
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(5); // This will count down from 5 to 0 
  
  
  
 