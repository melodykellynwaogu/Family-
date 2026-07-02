const products = [
  {
    id: 'creams',
    name: 'Nivea',
    category: 'Body Produce',
    price: 16000,
    unit: '',
    image: '/nivea.jpeg',
    description: 'Feel the softness of Nivea creams on your skin.',
  },
  {
    id: 'drinks',
    name: 'Coca-Cola',
    category: 'Fresh Produce',
    price: 1800,
    unit: '',
    image: '/coke.jpeg',
    description: 'Enjoy the taste of a fresh drink',
  },
  {
    id: 'oil',
    name: 'Sunfoil cooking oil',
    category: 'Oil',
    price: 25000,
    unit: '',
    image: '/sunfoil.jpeg',
    description: 'Pre-seasoned salmon fillets for a nutritious weeknight dinner.',
  },
  {
    id: 'pasta',
    name: 'Whole Wheat Pasta',
    category: 'Pantry',
    price: 2500,
    unit: 'per pack',
    image: '/pasta.jpeg',
    description: 'Versatile pasta for quick recipes and family favourites.',
  },
  {
    id: 'cookies',
    name: 'Family Cookie Pack',
    category: 'Snacks',
    price: 2500,
    unit: 'per pack',
    image: '/cookies.jpeg',
    description: 'Soft chocolate chip cookies everyone loves.',
  },
  {
    id: 'yogurt',
    name: 'Greek Yogurt',
    category: 'Dairy',
    price: 5500,
    unit: '4-pack',
    image: '/yogurt.jpeg',
    description: 'Creamy yogurt for parfaits, dips, and snacks.',
  },
  {
    id: 'pads',
    name: 'Always Pads',
    category: 'Home Essentials',
    price: 6000,
    unit: 'per pack',
    image: '/pads.jpeg',
    description: 'Comfortable and reliable pads for everyday protection.',
  },
  {
    id: 'soap',
    name: 'Dove Soap',
    category: 'Home Essentials',
    price: 3500,
    unit: 'per bar',
    image: '/soap.jpeg',
    description: 'Gentle cleansing soap for soft and nourished skin.',
  },
  {
    id: 'cookies',
    name: 'Family Cookie Pack',
    category: 'Snacks',
    price: 5000,
    unit: 'per pack',
    image: '/cookies.jpeg',
    description: 'Soft chocolate chip cookies everyone loves.',
  },

  {
    id: 'spreading',
    name: 'Blue Band',
    category: 'Dairy',
    price: 14000,
    unit: '500g',
    image: '/spreading.jpeg',
    description: 'Blue Band is a versatile margarine that can be used for spreading, cooking, and baking.',
  },  
  {
    id: 'smoothie',
    name: 'Sobo Smoothie Kit',
    category: 'Family Meals',
    price: 12000,
    unit: 'per kit',
    image: '/smoothie.jpeg',
    description: 'Ready-to-blend greens, fruit, and boost packs.',
  },
  {
    id: 'spreading',
    name: 'Blue Band',
    category: 'Dairy',
    price: 25000,
    unit: '1kg',
    image: '/spreading.jpeg',
    description: 'Blue Band is a versatile margarine that can be used for spreading, cooking, and baking.',
  },

  {
    id: 'cereal',
    name: 'Corn Flakes',
    category: 'Breakfast',
    price: 12000,
    unit: 'per box',
    image: '/cornflakes.jpeg',
    description: 'Classic corn flakes for a quick and tasty breakfast.',
  },  
  {
    id: 'spreading',
    name: 'Blue Band',
    category: 'Dairy',
    price: 7500,
    unit: '250g',
    image: '/spreading.jpeg',
    description: 'Blue Band is a versatile margarine that can be used for spreading, cooking, and baking.',
  },
  // You can merge this structure into your existing src/data/products.js file.
  
  // ... your existing products ...
  {
    id: "mk-taco-night",
    name: "15-Minute Family Taco Kit",
    category: "Meal Kits",
    price: 24.99, // Base price for standard kit (4 servings)
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    isMealKit: true,
    prepTime: "15 mins",
    difficulty: "Easy",
    defaultServings: 4,
    description: "Build the ultimate family taco night in minutes! Features fresh grass-fed beef, warm corn tortillas, ripe avocados, shredded sharp cheddar, and our signature fresh pico de gallo.",
    nutrition: {
      calories: "680 kcal",
      protein: "34g",
      carbs: "48g",
      fat: "22g"
    },
    ingredients: [
      { id: "ing-beef", name: "Lean Grass-Fed Ground Beef (500g)", price: 8.99, optional: false, quantity: 1, category: "Protein" },
      { id: "ing-tortillas", name: "Artisanal Corn Tortillas (12pc)", price: 3.50, optional: false, quantity: 1, category: "Bakery" },
      { id: "ing-seasoning", name: "Family Fair House Taco Seasoning", price: 1.50, optional: false, quantity: 1, category: "Pantry" },
      { id: "ing-avocado", name: "Fresh Hass Avocados (3pc)", price: 3.99, optional: true, quantity: 1, category: "Produce" },
      { id: "ing-cheese", name: "Shredded Sharp Cheddar (200g)", price: 4.50, optional: true, quantity: 1, category: "Dairy" },
      { id: "ing-salsa", name: "Fresh House Pico de Gallo (250g)", price: 4.51, optional: true, quantity: 1, category: "Produce" }
    ]
  },
  {
    id: "mk-tuscan-salmon",
    name: "Creamy Tuscan Garlic Salmon Kit",
    category: "Meal Kits",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    isMealKit: true,
    prepTime: "25 mins",
    difficulty: "Medium",
    defaultServings: 4,
    description: "A restaurant-quality seafood dish made simple. Pan-seared salmon fillets in a luxurious creamy garlic, spinach, and sun-dried tomato sauce.",
    nutrition: {
      calories: "740 kcal",
      protein: "42g",
      carbs: "12g",
      fat: "46g"
    },
    ingredients: [
      { id: "ing-salmon", name: "Fresh Wild-Caught Salmon Fillets (4pc)", price: 18.99, optional: false, quantity: 1, category: "Seafood" },
      { id: "ing-cream", name: "Organic Heavy Whipping Cream (250ml)", price: 3.20, optional: false, quantity: 1, category: "Dairy" },
      { id: "ing-spinach", name: "Fresh Baby Spinach (150g)", price: 2.50, optional: false, quantity: 1, category: "Produce" },
      { id: "ing-tomatoes", name: "Sun-Dried Tomatoes in Olive Oil", price: 4.80, optional: true, quantity: 1, category: "Pantry" },
      { id: "ing-garlic", name: "Whole Garlic Bulb & Herbs Pack", price: 2.00, optional: false, quantity: 1, category: "Produce" },
      { id: "ing-parm", name: "Grated Aged Parmesan Cheese (100g)", price: 3.50, optional: true, quantity: 1, category: "Dairy" }
    ]
  }

]

export default products
