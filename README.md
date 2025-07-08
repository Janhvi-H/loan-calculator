# Loan Calculator

A simple and user-friendly loan calculator built with HTML, CSS, and JavaScript. This project allows users to calculate loan payments, including monthly payments, total interest, and total cost, based on the loan amount, interest rate, and loan term.

## Demo

Check out the live demo [here](https://janhvi-h.github.io/loan-calculator/).

## Features

- Calculate monthly payments, total interest, and total loan cost
- Responsive design for seamless use on desktop and mobile devices
- Input validation to ensure accurate calculations
- Clean and intuitive user interface

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Janhvi-H/loan-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd loan-calculator
   ```
3. Open `index.html` in your preferred browser to use the loan calculator locally.

## Usage

1. Include the necessary files in your project:
   - `index.html`: The main HTML structure
   - `styles.css`: Styling for the calculator interface
   - `script.js`: JavaScript logic for loan calculations
2. Enter the loan amount, interest rate, and loan term in the input fields.
3. Click the "Calculate" button to view the results, including monthly payment, total interest, and total cost.
4. Customize the styling by modifying `styles.css` or adjust the calculation logic in `script.js` as needed.

Example HTML structure:
```html
<div class="calculator-container">
  <input type="number" id="loan-amount" placeholder="Loan Amount">
  <input type="number" id="interest-rate" placeholder="Interest Rate (%)">
  <input type="number" id="loan-term" placeholder="Loan Term (years)">
  <button onclick="calculateLoan()">Calculate</button>
  <div id="results"></div>
</div>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out via [GitHub Issues](https://github.com/Janhvi-H/loan-calculator/issues).
