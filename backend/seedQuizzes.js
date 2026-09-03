const mongoose = require("mongoose");
require("dotenv").config();

const Quiz = require("./models/quiz");

const quizData = [
  {
    title: "Movies & TV",
    description: "Test your knowledge about movies, television shows and famous characters.",
    questions: [
      {
        questionText: "Who directed the movie Titanic?",
        options: ["James Cameron", "Christopher Nolan", "Steven Spielberg", "Peter Jackson"],
        correctAnswer: "James Cameron"
      },
      {
        questionText: "Which movie features the character Jack Sparrow?",
        options: ["Pirates of the Caribbean", "Harry Potter", "The Avengers", "Jurassic Park"],
        correctAnswer: "Pirates of the Caribbean"
      },
      {
        questionText: "Who played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr."
      },
      {
        questionText: "Which TV series is set in the fictional town of Hawkins?",
        options: ["Wednesday", "Stranger Things", "Friends", "The Office"],
        correctAnswer: "Stranger Things"
      },
      {
        questionText: "Who played Harry Potter in the Harry Potter film series?",
        options: ["Daniel Radcliffe", "Tom Holland", "Rupert Grint", "Elijah Wood"],
        correctAnswer: "Daniel Radcliffe"
      },
      {
        questionText: "Which movie features cloned dinosaurs?",
        options: ["Avatar", "Jurassic Park", "Interstellar", "Inception"],
        correctAnswer: "Jurassic Park"
      },
      {
        questionText: "Which animated movie features Elsa?",
        options: ["Moana", "Frozen", "Tangled", "Brave"],
        correctAnswer: "Frozen"
      },
      {
        questionText: "Which superhero is known as the Dark Knight?",
        options: ["Superman", "Batman", "Spider-Man", "Iron Man"],
        correctAnswer: "Batman"
      },
      {
        questionText: "Which movie series features Katniss Everdeen?",
        options: ["Divergent", "The Hunger Games", "Twilight", "Maze Runner"],
        correctAnswer: "The Hunger Games"
      },
      {
        questionText: "Which TV show follows six friends living in New York City?",
        options: ["Friends", "Wednesday", "Lost", "Sherlock"],
        correctAnswer: "Friends"
      }
    ]
  },

  {
    title: "Music",
    description: "Challenge yourself with questions about songs, singers and music.",
    questions: [
      {
        questionText: "Who is known as the King of Pop?",
        options: ["Michael Jackson", "Elvis Presley", "Justin Bieber", "Bruno Mars"],
        correctAnswer: "Michael Jackson"
      },
      {
        questionText: "Which instrument has 88 keys?",
        options: ["Guitar", "Piano", "Violin", "Flute"],
        correctAnswer: "Piano"
      },
      {
        questionText: "Which singer released Shape of You?",
        options: ["Ed Sheeran", "Justin Timberlake", "Shawn Mendes", "Charlie Puth"],
        correctAnswer: "Ed Sheeran"
      },
      {
        questionText: "Which Indian singer is known for Tum Hi Ho?",
        options: ["Arijit Singh", "Sonu Nigam", "Atif Aslam", "Armaan Malik"],
        correctAnswer: "Arijit Singh"
      },
      {
        questionText: "Which band released Bohemian Rhapsody?",
        options: ["The Beatles", "Queen", "Coldplay", "ABBA"],
        correctAnswer: "Queen"
      },
      {
        questionText: "How many strings does a standard guitar have?",
        options: ["4", "5", "6", "8"],
        correctAnswer: "6"
      },
      {
        questionText: "Which singer released the album 1989?",
        options: ["Taylor Swift", "Adele", "Rihanna", "Lady Gaga"],
        correctAnswer: "Taylor Swift"
      },
      {
        questionText: "Which instrument is strongly associated with Indian classical music?",
        options: ["Sitar", "Saxophone", "Trumpet", "Harp"],
        correctAnswer: "Sitar"
      },
      {
        questionText: "Which genre is associated with improvisation and swing?",
        options: ["Jazz", "Opera", "Reggae", "Disco"],
        correctAnswer: "Jazz"
      },
      {
        questionText: "Who composed the famous Ninth Symphony?",
        options: ["Beethoven", "Mozart", "Bach", "Chopin"],
        correctAnswer: "Beethoven"
      }
    ]
  },

  {
    title: "Travel & Places",
    description: "Discover countries, landmarks and amazing destinations around the world.",
    questions: [
      {
        questionText: "What is the capital of France?",
        options: ["Paris", "Rome", "Madrid", "Berlin"],
        correctAnswer: "Paris"
      },
      {
        questionText: "Which country is famous for the Great Wall?",
        options: ["Japan", "China", "India", "South Korea"],
        correctAnswer: "China"
      },
      {
        questionText: "Where is the Eiffel Tower located?",
        options: ["London", "Paris", "Rome", "Vienna"],
        correctAnswer: "Paris"
      },
      {
        questionText: "Which city is known as the Pink City of India?",
        options: ["Jaipur", "Mumbai", "Delhi", "Lucknow"],
        correctAnswer: "Jaipur"
      },
      {
        questionText: "Which country is home to the pyramids of Giza?",
        options: ["Egypt", "Mexico", "Greece", "Turkey"],
        correctAnswer: "Egypt"
      },
      {
        questionText: "What is the capital of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correctAnswer: "Tokyo"
      },
      {
        questionText: "Which city is famous for the Colosseum?",
        options: ["Rome", "Athens", "Paris", "Lisbon"],
        correctAnswer: "Rome"
      },
      {
        questionText: "Which country is known for the Taj Mahal?",
        options: ["India", "Nepal", "Pakistan", "Bangladesh"],
        correctAnswer: "India"
      },
      {
        questionText: "Which ocean lies between Africa and Australia?",
        options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: "Indian Ocean"
      },
      {
        questionText: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "Boston"],
        correctAnswer: "New York City"
      }
    ]
  },

  {
    title: "Food & Cooking",
    description: "Test your knowledge about food, cuisines and cooking around the world.",
    questions: [
      {
        questionText: "Which country is famous for sushi?",
        options: ["Japan", "China", "Thailand", "Vietnam"],
        correctAnswer: "Japan"
      },
      {
        questionText: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Potato", "Carrot"],
        correctAnswer: "Avocado"
      },
      {
        questionText: "Which spice gives curry its yellow color?",
        options: ["Turmeric", "Cinnamon", "Clove", "Cardamom"],
        correctAnswer: "Turmeric"
      },
      {
        questionText: "Which Italian dish is made with layers of pasta and sauce?",
        options: ["Risotto", "Lasagna", "Gnocchi", "Polenta"],
        correctAnswer: "Lasagna"
      },
      {
        questionText: "Which fruit is traditionally used to make wine?",
        options: ["Apple", "Grape", "Orange", "Mango"],
        correctAnswer: "Grape"
      },
      {
        questionText: "What is the main ingredient in hummus?",
        options: ["Chickpeas", "Rice", "Lentils", "Corn"],
        correctAnswer: "Chickpeas"
      },
      {
        questionText: "Which country is associated with paella?",
        options: ["Spain", "France", "Italy", "Portugal"],
        correctAnswer: "Spain"
      },
      {
        questionText: "Which vegetable is commonly used to make french fries?",
        options: ["Potato", "Carrot", "Onion", "Cabbage"],
        correctAnswer: "Potato"
      },
      {
        questionText: "What is tofu mainly made from?",
        options: ["Soybeans", "Wheat", "Corn", "Rice"],
        correctAnswer: "Soybeans"
      },
      {
        questionText: "Which herb is traditionally used in pesto?",
        options: ["Basil", "Mint", "Coriander", "Rosemary"],
        correctAnswer: "Basil"
      }
    ]
  },

  {
    title: "Books & Literature",
    description: "Explore questions about famous books, authors and world literature.",
    questions: [
      {
        questionText: "Who wrote Romeo and Juliet?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
      },
      {
        questionText: "Who wrote the Harry Potter series?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "Suzanne Collins", "Stephen King"],
        correctAnswer: "J.K. Rowling"
      },
      {
        questionText: "Who wrote Pride and Prejudice?",
        options: ["Jane Austen", "Emily Brontë", "Virginia Woolf", "George Eliot"],
        correctAnswer: "Jane Austen"
      },
      {
        questionText: "Who wrote The Hobbit?",
        options: ["J.R.R. Tolkien", "C.S. Lewis", "George Orwell", "Ernest Hemingway"],
        correctAnswer: "J.R.R. Tolkien"
      },
      {
        questionText: "Who wrote 1984?",
        options: ["George Orwell", "Aldous Huxley", "Charles Dickens", "Leo Tolstoy"],
        correctAnswer: "George Orwell"
      },
      {
        questionText: "Who wrote The Adventures of Tom Sawyer?",
        options: ["Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        correctAnswer: "Mark Twain"
      },
      {
        questionText: "Which novel features the character Sherlock Holmes?",
        options: ["The Hound of the Baskervilles", "The Great Gatsby", "Moby-Dick", "Little Women"],
        correctAnswer: "The Hound of the Baskervilles"
      },
      {
        questionText: "Who wrote The Great Gatsby?",
        options: ["F. Scott Fitzgerald", "John Steinbeck", "Mark Twain", "Ernest Hemingway"],
        correctAnswer: "F. Scott Fitzgerald"
      },
      {
        questionText: "Who wrote The Jungle Book?",
        options: ["Rudyard Kipling", "Lewis Carroll", "Roald Dahl", "Victor Hugo"],
        correctAnswer: "Rudyard Kipling"
      },
      {
        questionText: "Who wrote Alice's Adventures in Wonderland?",
        options: ["Lewis Carroll", "J.M. Barrie", "Rudyard Kipling", "Oscar Wilde"],
        correctAnswer: "Lewis Carroll"
      }
    ]
  },

  {
    title: "Puzzles & Logic",
    description: "Challenge your brain with logic, reasoning and thinking questions.",
    questions: [
      {
        questionText: "What comes next: 2, 4, 6, 8, ?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "10"
      },
      {
        questionText: "What comes next: 5, 10, 15, 20, ?",
        options: ["22", "24", "25", "30"],
        correctAnswer: "25"
      },
      {
        questionText: "If all cats are animals and Tom is a cat, what must be true?",
        options: ["Tom is an animal", "Tom is a dog", "All animals are cats", "Tom is a bird"],
        correctAnswer: "Tom is an animal"
      },
      {
        questionText: "Which number does not belong: 2, 4, 6, 9, 10?",
        options: ["2", "6", "9", "10"],
        correctAnswer: "9"
      },
      {
        questionText: "What comes next: 1, 4, 9, 16, ?",
        options: ["20", "24", "25", "30"],
        correctAnswer: "25"
      },
      {
        questionText: "If today is Monday, what day will it be after 3 days?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        correctAnswer: "Thursday"
      },
      {
        questionText: "Which shape has three sides?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctAnswer: "Triangle"
      },
      {
        questionText: "A clock shows 3:00. What angle is formed between the hour and minute hands?",
        options: ["45 degrees", "90 degrees", "120 degrees", "180 degrees"],
        correctAnswer: "90 degrees"
      },
      {
        questionText: "What is half of 50 plus 10?",
        options: ["25", "30", "35", "40"],
        correctAnswer: "35"
      },
      {
        questionText: "If 3 pencils cost ₹15, how much does one pencil cost?",
        options: ["₹3", "₹4", "₹5", "₹6"],
        correctAnswer: "₹5"
      }
    ]
  }
];

async function seedQuizzes() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB Atlas!");

    await Quiz.deleteMany({});

    await Quiz.insertMany(quizData);

    console.log("All 6 quizzes added successfully!");
    console.log("Total categories: 6");
    console.log("Total questions: 60");

    await mongoose.connection.close();

    console.log("MongoDB connection closed.");
  } catch (error) {
    console.error("Error:", error);
  }
}

seedQuizzes();