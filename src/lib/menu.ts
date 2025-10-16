export const menu = [
  {
    title: "Maxi Salads",
    href: "salads",
    image: "/menu/insalata.jpg",
    items: [
      {
        category: null,
        dishes: [
          { name: "Tuna Salad", price: 9, desc: "salad, tuna, olives, corn, tomatoes, carrots", image: "/menu/insalate/tonno.jpeg" },
          { name: "Salmon Salad", price: 10, desc: "salad, salmon, rocket, tomatoes, olives", image: "/menu/insalate/salmone.jpeg" },
          { name: "Nicoise Salad", price: 8, desc: "salad, eggs, tomatoes, olives, onion", image: "/menu/insalate/nizzarda.jpeg" },
          { name: "Chicken Salad", price: 9, desc: "salad, chicken, almonds, rocket", image: "/menu/insalate/pollo.jpeg" },
          { name: "Cheese Salad", price: 8, desc: "salad, mozzarella cheese, tomatoes, carrots, corn", image: "/menu/insalate/formaggio.jpeg" },
          { name: "Ham Salad", price: 8, desc: "salad, ham, corn, olives, cheese, rocket", image: "/menu/insalate/prosciutto.jpeg" },
          { name: "Vegan Salad", price: 7, desc: "salad, tomatoes, rocket, corn, carrots", image: "/menu/insalata.jpg" },
        ]
      }
    ]
  },
  {
    title: "Pasta Dishes",
    href: "pasta",
    image: "/menu/pasta.jpg",
    items: [
      {
        category: "Vegetarian",
        dishes: [
          { name: "Orecchiette with tomato and basil", price: 9, desc: "pasta, sauce, oil, onion, basil", image: "/menu/pasta/orecchiette-pomodoro.jpeg" },
          { name: "Spicy Penne", price: 7, desc: "pasta, sauce, chilli pepper, garlic, oil, parsley", image: "/menu/pasta/pennette-piccanti.jpeg" },
          { name: "Capunti with mushrooms", price: 9, desc: "pasta, tomatoes, mushrooms, oil, garlic, cream", image: "/menu/pasta/capunti-funghi.jpeg" },
          { name: "Tagliatella with porcini and truffle", price: 15, desc: "pasta, tomato, garlic, oil, porcini mushrooms, truffle, cheese", image: "/menu/pasta/tagliatelle-porcini-tartufo.jpeg" },
          { name: "Gnocchi with pesto and stracciatella", price: 9, desc: "gnocchi, pesto, stracciatella cheese", image: "/menu/pasta/gnocchi-pesto-stracciatella.jpg" },
        ]
      },
      {
        category: "Non-vegetarian",
        dishes: [
          { name: "Lasagna", price: 9, desc: "pasta, sauce, meat, ham, mozzarella cheese", image: "/menu/pasta/lasagna.jpeg" },
          { name: "Tagliatelle Bolognese", price: 9, desc: "pasta, sauce, onion, carrots, celery, oil, meat", image: "/menu/pasta/bolognese.jpeg" },
          { name: "Spaghetti Carbonara", price: 9, desc: "pasta, bacon, eggs, cheese", image: "/menu/pasta/carbonara.jpeg" },
          { name: "Linguine with shrimp and courgettes", price: 10, desc: "pasta, shrimp, courgettes, sauce, garlic, oil", image: "/menu/pasta/linguine-zucchine-gamberetti.jpeg" },
          { name: "Linguine with tuna and rocket", price: 10, desc: "pasta, tuna, garlic, oil, rocket", image: "/menu/pasta/linguine-tonno-rucola.jpeg" },
          { name: "Risotto with seafood", price: 12, desc: "rice, oil, garlic, fish, fish broth", image: "/menu/pasta/risotto-fruttidimare.jpeg" },
        ]
      },
    ]
  },
  {
    title: "Meat Dishes",
    href: "meat",
    image: "/menu/carne.jpg",
    items: [
      {
        category: null,
        dishes: [
          { name: "Pork cutlet Barese style", price: 12, desc: "pork, bread, cheese", image: "/menu/carne/barese.jpg" },
          { name: "Sliced beef", price: 16, desc: "beef, oil, lemon, tomatoes, rocket, parmesan", image: "/menu/carne/tagliata.jpg" },
          { name: "Grilled veal entrecôte", price: 18, desc: null, image: "/menu/carne/entrecote.jpeg" },
          { name: "Pistachio scallops", price: 12, desc: "pork, oil, white wine, flour, pistachio", image: "/menu/carne/scaloppine.jpeg" },
          { name: "Chicken cutlet", price: 10, desc: "chicken, egg, bread", image: "/menu/carne/cotoletta.jpeg" },
        ]
      }
    ]
  },
  {
    title: "Fish Dishes",
    href: "fish",
    image: "/menu/pesce.jpg",
    items: [
      {
        category: null,
        dishes: [
          { name: "Roasted cuttlefish", price: 16, desc: "350 grams", image: "/menu/pesce/seppie.jpeg" },
          { name: "Roasted Prawns", price: 16, desc: "350 grams", image: "/menu/pesce/gamberi.jpeg" },
          { name: "Fried Fish", price: 20, desc: "prawns, squid, cuttlefish\n350 grams", image: "/menu/pesce/frittura.jpeg" },
        ]
      }
    ]
  },
  {
    title: "Other Dishes",
    href: "other",
    image: "/menu/altri.jpeg",
    items: [
      {
        category: null,
        dishes: [
          { name: "Mixed cheeses from Puglia", price: 10, desc: null, image: "/menu/other/formaggi.jpeg" },
          { name: "Boiled potatoes", price: 4, desc: null, image: "/menu/other/patate.jpeg" },
          { name: "French fries", price: 4, desc: null, image: "/menu/other/patatine-fritte.jpg" },
          { name: "Spinach", price: 4, desc: null, image: "/menu/other/spinaci.jpeg" },
          { name: "Vegetable soup with toasted bread", price: 8, desc: null, image: "/menu/other/zuppa.jpeg" },
        ]
      }
    ]
  },
  {
    title: "Pizzas",
    href: "pizzas",
    image: "/menu/pizza.jpeg",
    items: [
      {
        category: "Red Pizzas",
        dishes: [
          { name: "Margherita pizza", price: 7, desc: "sauce, mozzarella cheese", image: "/menu/pizze/margherita.jpeg" },
          { name: "Capricious", price: 9, desc: "sauce, mozzarella cheese, mushrooms, olives, cocked ham", image: "/menu/pizze/capricciosa.jpeg" },
          { name: "Tuna and onion", price: 8, desc: "sauce, mozzarella cheese, tuna, onion", image: "/menu/pizze/tonno-cipolla.jpeg" },
          { name: "Devil", price: 8, desc: "sauce, mozzarella cheese, spicy salami", image: "/menu/pizze/diavola.jpeg" },
          { name: "Raw ham", price: 10, desc: "sauce, mozzarella cheese, raw ham", image: "/menu/pizze/crudo.jpeg" },
          { name: "Naples", price: 8.5, desc: "sauce, mozzarella cheese, capers, anchovies", image: "/menu/pizze/napoli.jpg" },
          { name: "4 cheeses", price: 9, desc: "sauce, mozzarella cheese, Grana Padano, Philadelphia, stretched curd", image: "/menu/pizze/4formaggi.jpeg" },
          { name: "Tuna, tomatoes and courgettes", price: 9, desc: "sauce, mozzarella cheese, tuna, tomatoes, courgettes", image: "/menu/pizze/tonnopomodorizucchine.jpeg" },
        ]
      },
      {
        category: "White Pizzas",
        dishes: [
          { name: "Mushrooms pizza", price: 8, desc: "mozzarella cheese, mushrooms, pepper, parsley, vinaigrette", image: "/menu/pizze/funghi.jpeg" },
          { name: "Vegetarian pizza", price: 9, desc: "mozzarella cheese, peppers, aubergines, courgettes, tomatoes", image: "/menu/pizze/vegetariana.jpeg" },
          { name: "Lemon", price: 8.5, desc: "mozzarella cheese, cooked ham, salad, vinaigrette", image: "/menu/pizze/limone.jpeg" },
          { name: "Capocollo", price: 11, desc: "mozzarella cheese, capocollo, salad, burrata", image: "/menu/pizze/capocollo.jpeg" },
          { name: "Ciccio", price: 5, desc: "oil, salt", image: "/menu/pizze/ciccio.jpeg" },
        ]
      },
    ]
  },
  {
    title: "Fruits and Desserts",
    href: "desserts",
    image: "/menu/desserts/tiramisu.jpg",
    items: [
      {
        category: null,
        dishes: [
          { name: "Mixed seasonal fruit", price: 4, desc: null, image: null },
          { name: "Warm chocolate fondant", price: 5, desc: null, image: "/menu/desserts/tortino-cioccolato.webp" },
          { name: "Tiramisu", price: 4, desc: null, image: "/menu/desserts/tiramisu.jpg" },
          { name: "Ice cream cup", price: 4, desc: null, image: "/menu/desserts/coppa-gelato.webp" },
          { name: "Lemon sorbet", price: 4, desc: null, image: "/menu/desserts/sorbetto.webp" },
        ]
      }
    ]
  },
  // {
  //   title: "Drinks",
  //   href: "drinks",
  //   image: null,
  //   items: [
  //     {
  //       category: null,
  //       dishes: [
  //         { name: "stocazzo", price: 1110, desc: "muori", image: null },
  //         { name: "stocazzo2", price: 13110, desc: "muori merda", image: null },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: "Snacks",
  //   href: "snacks",
  //   image: null,
  //   items: [
  //     {
  //       category: null,
  //       dishes: [
  //         { name: "stocazzo", price: 1110, desc: "muori", image: null },
  //         { name: "stocazzo2", price: 13110, desc: "muori merda", image: null },
  //       ]
  //     }
  //   ]
  // },
];
