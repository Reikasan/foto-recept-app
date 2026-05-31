export const recipes = [
  {
    id: 1,
    title: "omelette",
    image:
      "https://images.unsplash.com/photo-1677844592730-ce9c936d8f1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: [1, 7],
    ingredients: [
      { id: 1, name: "eggs", amount: "2" },
      { id: 2, name: "butter", amount: "1 tbsp" },
      { id: 3, name: "milk", amount: "1 cup" },
      { id: 4, name: "melted cheese", amount: "1 tbsp" },
    ],
    steps: [
      { id: 1, text: "lorem ipsum dolor sit amet" },
      { id: 2, text: "consectetur adipiscing elit" },
      { id: 3, text: "lorem ipsum dolor sit amet" },
      { id: 4, text: "consectetur adipiscing elit" },
      { id: 5, text: "lorem ipsum dolor sit amet" },
    ],
    note: "taste good with melted cheese!",
  },
  {
    id: 2,
    title: "curry",
    image: false,
    ingredients: [
      { id: 1, name: "curry paste", amount: "50g" },
      { id: 2, name: "chicken", amount: "300g" },
    ],
    steps: [
      { id: 1, text: "lorem ipsum dolor sit amet" },
      { id: 2, text: "consectetur adipiscing elit" },
      { id: 3, text: "lorem ipsum dolor sit amet" },
      { id: 4, text: "consectetur adipiscing elit" },
    ],
    note: "leftover curry taste even better than fresh one!",
  },
  {
    id: 3,
    title: "salad",
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      { id: 1, name: "tomato", amount: "2" },
      { id: 2, name: "cucumber", amount: "1" },
      { id: 3, name: "lettuce", amount: "1" },
      { id: 4, name: "onion", amount: "1" },
      { id: 5, name: "avocado", amount: "1" },
      { id: 6, name: "cilantro", amount: "1" },
    ],
    steps: [
      { id: 1, text: "cut " },
      { id: 2, text: "lorem ipsum dolor sit amet" },
      { id: 3, text: "consectetur adipiscing elit" },
    ],
    note: "I like salad!",
  },
  {
    id: 4,
    title: "cake",
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    ingredients: [
      { id: 1, name: "flour", amount: "250g" },
      { id: 2, name: "sugar", amount: "200g" },
      { id: 3, name: "butter", amount: "100g" },
      { id: 4, name: "eggs", amount: "2" },
      { id: 5, name: "milk", amount: "150ml" },
      { id: 6, name: "baking powder", amount: "1 tsp" },
      { id: 7, name: "baking soda", amount: "1/2 tsp" },
      { id: 8, name: "chocolate chips", amount: "100g" },
    ],
    steps: [
      { id: 1, text: "lorem ipsum dolor sit amet" },
      { id: 2, text: "consectetur adipiscing elit" },
      { id: 3, text: "lorem ipsum dolor sit amet" },
      { id: 4, text: "consectetur adipiscing elit" },
      { id: 5, text: "lorem ipsum dolor sit amet" },
      { id: 6, text: "consectetur adipiscing elit" },
      { id: 7, text: "lorem ipsum dolor sit amet" },
      { id: 8, text: "consectetur adipiscing elit" },
    ],
    note: "do you like chocolate cake?",
  },
];
