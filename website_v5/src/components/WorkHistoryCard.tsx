import { useState } from "react";
import Card from "./Card";

type Position = {
  id: string;
  title: string;
  company: string;
  start: string;
  end: string;
  description: string[];
  active: boolean;
};

function WorkHistoryCard() {
  const amazon: Position = {
    id: "amazon",
    title: "Software Development Engineering Intern",
    company: "Amazon",
    start: "Jun 23",
    end: "Sept 23",
    description: [
      "•	Improved organizational workflows with automated document persistence using AWS, React.js, and Java, drastically reducing data search time for 1000+ records",
      "•	Refined data access by designing a dashboard to surface the most important information about each document, eliminating the need to comb through 10,000+ lines of log files",
      "•	Maximized data storage efficiency relative to resource usage with DynamoDB, S3 and AWS Lambda, saving $250+ per month",
      "•	Simplified management operations by patching a bug that was over 10 months old, facilitating more efficient execution of a regular task",
    ],
    active: false,
  };

  const watsi: Position = {
    id: "watsi",
    title: "Software Engineering Intern",
    company: "Watsi",
    start: "Jun 22",
    end: "Aug 22",
    description: [
      "•	Streamlined administrative workflows with a React and Ruby-on-Rails based asset management system, shortening time spent managing 50+ files",
      "•	Increased donor engagement on https://watsi.org/fund-treatments by implementing filtering across 13 different countries, maximizing completed donations by exposing prospective donors to profiles that better suit their interests",
      "•	Facilitated better patient discovery by adding 3 new sort parameters, which allowed donors to more easily find individuals to fund out of over 100 possible profiles",
    ],
    active: false,
  };

  const projectReclass: Position = {
    id: "project-reclass",
    title: "Infrastructure Intern",
    company: "Project Reclass",
    start: "Jul 21",
    end: "Sept 21",
    description: [
      "•	Optimized the deployment of an AWS production stack for team resources, saving $100+ monthly in usage fees",
      "•	Augmented deployment capabilities of Go applications with containerization, increasing program availability by a factor of 3 via Kubernetes deployment",
      "•	Marketed the benefits of the organization's flagship product by demoing Docker containerization and Kubernetes app deployment to an audience of over 30 technical and non-technical individuals",
      "•	Highlighted opportunities to bring new people into the organization through Python network analysis of the organization's 15+ members",
    ],
    active: false,
  };

  const initialPositions = [amazon, watsi, projectReclass];

  const [positionList, setPositionList] = useState(initialPositions);

  function handleClick(index: number) {
    const nextItems = positionList.map((pos, i) => {
      if (i === index) {
        const newPosition: Position = {
          ...pos,
          active: !pos.active,
        };
        return newPosition;
      } else {
        return pos;
      }
    });

    setPositionList(nextItems);
  }

  function dropdowns(positions: Position[]) {
    return positions.map((pos, i) => (
      <div key={pos.id}>
        <div
          className="flex flex-row justify-between"
          onClick={() => {
            handleClick(i);
          }}
        >
          <h3 className="text-light-blue-100 font-mont font-semibold tracking-wide">
            {pos.title}
          </h3>
          {/* replace with down arrow svg */}
          <p className="text-light-blue-100">v</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-white font-mono">{pos.company}</p>
          <p className="text-white font-mont text-sm italic">
            {pos.start + " - " + pos.end}
          </p>
        </div>
        <ul
          className={
            "text-light-blue-100 font-mont " + (pos.active ? "" : "hidden")
          }
        >
          {pos.description.map((item, index) => (
            <li key={pos.id + index}>{item}</li>
          ))}
        </ul>
        {i !== positions.length - 1 ? (
          <div className="h-px my-2 bg-light-blue-100"></div>
        ) : null}
      </div>
    ));
  }

  return <Card size="span">{dropdowns(positionList)}</Card>;
}

export default WorkHistoryCard;
