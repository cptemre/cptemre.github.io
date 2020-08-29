function change() {
    const quotes = {
        Gandalf: "There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.", 
        Gandalf: "I am Gandalf the White. And I come back to you now… at the turn of the tide.", 
        Gandalf: "Oh, it’s quite simple. If you are a friend, you speak the password, and the doors will open.", 
        Gandalf: "Well, what can I tell you? Life in the wide world goes on much as it has this past Age, full of its own comings and goings, scarcely aware of the existence of Hobbits, for which I am very thankful.", 
        Gandalf: "The Ring has awoken, it’s heard its masters call.", 
        Gandalf: "The board is set, the pieces are moving. We come to it at last, the great battle of our time.",
        Sam: "That there’s some good in this world, Mr. Frodo… and it’s worth fighting for.",
        Sam: "Mordor. The one place in Middle-Earth we don’t want to see any closer. And it’s the one place we’re trying to get to. It’s just where we can’t get. Let’s face it, Mr. Frodo, we’re lost.",
        Galadriel: "Even the smallest person can change the course of the future.",
        Galadriel: "The time of the Elves… is over. Do we leave Middle-Earth to its fate? Do we let them stand alone?",
        Galadriel: "For the time will soon come when Hobbits will shape the fortunes of all.",
        Gollum: "We swears, to serve the master of the Precious. We will swear on… on the Precious!",
        Gollum: "But the fat Hobbit, he knows. Eyes always watching.",
        Treebeard: "There is no curse in Elvish, Entish, or the tongues of Men for this treachery.",
        Aragorn: "A day may come when the courage of men fails… but it is not THIS day.",
        Arwen: "I would rather share one lifetime with you than face all the Ages of this world alone.",
        Arwen: "Your time will come. You will face the same Evil, and you will defeat it.",
        Bilbo: "I thought up an ending for my book. ‘And he lives happily ever after, till the end of his days.",
        Gimli: "You are the luckiest, the canniest, and the most reckless man I ever knew. Bless you, laddie.",
        Frodo: "I’m glad to be with you, Samwise Gamgee…here at the end of all things"
    };
    const newQuote = document.getElementById("quote");
    const newAuthor = document.getElementById("author");

    var randomNumber = Math.floor(Math.random() * 20); // Object.keys(quotes).length kullanırsan keylerin değer sayısı gelir
    console.log(randomNumber);

    var author;

    if (randomNumber >= 0 && randomNumber <= 5) {
        author = "Gandalf";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Gandalf;
    }
    else if (randomNumber == 6 || randomNumber == 7) {
        author = "Sam";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Sam;
    }
    else if (randomNumber >= 8 && randomNumber <= 10) {
        author = "Galadriel";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Galadriel;
    }
    else if (randomNumber >= 11 && randomNumber <= 13) {
        author = "Gollum";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Gollum;
    }
    else if (randomNumber == 14) {
        author = "Treebeard";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Treebeard;
    }
    else if (randomNumber == 15) {
        author = "Aragorn";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Aragorn;
    }
    else if (randomNumber == 16 || randomNumber == 17) {
        author = "Arwen";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Arwen;
    }
    else if (randomNumber == 18) {
        author = "Bilbo";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Bilbo;
    }
    else if (randomNumber == 19) {
        author = "Gimli";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Gimli;
    }
    else if (randomNumber == 20) {
        author = "Frodo";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = quotes.Frodo;
    }
    else {
        author = "J.R.R Tolkien";
        newAuthor.innerHTML = author;
        newQuote.innerHTML = "One Ring to rule them all, One Ring to find them,One Ring to bring them all, and in the darkness bind them";
    }
    var lastRandom = randomNumber;
    if (randomNumber == lastRandom) {
        randomNumber = (randomNumber/2) + 1;
    }
}