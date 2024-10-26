import { useNavigate, useParams } from "react-router-dom";
import MilestoneCard from "./MilestoneCard";
import { useState } from "react";
import AddMilestone from "./AddMilestone";

const MilestonePage = () => {
  const { month } = useParams() || "";
  const navigate = useNavigate();

  const [isAddPopupOpen, setAddPopupOpen] = useState(false);

  const handleAddClosePopup = () => {
    setAddPopupOpen(false);
  };

  const [month2_milestones, setMonth2Milestones] = useState<any[]>([
    {milestone: "Calms down when spoken to or picked up"},
    {milestone: "Looks at your face"},
    {milestone: "Seems happy to see you when you walk up to her"},
    {milestone: "Makes sounds other than crying"},
    {milestone: "Reacts to loud sounds"},
    {milestone: "Watches as you move"},
    {milestone: "Looks at a toy for several seconds"},
    {milestone: "Holds head up when on tummy"},
    {milestone: "Opens hands briefly"}
  ]);
  const [month3_milestones, setMonth3Milestones] = useState<any[]>([]);
  const [month4_milestones, setMonth4Milestones] = useState<any[]>([]);
  const [month5_milestones, setMonth5Milestones] = useState<any[]>([]);
  const [month6_milestones, setMonth6Milestones] = useState<any[]>([]);
  const [month7_milestones, setMonth7Milestones] = useState<any[]>([]);
  const [month8_milestones, setMonth8Milestones] = useState<any[]>([]);
  const [month9_milestones, setMonth9Milestones] = useState<any[]>([]);
  const [month10_milestones, setMonth10Milestones] = useState<any[]>([]);
  const [month11_milestones, setMonth11Milestones] = useState<any[]>([]);
  const [month12_milestones, setMonth12Milestones] = useState<any[]>([]);

  const handleLearnMoreClick = () => {
    navigate("/");
  };

  const handleAddMilestone = () => {
    setAddPopupOpen(true);
  };

  const updateMilestones = (newMilestone: any) => {
    // Based on the month, update the corresponding milestone array
    if (month === "2") {
      setMonth2Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "3") {
      setMonth3Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "4") {
      setMonth4Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "5") {
      setMonth5Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "6") {
      setMonth6Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "7") {
      setMonth7Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "8") {
      setMonth8Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "9") {
      setMonth9Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "10") {
      setMonth10Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "11") {
      setMonth11Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    } else if (month === "12") {
      setMonth12Milestones((prevMilestones) => [
        ...prevMilestones,
        newMilestone,
      ]);
    }
  };

  const renderMilestoneContent = () => {
    switch (month) {
      case "2":
        return (
          <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <h1 className="mb-3">Month {month}</h1>
              <div className="milestone-page-divider"></div>
              <div className="add-milestone-button">
                <a onClick={handleAddMilestone}>
                  <p>add a custom milestone</p>
                </a>
              </div>
              <div className="milestones text-center py-5">
                <div className="container">
                  <div className="row-container">
                    {month2_milestones.map((milestone, index) => (
                      <div key={index} className="milestone-card">
                        <MilestoneCard milestone={milestone.milestone} />
                      </div>
                    ))}
                    ;
                  </div>
                </div>
              </div>
              <AddMilestone
                age={month}
                isPopupOpen={isAddPopupOpen}
                handleClosePopup={handleAddClosePopup}
                addMilestone={updateMilestones}
              />
            </div>
          </div>
        );
      case "3":
        return (
          <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <h1 className="mb-3">Month {month}</h1>
              <div className="milestone-page-divider"></div>
              <div className="add-milestone-button">
                <a onClick={handleAddMilestone}>
                  <p>add a custom milestone</p>
                </a>
              </div>
              <div className="milestones text-center py-5">
                <div className="container">
                  <div className="row-container">
                    {month3_milestones.map((milestone, index) => (
                      <div key={index} className="milestone-card">
                        <MilestoneCard milestone={milestone.milestone} />
                      </div>
                    ))}
                    ;
                  </div>
                </div>
              </div>
              <AddMilestone
                age={month}
                isPopupOpen={isAddPopupOpen}
                handleClosePopup={handleAddClosePopup}
                addMilestone={updateMilestones}
              />
            </div>
          </div>
        );
      default:
        return (
          <div className="milestone-page text-center d-flex justify-content-center align-items-center">
            <div className="milestone-page-container">
              <a href="" onClick={handleLearnMoreClick}>
                <svg
                  className="arrow-left"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 24H10M10 24L24 38M10 24L24 10"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>

              <h1>No milestones available for this month.</h1>
            </div>
          </div>
        );
    }
  };

  return <div>{renderMilestoneContent()}</div>;
};

export default MilestonePage;
