
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('joke').del()
    .then(function () {
      // Inserts seed entries
      return knex('joke').insert([
        {
          "id": 1,
          type: "general",
          setup: "What did the fish say when it hit the wall?",
          punchline: "Dam."
        },
        {
          "id": 2,
          type: "general",
          setup: "How do you make a tissue dance?",
          punchline: "You put a little boogie on it."
        },
        {
          "id": 3,
          type: "general",
          setup: "What's Forrest Gump's password?",
          punchline: "1Forrest1"
        },
        {
          "id": 4,
          type: "general",
          setup: "What do you call a belt made out of watches?",
          punchline: "A waist of time."
        },
        {
          "id": 5,
          type: "general",
          setup: "Why can't bicycles stand on their own?",
          punchline: "They are two tired"
        },
        {
          "id": 6,
          type: "general",
          setup: "How does a train eat?",
          punchline: "It goes chew, chew"
        },
        {
          "id": 7,
          type: "general",
          setup: "What do you call a singing Laptop",
          punchline: "A Dell"
        },
        {
          "id": 8,
          type: "general",
          setup: "How many lips does a flower have?",
          punchline: "Tulips"
        },
        {
          "id": 9,
          type: "general",
          setup: "How do you organize an outer space party?",
          punchline: "You planet"
        },
        {
          "id": 10,
          type: "general",
          setup: "What kind of shoes does a thief wear?",
          punchline: "Sneakers"
        },
        {
          "id": 11,
          type: "general",
          setup: "What's the best time to go to the dentist?",
          punchline: "Tooth hurty."
        },
        {
          "id": 12,
          type: "knock-knock",
          setup: "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
          punchline: "Never mind. It's pointless."
        },
        {
          "id": 13,
          type: "knock-knock",
          setup: "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
          punchline: "No, cows go moo."
        },
        {
          "id": 14,
          type: "knock-knock",
          setup: "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
          punchline: "I didn't know you could yodel!"
        },
        {
          "id": 15,
          type: "programming",
          setup: "What's the best thing about a Boolean?",
          punchline: "Even if you're wrong, you're only off by a bit."
        },
        {
          "id": 16,
          type: "programming",
          setup: "What's the object-oriented way to become wealthy?",
          punchline: "Inheritance"
        },
        {
          "id": 17,
          type: "programming",
          setup: "Where do programmers like to hangout?",
          punchline: "The Foo Bar."
        },
        {
          "id": 18,
          type: "programming",
          setup: "Why did the programmer quit his job?",
          punchline: "Because he didn't get arrays."
        },
        {
          "id": 19,
          type: "general",
          setup: "Did you hear about the two silk worms in a race?",
          punchline: "It ended in a tie."
        },
        {
          "id": 20,
          type: "general",
          setup: "What do you call a laughing motorcycle?",
          punchline: "A Yamahahahaha."
        },
        {
          "id": 21,
          type: "general",
          setup: "A termite walks into a bar and says...",
          punchline: "'Where is the bar tended?'"
        },
        {
          "id": 22,
          type: "general",
          setup: "What does C.S. Lewis keep at the back of his wardrobe?",
          punchline: "Narnia business!"
        },
        {
          "id": 23,
          type: "programming",
          setup: "Why do programmers always mix up Halloween and Christmas?",
          punchline: "Because Oct 31 == Dec 25"
        },
        {
          "id": 24,
          type: "programming",
          setup: "A SQL query walks into a bar, walks up to two tables and asks...",
          punchline: "'Can I join you?'"
        },
        {
          "id": 25,
          type: "programming",
          setup: "How many programmers does it take to change a lightbulb?",
          punchline: "None that's a hardware problem"
        },
        {
          "id": 26,
          type: "programming",
          setup: "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
          punchline: "the rest of them will write Perl"
        },
        {
          "id": 27,
          type: "programming",
          setup: "['hip', 'hip']",
          punchline: "(hip hip array)"
        },
        {
          "id": 28,
          type: "programming",
          setup: "To understand what recursion is...",
          punchline: "You must first understand what recursion is"
        },
        {
          "id": 29,
          type: "programming",
          setup: "There are 10type of people in this world...",
          punchline: "Those wh undestand binary and those who don't"
      },
       {
          "id": 30,
          type: "general",
          setup: "What did the duck say when he bought lipstick?",
          punchline: "Put it on my bill"
        },
        {
          "id": 31,
          type: "general",
          setup: "What happens to a frog's car when it breaks down?",
          punchline: "It gets toad away"
        },
        {
          "id": 32,
          type: "general",
          setup: "did you know the first French fries weren't cooked in France?",
          punchline: "they were cooked in Greece"
        },
        {
          "id": 33,
          type: "programming",
          setup: "Which song would an exception sing?",
          punchline: "Can't catch me - Avicii"
        },
        {
          "id": 34,
          type: "knock-knock",
          setup: "Knock knock. \n Who's there? \n Opportunity.",
          punchline: "That is impossible. Opportunity doesn’t come knocking twice!"
        },
        {
          "id": 35,
          type: "programming",
          setup: "Why do Java programmers wear glasses?",
          punchline: "Because they don't C#"
        },
        {
          "id": 36,
          type: "general",
          setup: "Why did the mushroom get invited to the party?",
          punchline: "Because he was a fungi."
        },
        {
          "id": 37,
          type: "general",
          setup: "Why did the mushroom get invited to the party?",
          punchline: "Because he was a fungi."
        },
        {
          "id": 38,
          type: "general",
          setup: "I'm reading a book about anti-gravity...",
          punchline: "It's impossible to put down"
        },
        {
          "id": 39,
          type: "general",
          setup: "If you're American when you go into the bathroom, and American when you come out, what are you when you're in there?",
          punchline: "European"
        },
        {
          "id": 40,
          type: "general",
          setup: "Want to hear a joke about a peice of paper?",
          punchline: "Never mind...it's tearable"
        },
        {
          "id": 41,
          type: "general",
          setup: "I just watched a documentary about beavers.",
          punchline: "It was the best dam show I ever saw"
        },
        {
          "id": 42,
          type: "general",
          setup: "If you see a robbery at an Apple Store...",
          punchline: "Does that make you an iWitness?"
        },
        {
          "id": 43,
          type: "general",
          setup: "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
          punchline: "I'm sorry, we don't serve food here"
        },
        {
          "id": 44,
          type: "general",
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse"
        },
        {
          "id": 45,
          type: "general",
          setup: "If you boil a clown...",
          punchline: "Do you get a laughing stock?"
        },
        {
          "id": 46,
          type: "general",
          setup: "Finally realized why my plant sits around doing nothing all day...",
          punchline: "He loves his pot."
        },
        {
          "id": 47,
          type: "general",
          setup: "Don't look at the eclipse through a colander.",
          punchline: "You'll strain your eyes."
        },
        {
          "id": 48,
          type: "general",
          setup: "I bought some shoes from a drug dealer.",
          punchline: "I don't know what he laced them with, but I was tripping all day!"
        },
        {
          "id": 49,
          type: "general",
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans"
        },
        {
          "id": 50,
          type: "general",
          setup: "What do you call a factory that sells passable products?",
          punchline: "A satisfactory"
        },
        {
          "id": 51,
          type: "general",
          setup: "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
          punchline: "Yep, people are just dying to get in there"
        },
        {
          "id": 52,
          type: "general",
          setup: "Why did the invisible man turn down the job offer?",
          punchline: "He couldn't see himself doing it"
        },
        {
          "id": 53,
          type: "general",
          setup: "How do you make holy water?",
          punchline: "You boil the hell out of it"
        },
        {
          "id": 54,
          type: "general",
          setup: "I had a dream that I was a muffler last night.",
          punchline: "I woke up exhausted!"
        },
        {
          "id": 55,
          type: "general",
          setup: "Why is peter pan always flying?",
          punchline: "Because he neverlands"
        },
        {
          "id": 56,
          type: "programming",
          setup: "How do you check if a webpage is HTML5?",
          punchline: "Try it out on Internet Explorer"
        },
        {
          "id": 57,
          type: "general",
          setup: "What do you call a cow with no legs?",
          punchline: "Ground beef!"
        },
        {
          "id": 58,
          type: "general",
          setup: "I dropped a pear in my car this morning.",
          punchline: "You should drop another one, then you would have a pair."
        },
        {
          "id": 59,
          type: "programming",
          setup: "Lady: How do I spread love in this cruel world?",
          punchline: "Random Dude: [...💘]"
        },
        {
          "id": 60,
          type: "programming",
          setup: "A user interface is like a joke.",
          punchline: "If you have to explain it then it is not that good."
        },
        {
          "id": 61,
          type: "knock-knock",
          setup: "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
          punchline: "Bless you!"
        },
        {
          "id": 62,
          type: "general",
          setup: "What do you call sad coffee?",
          punchline: "Despresso."
        },
        {
          "id": 63,
          type: "general",
          setup: "Why did the butcher work extra hours at the shop?",
          punchline: "To make ends meat."
        }      ]);
    });
};
