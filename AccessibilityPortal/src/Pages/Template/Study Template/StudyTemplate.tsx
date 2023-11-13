import React from "react";
import "../../../Styles/ResearchPage.scss";
import NavbarComponent from "../../../CommonComponents/Navbar/NavbarComponent";
import StudyFormTemplate from "./StudyFormTemplate";

function SurveyPage() {
  return (
    <div className="ResearchPageBody">
      <NavbarComponent />
      <StudyFormTemplate />
    </div>
  );
}

export default SurveyPage;