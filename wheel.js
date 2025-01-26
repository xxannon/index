console.log('Recipe picker is running');

const mealTypeDropdown = document.getElementById('mealType');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');
const shuffleButton = document.querySelector('.shuffle-button');

// Get URL parameters for dietary restrictions
const urlParams = new URLSearchParams(window.location.search);
const dietaryPreference = urlParams.get('diet');

const meals = {
    appetizer: [
        'Bruschetta', 'Spring Rolls', 'Tomato Soup', 'Greek Salad', 'Buffalo Wings',
        'Loaded Nachos', 'Spinach Dip', 'Mozzarella Sticks', 'Garlic Bread',
        'Potato Skins', 'Hummus', 'Guacamole', 'Calamari', 'Stuffed Mushrooms',
        'Deviled Eggs', 'Chicken Satay', 'Crab Cakes', 'Jalapeño Poppers',
        'Shrimp Cocktail', 'Caprese Salad', 'Onion Rings', 'Bacon Wrapped Dates',
        'Coconut Shrimp', 'Stuffed Peppers', 'Baked Brie', 'Chicken Wings',
        'Edamame', 'Fruit Salsa', 'Cheese Platter', 'Stuffed Dates',
        'Zucchini Fritters', 'Beef Tartare', 'Prosciutto Melon', 'Cucumber Bites',
        'Salmon Tartare', 'Mushroom Caps', 'Olive Tapenade', 'Pesto Crostini',
        'Beef Carpaccio', 'Tempura Veggies', 'Tuna Tartare', 'Spanakopita',
        'Arancini', 'Empanadas', 'Samosas', 'Gyoza', 'Ceviche',
        'Bacon Wrapped Scallops', 'Baked Brie en Croûte', 'Buffalo Chicken Dip',
        'Caprese Skewers', 'Charcuterie Board', 'Crispy Calamari Rings',
        'Egg Rolls', 'French Onion Soup', 'Fried Pickles',
        'Garlic Knots', 'Greek Meatballs', 'Lobster Bisque',
        'Mini Quiche', 'Oysters Rockefeller', 'Shrimp Tempura'
    ],
    entree: [
        'Fettuccine Alfredo',
        'Spaghetti and Meatballs',
        'Pasta Carbonara',
        'Chicken Parmesan',
        'Beef Stir Fry',
        'Grilled Salmon',
        'Chicken Marsala',
        'Beef Wellington',
        'Shrimp Scampi',
        'Vegetable Curry',
        'Pad Thai',
        'Fish Tacos',
        'Beef Stroganoff',
        'Chicken Tikka Masala',
        'Eggplant Parmesan',
        'Pork Tenderloin',
        'Lamb Chops',
        'Mushroom Risotto',
        'Teriyaki Chicken',
        'Beef Tacos',
        'Chicken Piccata',
        'Miso Glazed Salmon',
        'Vegetable Stir Fry',
        'Beef Brisket',
        'Chicken Fajitas',
        'Lobster Ravioli',
        'Duck Breast',
        'Tofu Curry',
        'Seafood Paella',
        'Pork Schnitzel',
        'Korean Army Stew',
        'Mongolian Beef',
        'Sweet and Sour Pork',
        'Szechuan Chicken',
        'Egg Foo Young',
        'General Tso\'s Chicken',
        'Orange Beef',
        'Salt and Pepper Shrimp',
        'Singapore Noodles',
        'Chow Mein',
        'Lo Mein',
        'Ma Po Tofu',
        'Twice Cooked Pork',
        'Dongpo Pork',
        'Beef Chow Fun',
        'Crispy Skin Chicken',
        'Black Pepper Crab',
        'Chili Crab',
        'Katsu Curry',
        'Sukiyaki',
        'Shabu Shabu',
        'Gyudon',
        'Oyakodon',
        'Katsudon',
        'Tempura Bowl',
        'Unagidon',
        'Chicken Chettinad',
        'Fish Molee',
        'Lamb Dhansak',
        'Chicken Jalfrezi',
        'Prawn Malai Curry',
        'Mutton Do Pyaza',
        'Chicken Madras',
        'Fish Amritsari',
        'Kadai Chicken',
        'Lamb Pasanda',
        'Chicken Dopiaza',
        'Egg Curry',
        'Railway Mutton Curry',
        'Goan Fish Curry',
        'Chicken Xacuti',
        'Kashmiri Rogan Josh',
        'Lamb Kleftiko',
        'Stuffed Calamari',
        'Grilled Sea Bream',
        'Rabbit Stifado',
        'Pastitsada',
        'Soutzoukakia',
        'Gemista',
        'Youvetsi',
        'Imam Bayildi',
        'Turkish Pide',
        'Lahmacun',
        'Iskender Kebab',
        'Ali Nazik',
        'Hunkar Begendi',
        'Sultan\'s Delight',
        'Manti',
        'Patlican Kebab',
        'Duck à l\'Orange',
        'Blanquette de Veau',
        'Sole Meunière',
        'Steak au Poivre',
        'Côte de Boeuf',
        'Cassoulet',
        'Chickpea Curry',
        'Lentil Shepherd\'s Pie',
        'Stuffed Portobello Mushrooms',
        'Cauliflower Steak',
        'Jackfruit Pulled "Pork"',
        'Buddha Bowl',
        'Quinoa Stuffed Peppers',
        'Vegan Meatballs',
        'Sweet Potato Black Bean Tacos',
        'Mushroom Walnut "Meat" Loaf',
        'Tempeh Stir Fry',
        'Seitan "Chicken" Piccata',
        'Eggplant Involtini',
        'Zucchini Lasagna',
        'Choucroute Garnie',
        'Ossobuco',
        'Saltimbocca',
        'Vitello Tonnato',
        'Bistecca alla Fiorentina',
        'Zürcher Geschnetzeltes',
        'Beef Rouladen',
        'Schweinshaxe',
        'Königsberger Klopse',
        'Coq au Vin',
        'Nashville Hot Chicken',
        'Country Fried Steak',
        'Low Country Boil',
        'New England Boiled Dinner',
        'Cincinnati Chili',
        'Detroit-Style Pizza',
        'St. Louis Ribs',
        'Kansas City BBQ',
        'Texas Brisket',
        'Mississippi Pot Roast',
        'Blackened Catfish',
        'Crawfish Etouffee',
        'Shrimp and Grits',
        'Cajun Ribeye',
        'Smothered Pork Chops',
        'Honey Glazed Ham',
        'Prime Rib',
        'Rack of Lamb',
        'Grilled T-Bone Steak',
        'Braised Short Ribs',
        'Roasted Turkey',
        'Cornish Game Hen',
        'Glazed Duck Breast',
        'Pan Seared Scallops',
        'Lobster Tail',
        'Crab Imperial',
        'Stuffed Flounder',
        'Grilled Swordfish',
        'Bacon Wrapped Filet',
        'Veal Chop',
        'Chicken Pot Pie',
        'Shepherd\'s Pie',
        'Cottage Pie',
        'Meatloaf with Gravy',
        'Roasted Chicken',
        'Beef Stew',
        'Chicken and Dumplings',
        'Pot Roast',
        'Stuffed Pork Chops',
        'Grilled Ribeye',
        'Chicken Cordon Bleu',
        'Beef Tenderloin',
        'Roasted Leg of Lamb',
        'Grilled Porterhouse',
        'Stuffed Chicken Breast',
        'BBQ Baby Back Ribs',
        'Braised Lamb Shanks',
        'Grilled Veal Chop',
        'Pan Roasted Duck',
        'Smoked Brisket',
        'Roasted Pheasant',
        'Grilled Venison',
        'Stuffed Turkey Breast',
        'Braised Oxtail',
        'Grilled Quail',
        'Roasted Goose',
        'Smoked Turkey Legs',
        'Grilled Lamb Kebabs',
        'Pan Seared Halibut',
        'Blackened Redfish'
    ],
    sides: [
        'French Fries', 'Steamed Rice', 'Roasted Vegetables', 'Mashed Potatoes',
        'Mac and Cheese', 'Grilled Asparagus', 'Sweet Potato Fries', 'Quinoa Pilaf',
        'Garlic Green Beans', 'Coleslaw', 'Rice Pilaf', 'Roasted Brussels Sprouts',
        'Potato Salad', 'Corn on the Cob', 'Sautéed Mushrooms', 'Glazed Carrots',
        'Creamed Spinach', 'Scalloped Potatoes', 'Baked Sweet Potato',
        'Cauliflower Gratin', 'Roasted Broccoli', 'Sautéed Spinach',
        'Grilled Zucchini', 'Roasted Cauliflower', 'Wild Rice', 'Garlic Bread',
        'Caesar Salad', 'Mixed Green Salad', 'Roasted Potatoes', 'Steamed Broccoli'
    ],
    dessert: [
        'Chocolate Cake', 'Apple Pie', 'Cheesecake', 'Brownies', 'Tiramisu',
        'Ice Cream Sundae', 'Crème Brûlée', 'Chocolate Chip Cookies', 'Carrot Cake',
        'Lemon Bars', 'Bread Pudding', 'Peach Cobbler', 'Panna Cotta', 'Fruit Tart',
        'Red Velvet Cake', 'Chocolate Mousse', 'Key Lime Pie', 'Banana Bread',
        'Blueberry Muffins', 'Macarons', 'Churros', 'Baklava', 'Cannoli',
        'Crêpes', 'Gelato', 'Profiteroles', 'Tres Leches Cake', 'Pavlova',
        'Flan', 'Rice Pudding',
        'Black Forest Cake', 'Lemon Meringue Pie', 'Molten Chocolate Cake',
        'Strawberry Shortcake', 'Banoffee Pie', 'Chocolate Soufflé',
        'Vanilla Bean Cheesecake', 'Raspberry Tart', 'Almond Biscotti',
        'Coconut Macaroons', 'Caramel Apple Crisp', 'Dark Chocolate Truffles',
        'Pumpkin Pie', 'Bread & Butter Pudding', 'Mango Sorbet'
    ],
    breakfast: [
        'Pancakes', 'French Toast', 'Eggs Benedict', 'Breakfast Burrito',
        'Avocado Toast', 'Omelette', 'Waffles', 'Breakfast Sandwich',
        'Oatmeal', 'Frittata', 'Breakfast Hash', 'Eggs and Bacon',
        'Breakfast Quesadilla', 'Yogurt Parfait', 'Breakfast Pizza',
        'Huevos Rancheros', 'Breakfast Bowl', 'Breakfast Tacos',
        'Shakshuka', 'Breakfast Casserole', 'Quiche', 'Breakfast Potatoes',
        'Breakfast Muffins', 'Breakfast Smoothie Bowl', 'Eggs Florentine',
        'Breakfast Wrap', 'Breakfast Skillet', 'Breakfast Strata',
        'Breakfast Bagel', 'Continental Breakfast',
        'Eggs Royale', 
        'Corned Beef Hash',
        'Breakfast Burrito Bowl',
        'Eggs in Purgatory',
        'Breakfast Grilled Cheese',
        'Breakfast Enchiladas',
        'Cinnamon Rolls',
        'Eggs in a Basket',
        'Breakfast Poutine',
        'Breakfast Ramen',
        'Breakfast Fried Rice',
        'Chilaquiles',
        'Breakfast Flatbread',
        'Croissant Sandwich',
        'Breakfast Empanadas',
        'Protein Pancakes',
        'Acai Bowl',
        'Breakfast Charcuterie Board',
        'Breakfast Nachos',
        'Breakfast Stuffed Peppers',
        'Breakfast Sushi Roll',
        'Monte Cristo Sandwich',
        'Breakfast Calzone',
        'Breakfast Pita Pocket',
        'Breakfast Tostadas',
        'Breakfast Egg Rolls',
        'Breakfast Burritos',
        'Breakfast Sliders',
        'Breakfast Quiche Lorraine',
        'Breakfast Focaccia'
    ]
};

let currentRecipes = [];
let isFlipped = false;

// Update the event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Event Listeners
    mealTypeDropdown.addEventListener('change', handleMealTypeChange);
    card.addEventListener('click', flipCard);
    shuffleButton.addEventListener('click', shuffleNewRecipe);

    // Initially hide the shuffle button
    shuffleButton.style.display = 'none';
});

function handleMealTypeChange() {
    const selectedType = mealTypeDropdown.value;
    console.log('Selected meal type:', selectedType);
    
    if (selectedType) {
        // Get recipes based on dietary preference
        currentRecipes = dietaryPreference ? 
            filterRecipes(meals[selectedType], dietaryPreference) : 
            meals[selectedType];
            
        console.log('Current recipes:', currentRecipes);
        
        if (currentRecipes.length === 0) {
            cardBack.innerHTML = `<div>No ${selectedType} recipes found for this dietary preference!</div>`;
            return;
        }
            
        card.classList.remove('flipped');
        card.classList.remove('show');
        isFlipped = false;
        
        // Update front card text
        document.querySelector('.card-front').textContent = `Click to reveal your ${selectedType}!`;
        cardBack.innerHTML = `<div>Click to reveal your ${selectedType}!</div>`;
        
        // Show the main card
        card.classList.add('show');
    }
}

function createShuffleCards() {
    const shuffleContainer = document.querySelector('.shuffle-cards');
    shuffleContainer.innerHTML = '';
    
    // Create 5 cards
    const shuffleRecipes = [];
    const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    for (let i = 0; i < 5; i++) {
        const randomRecipe = currentRecipes[Math.floor(Math.random() * currentRecipes.length)];
        const randomNumber = cardNumbers[Math.floor(Math.random() * cardNumbers.length)];
        shuffleRecipes.push(randomRecipe);
        
        const shuffleCard = document.createElement('div');
        shuffleCard.className = 'shuffle-card';
        // Alternate between face-up and face-down
        if (i % 2 === 1) {  // Make odd-numbered cards face down
            shuffleCard.classList.add('face-down');
        }
        shuffleCard.setAttribute('data-number', randomNumber);
        shuffleCard.innerHTML = `<span>${randomRecipe || 'Shuffling...'}</span>`;
        shuffleContainer.appendChild(shuffleCard);
    }
}

function flipCard() {
    console.log('Flip card triggered');
    console.log('Meal type:', mealTypeDropdown.value);
    console.log('Current recipes:', currentRecipes);

    if (!mealTypeDropdown.value) {
        alert('Please select a meal type first!');
        return;
    }

    if (!isFlipped) {
        console.log('Card clicked'); // Debug log
        card.style.opacity = '0';
        createShuffleCards();
        
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 1200);
            }, delay);
            delay += 400;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            shuffleButton.style.display = 'inline-block';
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 1200);
    }
}

function shuffleNewRecipe() {
    card.classList.remove('flipped');
    card.classList.remove('show');
    isFlipped = false;
    
    setTimeout(() => {
        createShuffleCards();
        const shuffleCards = document.querySelectorAll('.shuffle-card');
        let delay = 0;
        
        shuffleCards.forEach((card) => {
            setTimeout(() => {
                card.classList.add('animate');
                setTimeout(() => card.classList.remove('animate'), 800);
            }, delay);
            delay += 200;
        });

        setTimeout(() => {
            const recipe = getRandomRecipe();
            showRecipe(recipe);
            card.classList.add('show');
            card.classList.add('flipped');
            isFlipped = true;
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, delay + 800);
    }, 300);
}

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * currentRecipes.length);
    return currentRecipes[randomIndex];
}

function showRecipe(recipe) {
    if (!recipe) {
        cardBack.innerHTML = `
            <div>
                <h2>No matching recipes found!</h2>
                <p>Try a different meal type or dietary preference.</p>
            </div>
        `;
        return;
    }

    // Make sure the card is visible
    card.style.opacity = '1';
    
    cardBack.innerHTML = `
        <div>
            <h2 style="font-size: 1.8rem; margin-bottom: 1rem;">${recipe}</h2>
            <div class="recipe-links">
                <a href="recipe.html?recipe=${encodeURIComponent(recipe)}" class="recipe-link">View Recipe</a>
            </div>
        </div>
    `;
}

// Keep your existing filterRecipes function
function filterRecipes(recipes, dietaryPreference) {
    switch(dietaryPreference) {
        case 'vegan':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                // All animal products
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('duck') &&
                       !name.includes('turkey') &&
                       !name.includes('prawn') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('lobster') &&
                       !name.includes('octopus') &&
                       !name.includes('anchovy') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('veal') &&
                       !name.includes('goat') &&
                       !name.includes('venison') &&
                       !name.includes('bison') &&
                       !name.includes('rabbit') &&
                       // Dairy and eggs
                       !name.includes('cheese') &&
                       !name.includes('egg') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('milk') &&
                       !name.includes('yogurt') &&
                       !name.includes('mayo') &&
                       !name.includes('honey') &&
                       !name.includes('gelato') &&
                       !name.includes('ice cream') &&
                       !name.includes('parmesan') &&
                       !name.includes('mozzarella') &&
                       !name.includes('ricotta') &&
                       !name.includes('custard') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('hollandaise') &&
                       !name.includes('ranch') &&
                       !name.includes('aioli');
            });

        case 'vegetarian':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('duck') &&
                       !name.includes('prawn') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('lobster') &&
                       !name.includes('octopus') &&
                       !name.includes('anchovy') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('turkey') &&
                       !name.includes('veal') &&
                       !name.includes('goat') &&
                       !name.includes('venison') &&
                       !name.includes('bison') &&
                       !name.includes('rabbit') &&
                       !name.includes('ham') &&
                       !name.includes('steak') &&
                       !name.includes('burger') &&
                       !name.includes('meatball') &&
                       !name.includes('sausage') &&
                       !name.includes('pepperoni') &&
                       !name.includes('prosciutto') &&
                       !name.includes('salami');
            });

        case 'glutenFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pasta') &&
                       !name.includes('bread') &&
                       !name.includes('pizza') &&
                       !name.includes('lasagna') &&
                       !name.includes('noodles') &&
                       !name.includes('spaghetti') &&
                       !name.includes('penne') &&
                       !name.includes('fettuccine') &&
                       !name.includes('breadcrumbs') &&
                       !name.includes('flour') &&
                       !name.includes('wheat') &&
                       !name.includes('udon') &&
                       !name.includes('soba') &&
                       !name.includes('ramen') &&
                       !name.includes('tempura') &&
                       !name.includes('brioche') &&
                       !name.includes('baguette') &&
                       !name.includes('croissant') &&
                       !name.includes('tortilla') &&
                       !name.includes('pita') &&
                       !name.includes('couscous') &&
                       !name.includes('dumpling') &&
                       !name.includes('wonton') &&
                       !name.includes('roll') &&
                       !name.includes('cake') &&
                       !name.includes('cookie') &&
                       !name.includes('pie') &&
                       !name.includes('muffin') &&
                       !name.includes('waffle') &&
                       !name.includes('pancake') &&
                       !name.includes('toast') &&
                       !name.includes('breaded') &&
                       !name.includes('crusted');
            });

        case 'dairyFree':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('cheese') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('milk') &&
                       !name.includes('yogurt') &&
                       !name.includes('ice cream') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('mac and cheese') &&
                       !name.includes('mozzarella') &&
                       !name.includes('parmesan') &&
                       !name.includes('ricotta') &&
                       !name.includes('brie') &&
                       !name.includes('gratin') &&
                       !name.includes('bechamel') &&
                       !name.includes('quiche') &&
                       !name.includes('fondue') &&
                       !name.includes('raclette') &&
                       !name.includes('burrata') &&
                       !name.includes('custard') &&
                       !name.includes('pudding') &&
                       !name.includes('hollandaise') &&
                       !name.includes('ranch') &&
                       !name.includes('aioli') &&
                       !name.includes('creamy') &&
                       !name.includes('cheesy');
            });

        case 'kosher':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('ham') &&
                       !name.includes('bacon') &&
                       !name.includes('shellfish') &&
                       !name.includes('shrimp') &&
                       !name.includes('crab') &&
                       !name.includes('lobster') &&
                       !name.includes('clam') &&
                       !name.includes('mussel') &&
                       !name.includes('oyster') &&
                       !name.includes('scallop') &&
                       !name.includes('calamari') &&
                       !name.includes('octopus') &&
                       !name.includes('prawn') &&
                       !name.includes('catfish') &&
                       !name.includes('eel') &&
                       !name.includes('squid') &&
                       // Combinations of meat and dairy
                       !name.includes('cheeseburger') &&
                       !name.includes('chicken parmesan') &&
                       !name.includes('beef stroganoff') &&
                       !name.includes('carbonara') &&
                       !name.includes('meat lasagna') &&
                       // Additional non-kosher items
                       !name.includes('rabbit') &&
                       !name.includes('horse') &&
                       !name.includes('wild boar');
            });
        case 'halal':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('ham') &&
                       !name.includes('bacon') &&
                       !name.includes('alcohol') &&
                       !name.includes('wine') &&
                       !name.includes('beer') &&
                       !name.includes('brandy') &&
                       !name.includes('rum') &&
                       !name.includes('sake') &&
                       !name.includes('liquor') &&
                       !name.includes('whiskey') &&
                       !name.includes('marsala') &&
                       !name.includes('vodka') &&
                       !name.includes('bourbon') &&
                       !name.includes('wild boar') &&
                       !name.includes('blood sausage');
            });
        case 'healthy':
            return recipes.filter(recipe => {
                const name = recipe.toLowerCase();
                return !name.includes('fried') &&
                       !name.includes('bacon') &&
                       !name.includes('cream') &&
                       !name.includes('butter') &&
                       !name.includes('deep dish') &&
                       !name.includes('mac and cheese') &&
                       !name.includes('loaded') &&
                       !name.includes('breaded') &&
                       !name.includes('gravy') &&
                       !name.includes('alfredo') &&
                       !name.includes('carbonara') &&
                       !name.includes('bbq') &&
                       !name.includes('glazed') &&
                       !name.includes('cheese') &&
                       !name.includes('candy') &&
                       !name.includes('sugar');
            });
        default:
            return recipes;
    }
} 