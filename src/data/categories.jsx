// src/data/categories.js
const categories = [
  {
    id: 1,
    name: "Traditional Meals",
    recipes: [
      {
        id: 101,
        image: "https://thegingeredwhisk.com/wp-content/uploads/2020/05/South-African-Babotie-13.jpg",
        title: "Bobotie",
        description: "A traditional South African dish made with spiced minced meat and a savory custard topping.",
        instructions: "1. Preheat the oven to 180°C (350°F). 2. Brown the minced meat in a pan with onions and garlic. 3. Add curry powder, turmeric, and other spices. 4. Stir in bread soaked in milk, then simmer. 5. Transfer to a baking dish, cover with egg custard, and bake for 45 minutes.",
        timeToCook: "1 hour"
      },
      {
        id: 102,
        image: "https://aflaomarket.com/wp-content/uploads/2020/11/fufu-with-goat-soup.jpg",
        title: "Fufu with Soup",
        description: "A popular West African dish served with a variety of flavorful soups.",
        instructions: "1. Cook the fufu by boiling cassava flour in water until it thickens. 2. For the soup, cook your choice of meat and add seasonings and vegetables. 3. Serve the fufu with the soup.",
        timeToCook: "2 hours"
      },
    ],
  },
  {
    id: 2,
    name: "Street Delicacies",
    recipes: [
      {
        id: 201,
        image: "https://afrifoodnetwork.com/wp-content/uploads/2020/04/Bunny-Chow-scaled-480x270.jpg",
        title: "Bunny Chow",
        description: "A hollowed-out loaf of bread filled with spicy curry, a South African street food staple.",
        instructions: "1. Hollow out a loaf of bread. 2. Prepare a spicy curry with your choice of meat or vegetables. 3. Fill the bread with the curry and serve.",
        timeToCook: "1 hour"
      },
      {
        id: 202,
        image: "https://feastwithsafiya.com/wp-content/uploads/2021/10/Samosas-with-Potatoes-and-Peas-2-1.jpg",
        title: "Samosas",
        description: "Crispy pastry filled with spiced vegetables or meat, popular as a snack.",
        instructions: "1. Prepare the filling with spiced potatoes, peas, or meat. 2. Roll the dough into triangles, fill with the mixture, and seal. 3. Deep-fry the samosas until golden brown.",
        timeToCook: "45 minutes"
      },
    ],
  },
  {
    id: 3,
    name: "African Breakfasts",
    recipes: [
      {
        id: 301,
        image: "https://cdn.24.co.za/files/Cms/General/d/2309/8dd65a98d5ee44d3bf3c4653728354e8.jpg",
        title: "Maize Porridge",
        description: "A staple African breakfast made from maize meal, served sweet or savory.",
        instructions: "1. Boil water with a pinch of salt. 2. Stir in maize meal and cook until thickened. 3. Serve with sugar or savory toppings like cheese or vegetables.",
        timeToCook: "20 minutes"
      },
      {
        id: 302,
        image: "https://img-global.cpcdn.com/recipes/302b85cd971dc126/1200x630cq70/photo.jpg",
        title: "Akara",
        description: "Deep-fried bean cakes, a popular breakfast food in West Africa.",
        instructions: "1. Soak beans overnight, then peel the skins and blend with onions and spices. 2. Heat oil in a pan and fry spoonfuls of the mixture until golden and crispy.",
        timeToCook: "45 minutes"
      },
    ],
  },
  {
    id: 4,
    name: "Festive Feasts",
    recipes: [
      {
        id: 401,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Jollof_Rice_with_Stew.jpg",
        title: "Jollof Rice",
        description: "A festive West African rice dish cooked in a flavorful tomato sauce.",
        instructions: "1. Fry onions, garlic, and tomatoes in oil until soft. 2. Add rice, tomato paste, and seasonings, then cook in vegetable or chicken broth. 3. Let simmer until rice is tender.",
        timeToCook: "1 hour"
      },
      {
        id: 402,
        image: "https://i.ytimg.com/vi/8FsHaXsOHbI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAKWrOPtpg6R3WyF1xCJLKZQeO0Kg",
        title: "Roast Lamb",
        description: "A centerpiece dish for celebrations, seasoned and roasted to perfection.",
        instructions: "1. Preheat the oven to 180°C (350°F). 2. Season the lamb with garlic, rosemary, and olive oil. 3. Roast for 1.5 hours, or until cooked to desired doneness.",
        timeToCook: "2 hours"
      },
    ],
  },
  {
    id: 5,
    name: "Soups & Stews",
    recipes: [
      {
        id: 501,
        image: "https://www.feastingathome.com/wp-content/uploads/2022/01/African-Peanut-Stew-8.jpg",
        title: "Peanut Soup",
        description: "A creamy and spicy soup made with groundnuts, a favorite in West Africa.",
        instructions: "1. Sauté onions, garlic, and ginger. 2. Add peanut butter, broth, and spices, then simmer. 3. Serve hot with a sprinkle of ground peanuts.",
        timeToCook: "1 hour"
      },
      {
        id: 502,
        image: "https://i0.wp.com/www.lubzonline.com/wp-content/uploads/2020/05/68674EE8-8935-4615-9CC6-7FE2FE6D7601-scaled.jpeg?resize=480%2C270&ssl=1",
        title: "Oxtail Stew",
        description: "A hearty and flavorful stew made with slow-cooked oxtail.",
        instructions: "1. Brown oxtail in a pot, then add vegetables and broth. 2. Let simmer for 2-3 hours until the meat is tender. 3. Serve with bread or rice.",
        timeToCook: "3 hours"
      },
    ],
  },
  {
    id: 6,
    name: "Plant-Based Dishes",
    recipes: [
      {
        id: 601,
        image: "https://sweetpotatosoul.com/wp-content/uploads/2024/10/vegan-red-lentil-curry-with-sweet-potatoes.jpg",
        title: "Lentil Curry",
        description: "A plant-based curry made with lentils, vegetables, and aromatic spices.",
        instructions: "1. Sauté onions, garlic, and ginger. 2. Add lentils, vegetables, and spices. 3. Simmer until lentils are tender and serve with rice.",
        timeToCook: "45 minutes"
      },
      {
        id: 602,
        image: "https://www.mealgarden.com/media/recipe/2022/05/bigstock-Homemade-Healthy-Chard-With-Ri-274892317.jpeg",
        title: "Spinach Stew",
        description: "A nutritious stew made with spinach and a blend of herbs and spices.",
        instructions: "1. Sauté onions, garlic, and spices. 2. Add spinach and simmer until tender. 3. Serve with a side of rice or flatbread.",
        timeToCook: "30 minutes"
      },
    ],
  },
  {
    id: 7,
    name: "Quick Bites",
    recipes: [
      {
        id: 701,
        image: "https://www.krumpli.co.uk/wp-content/uploads/2023/05/Homemade-Indian-Chapati-02-720x540.jpg",
        title: "Chapati",
        description: "A soft and flaky flatbread, perfect for dipping or eating on the go.",
        instructions: "1. Mix flour, water, and salt to form a dough. 2. Roll out the dough into flat circles and cook on a hot griddle until golden brown.",
        timeToCook: "20 minutes"
      },
      {
        id: 702,
        image: "https://grategoods.com/wp-content/uploads/2022/06/Grate-Goods-Meat-Pie-6-scaled-uai-2560x1440.jpg",
        title: "Meat Pies",
        description: "Pastry pockets filled with spiced meat, great as a snack or light meal.",
        instructions: "1. Prepare a filling with ground meat and spices. 2. Fill pie dough and seal. 3. Bake in the oven for 30-35 minutes.",
        timeToCook: "45 minutes"
      },
    ],
  },
];

export default categories;
