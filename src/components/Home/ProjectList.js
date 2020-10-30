import creativeAgency from '../../images/creative-agency.png';
import eSchool from '../../images/e-school.png';
import emaJohn from '../../images/ema-john.png';
import hardRock from '../../images/hardrock.png';
import hotGadget from '../../images/hot-gadgets.png';
import pandaCommerce from '../../images/panda-commerce.png';
import pinMatcher from '../../images/pin-matcher.png';
import travelGuru from '../../images/travel-guru.png';
import volunteerNetwork from '../../images/volunteer-network.png';

const projects = [
    {
        id: 1,
        name: "Creative-Agency",
        url: "https://creative-agency2.web.app/",
        screenShot: creativeAgency,
        dataAos: "fade-up"
    },
    {
        id: 2,
        name: "Volunteer-network",
        url: "https://volunteer-network6.firebaseapp.com/",
        screenShot: volunteerNetwork,
        dataAos: "fade-down"
    },
    {
        id: 3,
        name: "Travel-Guru",
        url: "https://travel-guru5.firebaseapp.com/",
        screenShot: travelGuru,
        dataAos: "fade-up-left"
    },
    {
        id: 4,
        name: "Pin-Matcher",
        url: "https://shahin-mia.github.io/pin-matcher/",
        screenShot: pinMatcher,
        dataAos: "flip-left"
    },
    {
        id: 5,
        name: "Hot-Gadgets",
        url: "https://shahin-mia.github.io/hot-gadgets/",
        screenShot: hotGadget,
        dataAos: "flip-right"
    },
    {
        id: 6,
        name: "Panda-Commerce",
        url: "https://shahin-mia.github.io/panda-commerce/",
        screenShot: pandaCommerce,
        dataAos: "flip-up"
    },
    {
        id: 7,
        name: "Hard-Rock",
        url: "https://shahin-mia.github.io/hard-rock/index.html",
        screenShot: hardRock,
        dataAos: "flip-down"
    },
    {
        id: 8,
        name: "E-School",
        url: "https://shahin-mia.github.io/e-school/",
        screenShot: eSchool,
        dataAos: "zoom-in-up"
    },
    {
        id: 9,
        name: "Ema-john",
        url: "https://ema-john5.firebaseapp.com/",
        screenShot: emaJohn,
        dataAos: "zoom-in-down"
    },
]
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(projects);

export default projects;