import { useState } from "react";
import Cvdetailsinput from "./Components/Cvdetailsinput.js";
import Cvpreview from "./Components/Cvpreview.js";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const [eduInfo, setEduInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  const [downloadPdf, setDownloadPdf] = useState(false);

  const handleNameChange = (name) => {
    setName(name);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handleNumberChange = (number) => {
    setNumber(number);
  };

  const handleLocationChange = (location) => {
    setLocation(location);
  };

  const handleEduInfoSave = (eduInfoObj) => {
    const allEduInfo = [...eduInfo, eduInfoObj];
    setEduInfo(allEduInfo);
  };

  const handleExpInfoSave = (expInfoObj) => {
    const allExpInfo = [...experienceInfo, expInfoObj];
    setExperienceInfo(allExpInfo);
  };

  const handleDownload = () => {
    setDownloadPdf(true);
  };

  return (
    <>
      <p className="header">
        <img src="./title-icon.png" alt="titleIcon"></img>BUILD YOUR RESUME
      </p>
      <br></br>
      <div className="container">
        <Cvdetailsinput
          onNameChange={handleNameChange}
          onEmailChange={handleEmailChange}
          onNumberChange={handleNumberChange}
          onLocationChange={handleLocationChange}
          onEduInfoSave={handleEduInfoSave}
          onExpInfoSave={handleExpInfoSave}
          onDownloadPdf={handleDownload}
        ></Cvdetailsinput>
        <Cvpreview
          name={name}
          email={email}
          number={number}
          location={location}
          educationInfoObj={eduInfo}
          experienceInfoObj={experienceInfo}
          pdfDownload={downloadPdf}
        ></Cvpreview>
      </div>
    </>
  );
}

export default App;
