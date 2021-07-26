const categories = [
  
  {
    name: 'Food',
    image: require('../assets/food.jpg'),

    products: [
      {
        name: 'Toast Bread',
        image: require('../assets/toast.jpg'),
      },
      {
        name: 'Rye Bread',
        image: require('../assets/rye.jpg'),
      },
      {
        name: 'Lentil Soup',
        image: require('../assets/lentil.jpg'),
      },
      {
        name: 'Tomato Soup',
        image: require('../assets/tomatoSoup.png'),
      },
      {
        name: 'Tuna Conserve',
        image: require('../assets/tuna.jpg'),
      },
      {
        name: 'Pickled Cucumbers',
        image: require('../assets/cucumbers.jpg'),
      },
      {
        name: 'Chickpea',
        image: require('../assets/chickpea.jpg'),
      },
      {
        name: 'Kraft Macaroni Cheese',
        image: require('../assets/kraft.jpg'),
      },
      {
        name: 'Spaghetti',
        image: require('../assets/spaghetti.jpg'),
      },
    ],
  },
  {
    name: 'Meat & Frozen ',
    image: require('../assets/meat.jpg'),

    products: [
      {
        name: 'Beef',
        image: require('../assets/meat.jpg'),
      },
      {
        name: 'Ground Beef',
        image: require('../assets/ground-beef.jpg'),
      },
      {
        name: 'Chicken Breast',
        image: require('../assets/chicken.jpg'),
      },
      {
        name: 'Bacon',
        image: require('../assets/bacon.jpg'),
      },
      {
        name: 'Pizza',
        image: require('../assets/pizza.jpg'),
      },
      {
        name: 'French Fries',
        image: require('../assets/french.png'),
      },
      {
        name: 'Cheddar Cheese',
        image: require('../assets/cheddar.jpg'),
      },
      {
        name: 'Beef Sausage',
        image: require('../assets/beef.jpg'),
      },
    ],
  },
  {
    name: 'Junk Food',
    image: require('../assets/junkFood.jpg'),
    products: [
      {
        name: 'Chocolate',
        image: require('../assets/choco.png'),
      },
      {
        name: 'Dark Chocolate',
        image: require('../assets/darkChoco.jpg'),
      },
      {
        name: 'Chips',
        image: require('../assets/chips.jpg'),
      },
      {
        name: 'Pretzel',
        image: require('../assets/pretzel.jpg'),
      },
      {
        name: 'Mixed Nuts',
        image: require('../assets/mixed.jpg'),
      },
    ],
  },
  {
    name: 'Dessert',
    image: require('../assets/dessert.jpg'),
    products: [
      {
        name: 'Pudding',
        image: require('../assets/puding.jpg'),
      },
      {
        name: 'Profiterole',
        image: require('../assets/Profiterole.png'),
      },
      {
        name: 'Parfait',
        image: require('../assets/parfaits.jpg'),
      },
      {
        name: 'Donuts',
        image: require('../assets/donut.jpg'),
      },
      {
        name: 'Cake',
        image: require('../assets/cake.jpg'),
      },
      {
        name: 'Cheesecake',
        image: require('../assets/cheescake.jpg'),
      },
    ],
  },
  {
    name: 'Vegatable & Fruit',
    image: require('../assets/vegetables.jpg'),
    products: [
      {
        name: 'Tomato',
        image: require('../assets/tomato.jpg'),
      },
      {
        name: 'Potato',
        image: require('../assets/potato.jpg'),
      },
      {
        name: 'Pineapple',
        image: require('../assets/pineapple.jpg'),
      },
      {
        name: 'Apple',
        image: require('../assets/apple.jpg'),
      },
      {
        name: 'Banana',
        image: require('../assets/banana.jpg'),
      },
      {
        name: 'Strawberry',
        image: require('../assets/strawberry.jpg'),
      },
    ],
  },
  {
    name: 'Water & Drink',
    image: require('../assets/drinks.jpg'),
    products: [
      {
        name: 'Water',
        image: require('../assets/water.jpg'),
      },
      {
        name: 'Pepsi',
        image: require('../assets/pepsi.jpg'),
      },
      {
        name: 'Coca-Cola',
        image: require('../assets/cola.jpg'),
      },
      {
        name: 'Sprite',
        image: require('../assets/sprite.jpg'),
      },
      {
        name: 'Milk',
        image: require('../assets/milk.png'),
      },
      {
        name: 'Nescafe',
        image: require('../assets/nescafe.jpg'),
      },
      {
        name: 'Lemonade',
        image: require('../assets/lemonede.jpg'),
      },
      {
        name: 'Ice Tea',
        image: require('../assets/ice.jpg'),
      },
    ],
  },
  {
    name: 'Personal Care',
    image: require('../assets/personal.jpg'),
    products: [
      {
        name: 'Cotton',
        image: require('../assets/cotton.jpg'),
      },
      {
        name: 'Shampoo',
        image: require('../assets/shampoo.jpg'),
      },
      {
        name: 'Hair Conditioner',
        image: require('../assets/hair.jpg'),
      },
      {
        name: 'Tooth Paste',
        image: require('../assets/paste.jpg'),
      },
      {
        name: 'ToothBrush',
        image: require('../assets/brush.jpg'),
      },
      {
        name: 'Gilette',
        image: require('../assets/gilette.jpg'),
      },
      {
        name: 'Veet',
        image: require('../assets/veet.jpg'),
      },
      {
        name: 'Nail Scissors',
        image: require('../assets/nail.jpg'),
      },
      {
        name: 'Rexona Dedorant',
        image: require('../assets/dedorant.jpg'),
      },
    ],
  },
  {
    name: 'Pet Shop',
    image: require('../assets/pet.jpg'),
    products: [
      {
        name: 'Pedigree -Beef Canned',
        image: require('../assets/pedigre.jpg'),
      },
      {
        name: 'Pedigree -Chicken & Rice Dinner',
        image: require('../assets/rice.png'),
      },
      {
        name: 'Wet Food (+1 year)',
        image: require('../assets/wet.jpg'),
      },
      {
        name: 'Dry Food (+1 year)',
        image: require('../assets/dry.jpg'),
      },
      {
        name: 'Acana -Wild Coast',
        image: require('../assets/acana.jpg'),
      },
      {
        name: 'Trill Canary Seed',
        image: require('../assets/trill.jpg'),
      },
      {
        name: 'Budgie Crackers',
        image: require('../assets/budgie.jpg'),
      },
    ],
  },
  {
    name: 'Mom & Baby',
    image: require('../assets/mom.jpg'),
    products: [
      {
        name: 'Diaper',
        image: require('../assets/diaper.jpg'),
      },
      {
        name: 'Wet Napkin',
        image: require('../assets/islak.jpg'),
      },
      {
        name: 'Chick Toy Bottles - Baby Hair & Body Wash',
        image: require('../assets/dalin.png'),
      },
      {
        name: 'Dalin 100% Natural Cotton Buds With Safety Stopper',
        image: require('../assets/kulak.jpg'),
      },
      
      {
        name: 'Dalin Baby Cologne (Original Smell & Floral) - 2 Pack',
        image: require('../assets/kolonya.jpg'),
      },
      {
        name: 'Aptamil',
        image: require('../assets/aptamil.jpg'),
      },
      {
        name: 'Hero Baby',
        image: require('../assets/hero.jpg'),
      },
    ],
  },
  
  {
    name: 'Electronic',
    image: require('../assets/elektronic.jpg'),
    products: [
      {
        name: 'Earphone',
        image: require('../assets/ear.jpg'),
      },
      {
        name: 'Oral-B',
        image: require('../assets/oral.jpg'),
      },
      {
        name: 'Apple Usb-C Charge',
        image: require('../assets/usb.jpg'),
      },
      {
        name: 'Blow-Dryer',
        image: require('../assets/fon.jpg'),
      },
      {
        name: 'Hair Straightener',
        image: require('../assets/straight.jpg'),
      },
    ],
  },
];

// const categories = [
//     {
//         name: 'Food',
//         image: require('../assets/food.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Meat & Frozen ',
//         image: require('../assets/meat.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Junk Food',
//         image: require('../assets/junkFood.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Dessert',
//         image: require('../assets/dessert.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Vegatable & Fruit',
//         image: require('../assets/vegetables.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Water & Drink',
//         image: require('../assets/drinks.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Personal Care',
//         image: require('../assets/personal.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Pet Shop',
//         image: require('../assets/pet.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Mom & Baby',
//         image: require('../assets/mom.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Home',
//         image: require('../assets/home.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Electronic',
//         image: require('../assets/elektronic.jpg'),
//         products: [
//             {
//                 toast: [
//                     {
//                         name: "Toast Bread",
//                         image : "https://wwwi.globalpiyasa.com/lib/Urun/670/46c64f4425af1b3b2544d3d47eabe435_1.png"
//                     }
//                 ],
//                 rye: [
//                     {
//                         name: "Rye Bread",
//                         image : "https://www.mestaymarket.com/upload_x/resim/8690698512705.jpg"
//                     }
//                 ],
//                 lentil: [
//                     {
//                         "category": "Lentil Soup",
//                         "image" : "https://images-na.ssl-images-amazon.com/images/I/61t5qMvmBEL._SX679_.jpg"
//                     }
//                 ]
//             }
//         ]
//     },

// ];

// const categories = [
//     {
//         id: 1,
//         name: 'Food',
//         image: require('../assets/food.png')
//     },
//     {
//         id: 2,
//         name: 'Home',
//         image: require('../assets/food.png')
//     },
//     {
//         id: 3,
//         name: 'Drinks',
//         image: require('../assets/food.png')
//     },
//     {
//         id: 4,
//         name: 'Electronic',
//         image: require('../assets/food.png')
//     },
//     {
//         id: 5,
//         name: 'Clothes',
//         image: require('../assets/food.png')
//     },
//     {
//         id: 6,
//         name: 'Vegetables',
//         image: require('../assets/food.png')
//     },

// ];

export default categories;
