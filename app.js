const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const textElement = document.getElementById('text');
textElement.style.color = "#FFF";
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) 
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "You open your eyes to see the ceiling of your aunt's trailer.",
        options: [
            {
                text: 'Look around',
                nextText: 3
            },
            {
                text: 'Go back to sleep',
                nextText: 2
            },
        ]
    },
    {
        id: 2,
        text: 'You hear a noise above you followed by a sharp wack to the back of your head. You open your eyes quickly and see your aunt Alice and her boyfriend standing above you. She seems more lucid than normal, which was bad news.',
        options: [
            {
                text: 'Wait for them to speak',
                nextText: 4
            },
            {
                text: 'Say Good Morning',
                nextText: 4
            },
            {
                text: 'Try to leave',
                nextText: 5
            },
        ]
    },
    {
        id: 3,
        text: 'You see your computer next to you, along with the closed door to your right that leads to the rest of the trailer. Behind you, there is a broken washing machine with a window above it.',
        options: [
            {
             text: 'Open the computer',
             nextText: 12
            },
            {
                text: 'Open the door',
                nextText: 8
            },
            {
                text: 'Examine the washing machine',
                nextText: 6
            },
            {
                text: 'Open the window',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'Aunt Alice looks at you in distain and then reaches out, motioning for the laptop',
        options: [
            {
                text: 'Resist',
                nextText: 9
            },
            {
                text: 'Surrender your computer',
                nextText: 10
            }
        ]
    },
    {
        id: 5,
        text: 'You try to leave through the window but your Aunt grabs your leg and calls her boyfriend. He comes in and hits you before taking the laptop. They both leave.',
        options: [
            {
            text: 'Exit the room',
            nextText: 11,
            }
        ]
    },
    {
        id: 6,
        text: 'You examine the washing machine and find nothing unusual',
        options: [
            {
                text: 'Stop examining',
                nextText: 3,
            }
        ]
    },
    {
        id: 7,
        text: 'You open the window and step out onto the ledge that surrounds your trailer in its stack. You slowly begin your decent, finially dropping down to a crossroads.',
        options: [
            {
                text: 'Look north',
                nextText: 13,
            },
            {
                text: 'Look south',
                nextText: 14,
            },
            {
                text: 'Look east',
                nextText: 14,
            },
            {
                text: 'Look west',
                nextText: 14,
            }
        ]
    },
    {
        id: 8,
        text: 'You open the door and see your Aunt Alice sleeping on the couch. Your steps wake her up and she looks up, spotting you. She walks over and takes your computer, telling you she is going to sell it for food vouchers',
        options: [
            {
                text: 'Resist',
                nextText: 9
            },
            {
                text: 'Surrender your computer',
                nextText: 10
            }
        ]
    },
    {
        id: 9,
        text: 'You resist but she calls over her boyfriend, Rick and he hits you before taking the computer and leaving.',
        options: [
            {
                text: 'Exit the room',
                nextText: 11
            }
        ]
    },
    {
        id: 10,
        text: 'You give over your computer knowing that there is no use in resisting',
        options: [
            {
                text: 'Exit the room',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: 'You enter the room and see a washing machine and the open window above it',
        options: [
            {
                text: 'Examine the washing machine',
                nextText: 6
            },
            {
                text: 'Open the window',
                nextText: 7
            }
        ]
    },
    {
        id: 12,
        text: "You open the computer and start playing Robotron: 2084, one of your all time favorites. A fast paced, action packed, shooter. After finishing a couple games, you start watching Family Ties, a 1980's sitcome. Halfway through the second episode, Aunt Alice opens the door. She looks at you in distain and then reaches out, motioning for the laptop",
        options: [
            {
                text: 'Resist',
                nextText: 9
            },
            {
                text: 'Surrender your computer',
                nextText: 10
            },
        ]
    },
    {
        id: 13,
        text: 'You see nothing of interest.',
        options: [
            {
                text: 'Walk forward',
                nextText: 15
            },
            {
                text: 'Look north',
                nextText: 14
            },
            {
                text: 'Look south',
                nextText: 16,
            },
            {
                text: 'Look east',
                nextText: 16,
            },
            {
                text: 'Look west',
                nextText: 16,
            }

        ]
    },
    {
        id: 14,
        text: 'You see a large pile of abandoned cars',
        options: [
            {
                text: 'examine',
                nextText: 17,
            },
            {
                text: 'Go back',
                nextText: 16,
            }
        ]
    },
    {
        id: 15,
        text: 'There is nothing of interest.',
        options: [
            {
                text: 'Go back',
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: 'You are at a crossroads.',
        options: [
            {
                text: 'Look north',
                nextText: 14
            },
            {
                text: 'Look south',
                nextText: 13,
            },
            {
                text: 'Look east',
                nextText: 13,
            },
            {
                text: 'Look west',
                nextText: 13,
            }
        ]
    },
    {
        id: 17,
        text: 'You examine the pile of cars and happen apon one, burried deep in the pile, that is unlocked. You open the door and find that the inside spacious enough for him to stand inside.',
        options: [
            {
                text: 'Get inside the car',
                nextText: 18,
            },
            {
                text: 'Leave',
                nextText: 16,
            }
        ]
    },
    {
        id: 18,
        text: 'It looks to you like an idea hideout. You get into the car and take out your OASIS visor and gloves. Logging into the OASIS, you are automatically put back into your high school on the planet Ludus, the last place where you logged out the night before. You are Parzival.',
        options: [
            {
                text: 'look around',
                nextText: 19
            },
            {
                text: 'walk down the hallway',
                nextText: 20,
            },
            {
                text: 'open your messages',
                nextText: 21,
            }
        ]
    },
    {
        id: 19,
        text: 'You look around the hallway and see the avatar Todd13 and a bunch of his friends laughing in their new designer clothes.',
        options: [
            {
                text: 'walk down the hallway towards him',
                nextText: 22,
            },
            {
                text: 'walk the other way',
                nextText: 23,
            }
        ]
    },
    {
        id: 20,
        text: 'You walk down the hallway and run into an avatar called Todd13. He turns around and shoves you. "Hey, hey! If it isn\'t Wade Three. Where did you get the sweet outfit?" he says. I was still wearing the default black T-shirt and blue jeans.',
        options: [
            {
                text: 'Retort',
                nextText: 24,
            },
            {
                text: 'Try to ignore him',
                nextText: 25,
            }
        ]
    },
    {
        id: 21,
        text: 'You open your mail and see an invite from your friend Aech to "The Basement," his exclusive hangout room. You also have a notification that Art3mis posted again on her personal blog.',
        options: [
            {
                text: 'Enter "The Basement"',
                nextText: 26,
            },
            {
                text: "Read Arty's Missives",
                nextText: 27,
            },
            {
                text: 'Exit your messages',
                nextText: 28,
            }
        ]
    },
    {
        id: 22,
        text: 'You walk up to him and say hello. He turns around in mild confusion and disgust. Without warning, he shoves you. "Hey, hey! If it isn\'t Wade Three. Where did you get the sweet outfit?" he says. You are still wearing the default black T-shirt and blue jeans.',
        options: [
            {
                text: 'Retort',
                nextText: 24,
            },
            {
                text: 'Try to ignore him',
                nextText: 25,
            }
        ]
    },
    {
        id: 23,
        text: 'You walk the other direction but you realize that you are going to be late for your first class, World History, unless you walk towards Todd13.',
        options: [
            {
                text: 'Be late to class',
                nextText: 31,
            },
            {
                text: 'Walk back towards Todd13',
                nextText: 20,
            }
        ]
    },
    {
        id: 24,
        text: '"Your mom bought them for me," you say. "Tell her thanks the next time you stop at home to breast-feed and pick up your allowance." Childish, yes. But it is high school, the more childish an insult, the more effective it is. Before he can say anything more, you mute him',
        options: [
            {
                text: 'Continue on your way to class',
                nextText: 30,
            },

        ]
    },
    {
        id: 25,
        text: 'You get up from the ground and try to continue past. However, he blocks your way.',
        options: [
            {
                text: 'push past him',
                nextText: 29,
            },
            {
                text: 'retort',
                nextText: 24,
            }
        ]
    },
    {
        id: 26,
        text: 'You enter the basement and see Aech, your best friend, lounging on the couch on the other side of the room. "Z, he shouted. What is up, amigo?""What up, Aech, you respond. "Not much," he said. "Want to play a match of Tron?"',
        options: [
            {
                text: 'play a round',
                nextText: 35,
            },
            {
                text: 'Say you have to get to class and was just hopping in to say hi',
                nextText: 30,
            }
        ]
    },
    {
        id: 27,
        text: "You open Arty's missives and read the most recent article, a beautifully written treatise on her six favorite John Hughes teen movies that she called, 'The John Hughes Blues.' You have read and memorized every article that she has posted. It is safe to say that you have a huge cyber crush on Art3mis.",
        options: [
            {
                text: 'Close your messages',
                nextText: 28
            }
        ]
    },
    {
        id: 28,
        text: 'You exit your messages.',
        options: [
            {
                text: 'look around',
                nextText: 19
            },
            {
                text: 'walk down the hallway',
                nextText: 20,
            },
            {
                text: 'open your messages',
                nextText: 21,
            }
        ]
    },
    {
        id: 29,
        text: 'You push past him, and to your suprise, he moves out of the way, possibly because he was so shocked that you would try.',
        options: [
            {
                text: 'continue on your way to class',
                nextText: 30,
            }
        ]
    },
    {
        id: 30,
        text: 'You enter your class 1 minute before the bell and sit down.',
        options: [
            {
                text: 'Class',
                nextText: 34,
            }
        ]
    },
    {
        id: 31,
        text: 'You enter class 2 minutes late, and the teacher looks up from his lecture. "Thank you for finally joining us, Wade3."',
        options: [
            {
                text: 'Apologize',
                nextText: 32,
            },
            {
                text: 'Sit down',
                nextText: 33,
            }
        ]
    },
    {
        id: 32,
        text: 'Sorry sir. I lost track of time.',
        options: [
            {
                text: 'Class',
                nextText: 34,
            }
        ]
    },
    {
        id: 33,
        text: 'You decide to sit down quietly and take out your books',
        options: [
            {
                text: 'Class',
                nextText: 34,
            }
        ]
    },
    {
        id: 34,
        text: 'Your day passes as you go from class to class, until you enter last period, Latin.',
        options: [
            {
                text: 'listen',
                nextText: 37,
            },
            {
                text: 'continue your research on the hunt',
                nextText: 38,
            }
        ]
    },
    {
        id: 35,
        text: 'You pick up the controller and the video game cabinet lights up with Tron: Deadly Discs. A classic. I smiled and we began to play. After winning three rounds, Aech tossed away his controller and shook his head ruefully.',
        options: [
            {
                text: 'gloat',
                nextText: 36,
            },
            {
                text: 'tell him you have to get to class',
                nextText: 30,
            }
        ]
    },
    {
        id: 36,
        text: '"Not bad, Aech," you say. Next time, stick to the Star Wars games. Aech ignores you, and picks up an issue of Starlog, a magizine made in 1980.',
        options: [
            {
                text: 'Go to class',
                nextText: 30,
            }
        ]
    },
    {
        id: 37,
        text: 'The teacher, Ms. Rank, was saying, "To learn. Discere. Now this should be easy to remember, because it\'s similar to the english word, \'discern,\' which also means, \'to learn.\'" The repetition of the phrase, "to learn," reminded you of the limerick. "You have much to learn if you hope to earn a place among the high scorers.',
        options: [
            {
                text: 'look up the limerick',
                nextText: 39,
            },
            {
                text: 'look up discere',
                setState: {Knowlege: true},
                nextText: 40,
            },
            {
                text: 'Continue listening to the class',
                nextText: 44,
            }
        ]
    },
    {
        id: 38,
        text: 'You continue to not pay attention to the teacher and open the Alminac. You ponder the meaning of the limerick. You already have figured out that "A tomb filled with horrors" refers to the D&D manual, "Tomb of Horrors," but the rest of the clue is still lost on you. "You have much to learn if you hope to earn a place among the high scorers." But what does it mean?',
        options: [
            {
                text: 'read the Alminac',
                nextText: 41,
            },
            {
                text: 'pay attention to the class',
                nextText: 37,
            },
            {
                text: 'watch a movie',
                nextText: 43,
            }
        ]
    },
    {
        id: 39,
        text: 'The Copper Key awaits explorers \nIn a Tomb Filled with Horrors \nBut you have much to learn \nIf you hope to earn \nA place among the high scorers',
        options: [
            {
                text: 'Continue to not pay attention',
                nextText: 38,
            },
            {
                text: 'Listen to the teacher',
                nextText: 37,
            }
        ]
    },
    {
        id: 40,
        text: 'Discere: to learn. \n Other common searches: Ludus: school, game',
        options: [
            {
                text: 'start listening to the teacher',
                nextText: 37,
            },
            {
                text: 'go back to reading the Alminac',
                nextText: 38,
            }
        ]
    },
    {
        id: 41,
        text: 'You re-read pieces of the Alminac but find nothing new',
        options: [
            {
                text: 'watch a movie instead',
                nextText: 43,
            },
            {
                text: 'return to class',
                nextText: 37,
            }
        ]
    },
    {
        id: 42,
        text: '',
        options: [

        ]
    },
    {
        id: 43,
        text: "You decide to watch a movie, Wargames, a 1980's classic. You take notes so that you don't miss anything that could be important to the hunt. However, nothing pops out at you.",
        options: [
            {
                text: 'read the Alminac',
                nextText: 41,
            },
            {
                text: 'pay attention to the class',
                nextText: 37,
            }
        ]
    },
    {
        id: 44,
        text: 'The class continues until the last bell rings.',
        options: [
            {
                text: 'Look for the tomb of horrors',
                nextText: 45,
            },
            {
                text: 'log off',
                nextText: 100,
            }

        ]
    },
    {
        id: 45,
        text: 'You decide to look for the Tomb of Horrors, but you are not sure where to start.',
        options: [
            {
                text: 'search the OASIS for any planets or connections to the Tomb of Horrors',
                nextText: 46,
            },
            {
                text: 'search to forums for any information that someone could have leaked',
                nextText: 47,
            },
            {
                requiredState: (currentState) => currentState.Knowlege,
                text: 'search Ludus for any signs of the Tomb of Horrors ',
                nextText: 48,
            }
        ]
    },{
        id: 46,
        text: 'You look for any connections to the tomb in the OASIS but you are not really sure where to start. Perhaps you should have payed more attention in class.',
        options: [
            {
                text: 'review the class footage',
                nextText: 49,
            },
            {
                text: 'teleport to some of the planets you were searching to try and find some clue',
                nextText: 101,
            }
        ]
    },
    {
        id: 47,
        text: 'You seach the forums but you find nothing',
        options: [
            {
                text: 'keep searching',
                nextText: 45,
            },
            {
                text: 'log off for the night',
                nextText: 100,
            }
        ]
    },
    {
        id: 48,
        text: 'You search the surface of Ludus for any signs of the tomb and your heart skips a beat when a match appears. On the opposite side of the planet, there is a skull-shaped rock outcrop that matches the entrance of the tomb of horrors.',
        options: [
            {
                text: 'Try to teleport there',
                nextText: 51,
            },
            {
                text: 'Talk to Aech',
                nextText: 52,
            }
        ]
    },
    {
        id: 49,
        text: 'You review the footage of the class. \nMs. Rank, was saying, "To learn. Discere. Now this should be easy to remember, because it\'s similar to the english word, \'discern,\' which also means, \'to learn.\'"',
        options: [
            {
                text: 'search Discere',
                nextText: 50,
            },
            {
                text: 'keep searching',
                nextText: 45,
            }
        ]
    },
    {
        id: 50,
        text: 'Discere: to learn. \n Other common searches: Ludus: school, game',
        setState: {Knowlege: true},
        options: [
            {
                text: 'Keep searching',
                nextText: 45,
            }
        ]
    },
    {
        id: 51,
        text: 'You try to teleport to the tomb but a notification appears. "Insuffient credits to make this purchase."',
        options: [
            {
                text: 'find another way',
                nextText: 53,
            },
            {
                text: 'Talk to Aech',
                nextText: 52,
            }
        ]
    },
    {
        id: 52,
        text: 'You call Aech and tell him about your breakthrough. He is suprised that you are telling him this but quickly scans Ludus and finds the same pattern. His school is much closer to the tomb and he recommends that you take the free transportation between schools in order to get there quickly.',
        options: [
            {
                text: 'meet Aech at his school',
                nextText: 54,
            }
        ]
    },
    {
        id: 53,
        text: 'You want to find another way to get to the tomb',
        options: [
            {
                text: 'look around your school to find a way to get to the tomb',
                nextText: 55,
            },
            {
                text: 'Start running towards the tomb. By your calculations, it will take you 3 days of non-stop running.',
                nextText: 56,
            }
        ]
    },
    {
        id: 54,
        text: "You take Aech's advice and quickly teleport to Aech's school, meeting him at the edge of campus. You set out towards where the map says the entrance to the Tomb of Horrors is.",
        options: [
            {
                text: 'continue',
                nextText: 57,
            }
        ]
    },
    {
        id: 55,
        text: "You look around the school and see a bulletin board with a notice saying that there will be a zero-gravity football game between their school and Aech's school, a school that is much closer to where the tomb is. His school is also offering free transportation to anyone who wants to watch and support their school.",
        options: [
            {
                text: 'take the free teleportation',
                nextText: 58,
            }
        ]
    },
    {
        id: 56,
        text: 'You start running. However, after two days, you are notified that, because you have skipped school and you have so many passed absences, you will not be able graduate. Because of this, your OASIS account is being revoked and you will lose access to the OASIS.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 57,
        text: 'You enter the tomb, but the moment you step inside, Aech disappears. You message him where he is and he says that they probably were placed into seperate instances of the tomb, so that they cannot work together to pass through the tomb.',
        options: [
            {
                text: 'Continue into the tomb',
                nextText: 85,
            }
        ]
    },
    {
        id: 85,
        text: 'You enter the tomb',
        options: [
            {
                text: 'Look around',
                nextText: 59,
            },
            {
                text: 'Walk down the tunnel',
                nextText: 60,
            },
            {
                text: 'Exit the tomb',
                nextText: 61,
            }
        ]
    },
    {
        id: 58,
        text: 'You arrive at the spot that the tomb was marked to be, and see the skull-shaped rocks. It seems almost surreal. You enter the tomb.',
        options: [
            {
                text: 'Look around',
                nextText: 59,
            },
            {
                text: 'Walk down the tunnel',
                nextText: 60,
            },
            {
                text: 'Exit the tomb',
                nextText: 61,
            }
        ]
    },
    {
        id: 59,
        text: 'Bright, brilliant colors are everywhere, the stones and pigments undimmed by the passage of decades. The floor is a colorful mosaic of stone, with winding red tiles snaking down the corridor. Above, you see a panel set into the ceiling that, from reading the manual, you know is a spike trap.',
        options: [
            {
                text: 'Walk down the corridor',
                nextText: 62,
            }
        ]
    },
    {
        id: 60,
        text: 'You walk down the tunnel and run into a spike trap that falls from the ceiling, killing your avatar.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 61,
        text: 'You exit the tomb',
        options: [
            {
                text: 'log out',
                nextText: 100,
            },
            {
                text: 'enter the tomb',
                nextText: 57,
            }
        ]
    },
    {
        id: 62,
        text: 'You walk down the corridor and avoid the spike trap. You arrive at an arch of mist',
        options: [
            {
                text: 'Read the Tomb of Horrors manual to see how to continue',
                nextText: 63,
            },
            {
                text: 'Enter the Arch',
                nextText: 64,
            },
        ]

    },
    {
        id: 63,
        text: 'You read the manual and find that out that you need to press the stones surrounding the tunnel in the correct order in order to pass through.',
        options: [
            {
                text: 'continue',
                nextText: 68,
            }
        ]
    },
    {
        id: 64,
        text: 'You enter the arch and are teleported to the forsaken prison. There are three levers.',
        options: [
            {
                text: 'push all three down',
                nextText: 65,
            },
            {
                text: 'pull all three up',
                nextText: 66,
            }
        ]
    },
    {
        id: 65,
        text: 'You push the levers down and the floor below you retracts, sending you down into a pit. You hit the bottom and your avatar dies.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 66,
        text: 'You pull the levers up and a crawlspace opens up above you.',
        options: [
            {
                text: 'enter the crawlspace',
                nextText: 67,
            },
            {
                text: 'push the levers down instead',
                nextText: 65,
            }
        ]
    },
    {
        id: 67,
        text: 'You enter the crawlspace and after a couple minutes you find yourself outside the entrance of the tomb.',
        options: [
            {
                text: 'log out',
                nextText: 100,
            },
            {
                text: 'enter the tomb',
                nextText: 57,
            }
        ]
    },
    {
        id: 68,
        text: 'You continue through the tomb, following the manual and finally entering the throne room. However, instead of an empty throne, you encounter Acererak, the demilich and final boss of the tomb.',
        options: [
            {
                text: 'continue',
                nextText: 69,
            }
        ]
    },
    {
        id: 69,
        text: 'Acererak turns his head and holds you in the gaze of the rubies that replace his eyes. "Greetings, Parzival," he says in a raspy voice. "What is it you seek?"',
        options: [
            {
                text: 'fight',
                nextText: 71,
            },
            {
                text: 'tell him you seek the Copper Key',
                nextText: 70,
            },
            {
                text: 'leave',
                nextText: 72,
            }
        ]
    },
    {
        id: 70,
        text: '"I seek the Copper Key," you say. "Of course you do," Acererak says. "And you have come to the right place. But how do I know you are worthy of possessing the Copper Key?"',
        options: [
            {
                text: 'fight him',
                nextText: 71,
            },
            {
                text: 'ask him for a way to prove yourself',
                nextText: 73,
            }
        ]
    },
    {
        id: 71,
        text: 'You run forward, brandishing your sword. Acererak laughs. His eyes glow and your avatar instantly dies.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 72,
        text: 'You back out of the hall but Acererak follows laughing. "If you are too cowardice to face me, you will never find the key. His eyes glow and your avatar instantly dies.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 73,
        text: '"Allow me to prove my worth, noble Acererak", you say. Acererak laughs, a disturbing cackle that echos around the chamber. "Very well," he says. "Face me in a game of joust!" \n(Joust is a classic 1980 arcade game where the goal is to hit your opponent with your lance while riding an ostrich and flying around the screen, dodging and AI pterodactyl that tries to wreak havok)',
        options: [
            {
                text: 'Accept',
                nextText: 74,
            },
            {
                text: 'Refuse',
                nextText: 75,
            }
        ]
    },
    {
        id: 74,
        text: '"I accept," you say. "Very well, best two out of three," Acererak responds.',
        options: [
            {
                text: 'Play',
                nextText: 76,
            }
        ]
    },
    {
        id: 75,
        text: '"I refuse your offer," you say. "Let us fight instead."',
        options: [
            {
                text: 'Fight',
                nextText: 71,
            }
        ]
    },
    {
        id: 76,
        text: "You haven't played joust in over a year and are very rusty. During the first game you get obliterated by Acererak.",
        options: [
            {
                text: 'play again',
                nextText: 77,
            },
            {
                text: 'switch sides',
                nextText: 78,
            },
            {
                text: 'try to fight Acererak instead',
                nextText: 71,
            }
        ]
    },
    {
        id: 77,
        text: 'You lose again, and Acererak opens his mouth, shooting a fireball that instantly kills your avatar.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 78,
        text: '"Would you mind if we switch sides? I am used to playing on the left," you say. "Certainly," says Acererak. You switch sides and start to play again. You end up winning after nearly 45 minutes.',
        options: [
            {
                text: 'play again',
                nextText: 79,
            }
        ]
    },
    {
        id: 79,
        text: 'You play again and narrowly win, defeating Acererak.',
        options: [
            {
                text: 'continue',
                nextText: 80,
            }
        ]
    },
    {
        id: 80,
        text: '"You played well," Acererak says. "Thank you, Acererak," you reply, resisting the urge to jump up and down and shake your ass victoriously in his general direction. Acererak transforms into the avatar of James Halliday, who silently holds out a key to you.',
        options: [
            {
                text: 'Accept the Copper Key',
                nextText: 81,
            }
        ]
    },
    {
        id: 81,
        text: 'You take the key and find the next clue engraved into the copper.',
        options: [
            {
                text: 'Continue',
                nextText: 82,
            }
        ]
    },
    {
        id: 82,
        text: 'Thank you for completing Quest for the Copper Key. Part Two, the Quest for the Jade Key will be out soon.',
        options: [
            {
                text: 'Credits',
                nextText: 83,
            },
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 83,
        text: 'Yea, I made everything. ༼ つ ◕_◕ ༽つ',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 100,
        text: 'You Lose',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 101,
        text: 'You flew off to another planet in your ship before realizing that you did not have any gas. You ship crashes and your avatar dies.',
        options: [
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    }
]

startGame()