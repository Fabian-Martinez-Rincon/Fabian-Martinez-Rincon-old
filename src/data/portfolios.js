import css1 from '../img/Portfolios/Resoluciones/1.png';
import css2 from '../img/Portfolios//Resoluciones/2.png';
import react1 from '../img/Portfolios//Resoluciones/6.png';
import img2 from '../img/Portfolios//Resoluciones/4.png';
import img3 from '../img/Portfolios//Resoluciones/5.png';
import img4 from '../img/Portfolios//Resoluciones/3.png';
import img5 from '../img/Portfolios//Resoluciones/7.png';
import img6 from '../img/Portfolios//Resoluciones/8.png';

const portfolios = [
    {
        id: 1,
        category: 'Javascript',
        image: css1,
        link1: 'https://github.com/Fabian-Martinez1/Efficiency_X',
        link2: 'https://fabian-martinez1.github.io/Efficiency_X/',
        title: 'Efficiency_X',
        text: 'We calculate in a theoretical way, the static and dynamic memory and the execution time.'
    },
    {
        id: 2,
        category: 'CSS',
        image: css2,
        link1: 'https://github.com/ZonaFabo',
        link2: 'https://zonafabo.github.io/',
        title: 'Zona Fabo',
        text: 'Web that compiles my notes on university subjects'
    },
    {
        id: 3,
        category: 'Python',
        image: react1,
        link1: 'https://github.com/Fabian-Martinez1/Transform-Pokemon-Resolution',
        link2: 'https://fabian-martinez1.github.io/Transform-Pokemon-Resolution/',
        title: 'Transform Pokemon Resolution',
        text: 'It is a tool capable of refocusing Pokémon that are too out of focus using the pix2pix architecture. Take any unfocused pokemon as input and return it focused (the result is a bit creepy :/).'
    },
    {
        id: 4,
        category: 'C',
        image: img2,
        link1: 'https://github.com/Fabian-Martinez1/Lock',
        link2: 'https://fabian-martinez1.github.io/Lock/',
        title: 'Lock',
        text: 'A project made in arduino, it is a lock in which we have to enter a password to activate a servomotor, the first time we enter a code we have to enter a special code (the one that comes as default) and at that moment we reset the lock and enter our new password.'
    },
    {
        id: 5,
        category: 'Pascal',
        image: img3,
        link1: 'https://github.com/Fabian-Martinez1/Converter-OC',
        link2: 'https://fabian-martinez1.github.io/Converter-OC/',
        title: 'Converter OC',
        text: 'It is a project in pascal in which you enter a binary number and it tells you all the data about that number. At the moment it does the following: It supports, Bss, Bcs, Ca1, Ca2, Ex2, and it also tells us the number of bits.'
    },
    {
        id: 6,
        category: 'CSS',
        image: img4,
        link1: 'https://github.com/Fabian-Martinez1/Fabian-Martinez1.github.io',
        link2: 'https://fabian-martinez1.github.io/',
        title: 'Old Portfolio',
        text: 'Old Portfolio Created using HTML and CSS'
    },
    {
        id: 7,
        category: 'CSS',
        image: img5,
        link1: 'https://github.com/Juanuwu/pingo',
        link2: 'https://luispin.ga/',
        title: 'Pingo',
        text: 'Created using HTML and CSS'
    },
    {
        id: 8,
        category: 'C',
        image: img6,
        link1: 'https://github.com/Fabian-Martinez1/Keypad',
        link2: 'https://fabian-martinez1.github.io/Keypad/',
        title: 'Keypad',
        text: 'A project in Arduino, it is a remote keyboard in which the client can customize a series of words that they uses normally and can send them with just one press. Once you have sent the word, it will be see in a place the house.'
    }
]

export default portfolios;