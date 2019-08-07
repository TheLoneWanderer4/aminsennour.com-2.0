import QuoteMachine from "./QuoteMachine/QuoteMachine.js";
import Markdown from "./Markdown/Markdown.js";
import JSCalc from "./JSCalc/JSCalc.js";
import DrumMachine from "./DrumMachine/DrumMachine.js";
import Clock from "./Clock/Clock.js";
import Risk from "./Risk/Risk.js";

export default {
  isReact: true,
  label: "React Projects",
  desc:
    "Here is the result of my FCC Front End Libraries Certification. These projects demonstrate my competency with React, SASS, Bootstrap, and a variety of other standard technologes used to build modern websites. ",
  projects: [
    {
      title: "QuoteMachine",
      component: QuoteMachine,
      imageURL: "https://png.pngtree.com/svg/20170113/f1689c299e.svg",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    },
    {
      title: "Markdown",
      component: Markdown,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Octicons-markdown.svg",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    },
    {
      title: "DrumMachine",
      component: DrumMachine,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-k16VR0DxyYjmAXrcUtm-3UBn3SKsW5ifVpNXobF2_td-4ON",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    },
    {
      title: "JSCalc",
      component: JSCalc,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Calculator_icon.svg/1024px-Calculator_icon.svg.png",
      listItems: [
        "This projct is a plot of Doping VS performance in profesional cycling"
      ]
    },

    {
      title: "Clock",
      component: Clock,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3BLRmRKiSTD9O1GU7wfh9VNPeuRExg5Ql4CZp_0u9zK9ZtnUYA",
      listItems: [
        "This projct is a plot of Doping VS performance in profesional cycling"
      ]
    },
    {
      title: "RiskCalc",
      component: Risk,
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/2-Dice-Icon.svg",
      listItems: [
        "This projct is a simple graph of the United States GDP over time",
        "Built using d3 to iterate over the data",
        "Used the d3 scale methods to draw the axis and scale the GDP values to usable rect heights"
      ]
    }
  ]
};
