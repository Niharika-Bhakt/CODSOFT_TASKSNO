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
                options: ["Avatar", "Pirates of the Caribbean", "The Matrix", "Jurassic Park"],
                correctAnswer: "Pirates of the Caribbean"
            },
            {
                questionText: "Which TV series is set in the fictional continent of Westeros?",
                options: ["Breaking Bad", "Friends", "Game of Thrones", "The Office"],
                correctAnswer: "Game of Thrones"
            },
            {
                questionText: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
                correctAnswer: "Robert Downey Jr."
            },
            {
                questionText: "Which animated movie features the character Elsa?",
                options: ["Frozen", "Moana", "Tangled", "Brave"],
                correctAnswer: "Frozen"
            },
            {
                questionText: "Which movie won the Academy Award for Best Picture in 1998?",
                options: ["Titanic", "Good Will Hunting", "Shakespeare in Love", "Saving Private Ryan"],
                correctAnswer: "Shakespeare in Love"
            },
            {
                questionText: "Which film series features Hogwarts School of Witchcraft and Wizardry?",
                options: ["The Hunger Games", "Harry Potter", "Twilight", "The Maze Runner"],
                correctAnswer: "Harry Potter"
            },
            {
                questionText: "Which TV show follows the lives of six friends in New York City?",
                options: ["Friends", "Lost", "Sherlock", "Dark"],
                correctAnswer: "Friends"
            },
            {
                questionText: "Who directed the movie Jurassic Park?",
                options: ["James Cameron", "Steven Spielberg", "George Lucas", "Tim Burton"],
                correctAnswer: "Steven Spielberg"
            },
            {
                questionText: "Which movie features the fictional character Forrest Gump?",
                options: ["Forrest Gump", "The Green Mile", "Cast Away", "Apollo 13"],
                correctAnswer: "Forrest Gump"
            }
        ]
    },

    {
        title: "Music",
        description: "Challenge yourself with questions about songs, singers and music.",
        questions: [
            {
                questionText: "Which instrument has 88 keys in a standard version?",
                options: ["Guitar", "Piano", "Violin", "Flute"],
                correctAnswer: "Piano"
            },
            {
                questionText: "Which singer is known as the King of Pop?",
                options: ["Elvis Presley", "Michael Jackson", "Bruno Mars", "Justin Timberlake"],
                correctAnswer: "Michael Jackson"
            },
            {
                questionText: "Which band released the song Bohemian Rhapsody?",
                options: ["The Beatles", "Queen", "Coldplay", "ABBA"],
                correctAnswer: "Queen"
            },
            {
                questionText: "How many strings does a standard violin have?",
                options: ["Four", "Five", "Six", "Eight"],
                correctAnswer: "Four"
            },
            {
                questionText: "Which Indian instrument is traditionally associated with Ravi Shankar?",
                options: ["Tabla", "Sitar", "Flute", "Sarod"],
                correctAnswer: "Sitar"
            },
            {
                questionText: "Which musical symbol indicates silence?",
                options: ["Rest", "Clef", "Scale", "Chord"],
                correctAnswer: "Rest"
            },
            {
                questionText: "Which group released the song Dancing Queen?",
                options: ["ABBA", "Queen", "Bee Gees", "The Beatles"],
                correctAnswer: "ABBA"
            },
            {
                questionText: "Which instrument is commonly played with a bow?",
                options: ["Drums", "Violin", "Piano", "Trumpet"],
                correctAnswer: "Violin"
            },
            {
                questionText: "What is the term for the speed of a piece of music?",
                options: ["Tempo", "Pitch", "Harmony", "Rhythm"],
                correctAnswer: "Tempo"
            },
            {
                questionText: "Which singer released the album Thriller?",
                options: ["Michael Jackson", "Elton John", "Prince", "David Bowie"],
                correctAnswer: "Michael Jackson"
            }
        ]
    },

    {
        title: "Travel & Places",
        description: "Discover countries, landmarks and amazing destinations around the world.",
        questions: [
            {
                questionText: "What is the capital city of France?",
                options: ["Madrid", "Paris", "Rome", "Berlin"],
                correctAnswer: "Paris"
            },
            {
                questionText: "Which country is home to the Great Wall?",
                options: ["Japan", "China", "India", "South Korea"],
                correctAnswer: "China"
            },
            {
                questionText: "The Taj Mahal is located in which Indian city?",
                options: ["Delhi", "Jaipur", "Agra", "Mumbai"],
                correctAnswer: "Agra"
            },
            {
                questionText: "Which city is famous for the Eiffel Tower?",
                options: ["Paris", "London", "Vienna", "Prague"],
                correctAnswer: "Paris"
            },
            {
                questionText: "Which country has the city of Dubai?",
                options: ["Qatar", "Saudi Arabia", "United Arab Emirates", "Oman"],
                correctAnswer: "United Arab Emirates"
            },
            {
                questionText: "Which is the largest continent by area?",
                options: ["Africa", "Asia", "Europe", "North America"],
                correctAnswer: "Asia"
            },
            {
                questionText: "Mount Everest lies in which mountain range?",
                options: ["Andes", "Alps", "Himalayas", "Rockies"],
                correctAnswer: "Himalayas"
            },
            {
                questionText: "Which city is known as the Big Apple?",
                options: ["Los Angeles", "New York City", "Chicago", "Boston"],
                correctAnswer: "New York City"
            },
            {
                questionText: "Which country is famous for the ancient city of Petra?",
                options: ["Egypt", "Jordan", "Greece", "Turkey"],
                correctAnswer: "Jordan"
            },
            {
                questionText: "Which ocean is the largest on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correctAnswer: "Pacific Ocean"
            }
        ]
    },

    {
        title: "Food & Cooking",
        description: "Test your knowledge about food, cuisines and cooking around the world.",
        questions: [
            {
                questionText: "Which country is famous for pizza?",
                options: ["Italy", "Spain", "France", "Greece"],
                correctAnswer: "Italy"
            },
            {
                questionText: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Avocado", "Potato", "Carrot"],
                correctAnswer: "Avocado"
            },
            {
                questionText: "Which spice gives many Indian dishes a yellow color?",
                options: ["Cumin", "Turmeric", "Cardamom", "Clove"],
                correctAnswer: "Turmeric"
            },
            {
                questionText: "Sushi is traditionally associated with which country?",
                options: ["China", "Thailand", "Japan", "Vietnam"],
                correctAnswer: "Japan"
            },
            {
                questionText: "Which ingredient is used to make bread rise?",
                options: ["Yeast", "Salt", "Oil", "Sugar"],
                correctAnswer: "Yeast"
            },
            {
                questionText: "Which fruit is traditionally used to make wine?",
                options: ["Apple", "Grape", "Orange", "Banana"],
                correctAnswer: "Grape"
            },
            {
                questionText: "What is the main ingredient in hummus?",
                options: ["Chickpeas", "Lentils", "Rice", "Corn"],
                correctAnswer: "Chickpeas"
            },
            {
                questionText: "Which cooking method uses hot oil to cook food?",
                options: ["Steaming", "Frying", "Boiling", "Baking"],
                correctAnswer: "Frying"
            },
            {
                questionText: "Which dessert is traditionally made with layers of pastry and nuts?",
                options: ["Baklava", "Brownie", "Pudding", "Cheesecake"],
                correctAnswer: "Baklava"
            },
            {
                questionText: "Which herb is commonly used in pesto?",
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
                questionText: "Who wrote the Harry Potter series?",
                options: ["J.K. Rowling", "Jane Austen", "Agatha Christie", "Virginia Woolf"],
                correctAnswer: "J.K. Rowling"
            },
            {
                questionText: "Who wrote Romeo and Juliet?",
                options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "George Orwell"],
                correctAnswer: "William Shakespeare"
            },
            {
                questionText: "Who wrote Pride and Prejudice?",
                options: ["Jane Austen", "Emily Brontë", "Mary Shelley", "Louisa May Alcott"],
                correctAnswer: "Jane Austen"
            },
            {
                questionText: "Which novel features the character Sherlock Holmes?",
                options: ["The Hound of the Baskervilles", "The Great Gatsby", "Oliver Twist", "Dracula"],
                correctAnswer: "The Hound of the Baskervilles"
            },
            {
                questionText: "Who wrote The Jungle Book?",
                options: ["Rudyard Kipling", "Oscar Wilde", "Lewis Carroll", "H.G. Wells"],
                correctAnswer: "Rudyard Kipling"
            },
            {
                questionText: "Which novel begins with the character Scout Finch?",
                options: ["To Kill a Mockingbird", "Little Women", "Jane Eyre", "Wuthering Heights"],
                correctAnswer: "To Kill a Mockingbird"
            },
            {
                questionText: "Who wrote 1984?",
                options: ["George Orwell", "Aldous Huxley", "Ernest Hemingway", "F. Scott Fitzgerald"],
                correctAnswer: "George Orwell"
            },
            {
                questionText: "Who wrote The Great Gatsby?",
                options: ["F. Scott Fitzgerald", "John Steinbeck", "George Orwell", "Leo Tolstoy"],
                correctAnswer: "F. Scott Fitzgerald"
            },
            {
                questionText: "Which fictional detective was created by Agatha Christie?",
                options: ["Hercule Poirot", "Sherlock Holmes", "Philip Marlowe", "Hannibal Lecter"],
                correctAnswer: "Hercule Poirot"
            },
            {
                questionText: "Who wrote The Lord of the Rings?",
                options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
                correctAnswer: "J.R.R. Tolkien"
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
                questionText: "If all roses are flowers and some flowers fade quickly, can we conclude that all roses fade quickly?",
                options: ["Yes, always", "No, not necessarily", "Only in summer", "Only at night"],
                correctAnswer: "No, not necessarily"
            },
            {
                questionText: "What is 15 + 27?",
                options: ["40", "41", "42", "43"],
                correctAnswer: "42"
            },
            {
                questionText: "What comes next: 3, 6, 12, 24, ?",
                options: ["36", "42", "48", "54"],
                correctAnswer: "48"
            },
            {
                questionText: "A clock shows 3:00. What is the angle between the hour and minute hands?",
                options: ["45°", "60°", "90°", "120°"],
                correctAnswer: "90°"
            },
            {
                questionText: "If 5 machines make 5 items in 5 minutes, how long does one machine take to make one item?",
                options: ["1 minute", "5 minutes", "10 minutes", "25 minutes"],
                correctAnswer: "5 minutes"
            },
            {
                questionText: "Which number does not belong: 2, 4, 6, 9, 10?",
                options: ["2", "6", "9", "10"],
                correctAnswer: "9"
            },
            {
                questionText: "If yesterday was Monday, what day is tomorrow?",
                options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                correctAnswer: "Wednesday"
            },
            {
                questionText: "What is the missing number: 5, 10, 15, 20, ?",
                options: ["22", "23", "24", "25"],
                correctAnswer: "25"
            },
            {
                questionText: "A farmer has 10 sheep. All but 3 run away. How many sheep remain?",
                options: ["3", "7", "10", "0"],
                correctAnswer: "3"
            }
        ]
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB Atlas Successfully!");

        await Quiz.deleteMany({});

        await Quiz.insertMany(quizData);

        console.log("All 6 categories and 60 questions added successfully!");

        await mongoose.connection.close();

        console.log("Database connection closed.");
    } catch (error) {
        console.error("Database error:", error);
        process.exit(1);
    }
}

seedDatabase();