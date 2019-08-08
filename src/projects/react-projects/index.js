import QuoteMachine from "./QuoteMachine/QuoteMachine.js";
import Markdown from "./Markdown/Markdown.js";
import JSCalc from "./JSCalc/JSCalc.js";
import DrumMachine from "./DrumMachine/DrumMachine.js";
import Clock from "./Clock/Clock.js";
import Risk from "./Risk/Risk.js";

export default {
  isReact: true,
  label: "React Projects",
  desc: `This page details all the things I've built using the React UI library.

Main tools used in these projects:
- React
- Bootstrap
- SASS
`,
  projects: [
    {
      title: "QuoteMachine",
      component: QuoteMachine,
      imageURL: "/pictures/quote-machine.png",
      listItems: [
        "Small project which displays a quote, and it's author",
        "Uses Ajax to fetch a list of quotes",
        "Randomly selects a new quote on every button press, it's possible to get the same one twice",
        "Allows the user to tweet the content of the quote, using the twitter API"
      ]
    },
    {
      title: "Markdown",
      component: Markdown,
      imageURL: "/pictures/markdown.png",
      listItems: [
        "Mildly complex project which allows the users to write in Markdown, and then have it rendered on the page below",
        "Uses the Marked NPM library to convert the input text into HTML",
        "The full screen options demonstrate where I learned to selectively render react components!"
      ]
    },
    {
      title: "DrumMachine",
      component: DrumMachine,
      imageURL: "/pictures/drum-machine.png",
      listItems: [
        "Basic drum pad which plays different sounds either on a click, or key press",
        "Plays the sound by forming an audio object out of a URL",
        "With this project I learned about react key listens, and HTML audio objects"
      ]
    },
    {
      title: "JSCalc",
      component: JSCalc,
      imageURL: "/pictures/JSCalc.png",
      listItems: [
        "A fully functional calculator, allows for addition, subtraction, multiplication, and division",
        "With this project I learned a great deal about regular expressions and string processing",
        "Uses EVAL to process the calculation string"
      ]
    },

    {
      title: "Clock",
      component: Clock,
      imageURL: "/pictures/clock.png",
      listItems: [
        "A Pomodoro Clock, allows the user to set a 'Secession' and 'Break' time. The clock will then count down, switching times whenever it hits zero",
        "When the clock hits zero a buzzer will sound",
        "With this project I got experience with implementing JS logic in react projects"
      ]
    },
    {
      title: "RiskCalc",
      component: Risk,
      imageURL: "/pictures/Risk.png",
      listItems: [
        "This first react project I build on my own, not under the guidance of FCC",
        "It's a straightforward turn calculator for the board game RISK",
        "With this project I implemented a great deal of internal JS logic, not just UI code",
        "I also learned a great deal about selective rendering and passing props to components / the importance of a centralized state"
      ]
    }
  ]
};
