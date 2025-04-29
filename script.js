// Climate facts array
const climateFacts = [
    "The Earth's temperature has risen by 1.1°C since the late 19th century.",
    "Oceans have absorbed about 90% of the increased atmospheric heat.",
    "Arctic sea ice is declining at a rate of 12.85% per decade.",
    "Renewable energy could power the world by 2050 if we invest properly.",
    "Food production accounts for 26% of global greenhouse gas emissions.",
    "Protecting forests could provide 30% of the solution to climate change.",
    "A plant-based diet can reduce your carbon footprint by up to 73%."
];

// Change climate facts dynamically
const climateFactElement = document.getElementById('climate-fact');
const factChangerBtn = document.getElementById('fact-changer');

factChangerBtn.addEventListener('click', function() {
    const randomFact = climateFacts[Math.floor(Math.random() * climateFacts.length)];
    climateFactElement.textContent = randomFact;
    climateFactElement.classList.add('fact-highlight');
    
    // Remove highlight after animation
    setTimeout(() => {
        climateFactElement.classList.remove('fact-highlight');
    }, 1000);
});

// Carbon footprint calculator tips
const calculatorBox = document.getElementById('calculator-box');
const tips = [
    "Tip: Switch to LED bulbs to save 75% energy",
    "Tip: A vegetarian meal saves 50% carbon vs meat",
    "Tip: Line drying clothes saves 3kg CO2 per load",
    "Tip: Public transport emits 1/10 of car emissions",
    "Tip: A reusable bottle saves 167 bottles/year"
];

calculatorBox.addEventListener('mouseover', function() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    calculatorBox.textContent = randomTip;
    calculatorBox.style.backgroundColor = "#a5d6a7";
    calculatorBox.style.transform = "scale(1.02)";
});

calculatorBox.addEventListener('mouseout', function() {
    calculatorBox.textContent = "Hover to see your impact reduction tips";
    calculatorBox.style.backgroundColor = "var(--light-green)";
    calculatorBox.style.transform = "scale(1)";
});

// Toggle action items
const toggleActionBtn = document.getElementById('toggle-action');
const actionContainer = document.getElementById('action-container');
let actionsVisible = false;
const actionItems = [
    "Switch to renewable energy providers",
    "Reduce meat consumption by 50%",
    "Commit to zero single-use plastics",
    "Plant 10 trees this year",
    "Join a local environmental group"
];

toggleActionBtn.addEventListener('click', function() {
    if (actionsVisible) {
        actionContainer.innerHTML = '';
        toggleActionBtn.textContent = "Show Action Items";
    } else {
        actionContainer.innerHTML = '<h3>You Can:</h3>';
        actionItems.forEach(item => {
            const actionElement = document.createElement('div');
            actionElement.className = 'action-item';
            actionElement.textContent = item;
            actionContainer.appendChild(actionElement);
        });
        toggleActionBtn.textContent = "Hide Action Items";
    }
    actionsVisible = !actionsVisible;
});

// Animate title with climate colors
const colors = ['#2e8b57', '#3cb371', '#228b22', '#006400', '#8b4513'];
let currentColorIndex = 0;
const mainTitle = document.getElementById('main-title');

setInterval(function() {
    mainTitle.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}, 2000);