let output = document.getElementById('output');
let input = document.getElementById('text-input');
let button = document.getElementById('button-input');

function reversal(string) {
	let reversedString = document.createElement('p');
	reversedString.innerHTML = string.split('').reverse().join('');
	output.appendChild(reversedString);
}

function alphabits(string) {
	let alphabetizedString = document.createElement('p');
	alphabetizedString.innerHTML = string.split('').sort().join('');
	output.appendChild(alphabetizedString);
}

function palindrome(string) {
	let palindromeTestResult = document.createElement('p');
	if (string.split('').reverse().join('') === string) {
		palindromeTestResult.innerHTML = "Your string is a palindrome";
	} else {
		palindromeTestResult.innerHTML = "Your string is not a palindrome";
	}
	output.appendChild(palindromeTestResult);
}

function processStrings() {
	output.innerHTML = "";
	var testString = input.value;
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}

input.addEventListener('keyup', function() {
	if (event.key === "Enter") {
		processStrings();
	}
});

button.addEventListener('click', function() {
	processStrings();
});


// var testString = "tacocat";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

