const palindromeInput = document.getElementById("palindrome-input");
const palindromeBtn = document.getElementById("palindrome-btn");
const palindromeResult = document.getElementById("palindrome-result");

const checkValueP = () => {
  const userInput = palindromeInput.value;
  const input = userInput.toLowerCase().split(" ").join("");
  const reversedInput = input.toLowerCase().split("").reverse().join("");

  if (userInput === "") {
    alert("Please input a value");
  } else if (input === reversedInput) {
    palindromeResult.innerHTML = `${userInput} is a palindrome`;
    palindromeInput.value = "";
  } else {
    palindromeResult.innerHTML = `${userInput} is not a palindrome`;
    palindromeInput.value = "";
  }
};

palindromeBtn.addEventListener("click", checkValueP);
