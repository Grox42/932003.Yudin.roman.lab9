var firstText;
var secondText;
var number;
var operation;
var modBorder;

function Initialization()
{
	firstText = document.getElementById("firstText");
	secondText = document.getElementById("secondText");
	firstText.textContent = '0';
	operation = '=';
}

function AddSym(symbol, button)
{
	Border(button);
	
	if (operation == '=') {
		firstText.textContent = '';
		operation = null;
	}
	
	if (firstText.textContent == '0' && symbol != '.') {
		firstText.textContent = "Error";
		secondText.textContent = '';
		operation = '=';
	}
	else if (firstText.textContent == '' && symbol == '.')
		firstText.textContent = '0' + symbol;
	else
		firstText.textContent += symbol;
}

function Border(button)
{
	if (modBorder)		
		modBorder.style.boxShadow = "none";
	button.style.boxShadow = "1px 1px 1px #76b3d8, -1px -1px 1px #76b3d8";
	modBorder = button;
}

function Operation(operat, button)
{
	Border(button);
	
	if (operation == null)
		operation = '=';
	
	if (operation != '=') {
		if (firstText.textContent == '') {
			operation = operat;
			secondText.textContent = 
			secondText.textContent.substring(0, secondText.textContent.length - 1) +
			operation;
			return;
		}
		firstText.textContent = CalculateNewNumber();
	}
	operation = operat;
	secondText.textContent = SetNumber() + operation;
	firstText.textContent = '';
}

function SetNumber()
{
	number = Number(document.getElementById("firstText").textContent);
	return number;
}

function Clear(button)
{
	Border(button);
	
	firstText.textContent = '0';
	secondText.textContent = '';
	operation = '=';
}

function RemoveLast(button)
{
	Border(button);
	
	firstText.textContent =
	firstText.textContent.substring(0, firstText.textContent.length - 1);
	if (firstText.textContent == '' && secondText.textContent == '') {
		firstText.textContent = '0';
		operation = '=';
	}
}

function Calculate(button)
{
	Border(button);
	
	if (secondText.textContent == '')
		return;
	
	firstText.textContent = CalculateNewNumber();
	secondText.textContent = '';
	operation = '=';
}

function CalculateNewNumber()
{
	switch (operation) {
		case '+':
			return number + SetNumber();
		case '-':
			return number - SetNumber();
		case '*':
			return number * SetNumber();
		case '/':
			return number / SetNumber();
	}
}