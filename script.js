// =============================
// Part 1: JavaScript Basics
// =============================

// Variable declarations & conditionals
const checkAgeBtn = document.getElementById("checkAgeBtn");
checkAgeBtn.addEventListener("click", () => {
  const age = parseInt(document.getElementById("userAge").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid number!";
  } else if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else {
    result.textContent = "❌ You are not eligible yet.";
  }
});

// =============================
// Part 2: Functions
// =============================

// Function 1: Calculate total of items
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function 2: Format a string
function formatMessage(name) {
  return `Hello, ${name}! Welcome to She Writes.`;
}

// Using function in DOM
document.getElementById("calcTotalBtn").addEventListener("click", () => {
  const cartPrices = [10, 20, 15, 5]; // Example cart
  const total = calculateTotal(cartPrices);
  document.getElementById("cartResult").textContent =
    `Your cart total is $${total}`;
});

// =============================
// Part 3: Loops
// =============================

// Loop example 1: Countdown
document.getElementById("countdownBtn").addEventListener("click", () => {
  let countdownText = "";
  for (let i = 5; i >= 1; i--) {
    countdownText += i + " ";
  }
  document.getElementById("countdownResult").textContent =
    `Countdown: ${countdownText}`;
});

// Loop example 2: Using forEach
const students = ["Anna", "Brian", "Cathy"];
students.forEach(student => {
  console.log(formatMessage(student));
});

// =============================
// Part 4: DOM Manipulation
// =============================

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight"); // Toggle highlight class
});

// Extra DOM Example: Change text on hover
toggleText.addEventListener("mouseover", () => {
  toggleText.textContent = "Hovered over me!";
});
toggleText.addEventListener("mouseout", () => {
  toggleText.textContent = "Click the button to highlight me!";
});
