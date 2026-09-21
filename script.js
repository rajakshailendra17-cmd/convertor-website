document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("convertBtn");
    button.addEventListener("click", convertNumber);
});

function convertNumber() {
    const numStr = document.getElementById("number").value.trim();
    const base = parseInt(document.getElementById("base").value);
    const outputDiv = document.getElementById("output");

    if (numStr === "") {
        outputDiv.innerHTML = "<p style='color:red;'>Please enter a number.</p>";
        return;
    }

    // Validate input according to selected base
    const regexMap = {
        2: /^[01]+$/,             // Binary
        8: /^[0-7]+$/,            // Octal
        10: /^[0-9]+$/,           // Decimal
        16: /^[0-9A-Fa-f]+$/      // Hexadecimal
    };

    if (!regexMap[base].test(numStr)) {
        outputDiv.innerHTML = "<p style='color:red;'>Invalid number for the selected base.</p>";
        return;
    }

    // Convert to decimal first
    const decimalValue = parseInt(numStr, base);

    // Show conversions
    outputDiv.innerHTML = `
    <p><strong>Decimal:</strong> ${decimalValue}</p>
    <p><strong>Binary:</strong> ${decimalValue.toString(2)}</p>
    <p><strong>Octal:</strong> ${decimalValue.toString(8)}</p>
    <p><strong>Hexadecimal:</strong> ${decimalValue.toString(16).toUpperCase()}</p>
  `;
}
