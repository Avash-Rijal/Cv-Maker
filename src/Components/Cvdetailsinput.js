import { useState } from "react";
import downArrow from "./images/downarrow.svg";
import upArrow from "./images/uparrow.svg";

const Cvdetailsinput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  let schoolButton = true;

  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [jobCountry, setJobCountry] = useState("");
  let jobButton = true;

  const [showGeneralBox, setShowGeneralBox] = useState(false);
  const [showEducationBox, setShowEducationBox] = useState(false);
  const [showExperienceBox, setShowExperienceBox] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  props.onNameChange(name);
  props.onEmailChange(email);
  props.onNumberChange(number);
  props.onLocationChange(location);

  const handleEduInfoSave = (e) => {
    e.preventDefault();
    const eduInfoObj = {
      id: Math.random(),
      degree,
      school,
      city,
      country,
      schoolStartDate,
      schoolEndDate,
    };
    props.onEduInfoSave(eduInfoObj);

    setDegree("");
    setSchool("");
    setCity("");
    setCountry("");
    setSchoolStartDate("");
    setSchoolEndDate("");
  };

  const handleExpInfoSave = (e) => {
    e.preventDefault();
    const expInfoObj = {
      id: Math.random(),
      jobTitle,
      company,
      description,
      jobStartDate,
      jobEndDate,
      jobCity,
      jobCountry,
    };
    props.onExpInfoSave(expInfoObj);

    setJobTitle("");
    setCompany("");
    setDescription("");
    setJobStartDate("");
    setJobEndDate("");
    setJobCity("");
    setJobCountry("");
  };

  if (
    degree.length < 1 ||
    school.length < 1 ||
    city.length < 1 ||
    country.length < 1 ||
    schoolStartDate.length < 1 ||
    schoolEndDate.length < 1
  ) {
    schoolButton = false;
  }

  if (
    jobTitle.length < 1 ||
    company.length < 1 ||
    jobStartDate.length < 1 ||
    jobEndDate.length < 1 ||
    jobCity.length < 1 ||
    jobCountry.length < 1
  ) {
    jobButton = false;
  }

  const downloadPdf = (e) => {
    e.preventDefault();
    props.onDownloadPdf();
  };

  return (
    <div className="cvDetailsInput">
      <div className="generalInformation">
        <p>
          General Information{" "}
          {showGeneralBox ? (
            <img
              src={upArrow}
              alt="down arrow"
              onClick={() => setShowGeneralBox(!showGeneralBox)}
            />
          ) : (
            <img
              src={downArrow}
              alt="down arrow"
              onClick={() => setShowGeneralBox(!showGeneralBox)}
            />
          )}
        </p>
        <div className="generalInformationInput">
          {showGeneralBox ? (
            <form>
              <br></br>
              <label id="name">Full Name: </label>
              <br></br>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Full Name"
                onChange={handleNameChange}
              ></input>
              <br></br>
              <br></br>
              <label id="email">Email:</label>
              <br></br>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="Email"
                onChange={handleEmailChange}
              ></input>
              <br></br>
              <br></br>
              <label id="phoneNumber">Phone Number:</label>
              <br></br>
              <input
                type="text"
                id="phoneNumber"
                value={number}
                placeholder="Phone Number"
                onChange={handleNumberChange}
              ></input>
              <br></br>
              <br></br>
              <label id="location">Location: </label>
              <br></br>
              <input
                type="text"
                id="location"
                value={location}
                placeholder="Your location"
                onChange={handleLocationChange}
              ></input>
              <br></br>
              <br></br>
            </form>
          ) : null}
        </div>
      </div>

      <div className="education">
        <p>
          Education Qualification{" "}
          {showEducationBox ? (
            <img
              src={upArrow}
              alt="down arrow"
              onClick={() => setShowEducationBox(!showEducationBox)}
            />
          ) : (
            <img
              src={downArrow}
              alt="down arrow"
              onClick={() => setShowEducationBox(!showEducationBox)}
            />
          )}
        </p>
        <div className="educationQualificationInput">
          {showEducationBox ? (
            <form>
              <br></br>
              <label id="degree">Degree:</label>
              <br></br>
              <input
                type="text"
                id="degree"
                value={degree}
                placeholder="Degree / Field Of Study"
                onChange={handleDegreeChange}
              ></input>
              <br></br>
              <br></br>
              <label id="school">School:</label>
              <br></br>
              <input
                type="text"
                id="school"
                value={school}
                placeholder="Name of the institution"
                onChange={(e) => setSchool(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <label id="city">City:</label>
              <br></br>
              <input
                type="text"
                id="city"
                value={city}
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <label id="country">Country:</label>
              <br></br>
              <input
                type="text"
                id="country"
                value={country}
                placeholder="Enter Country"
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <div className="dates">
                <div className="startDate">
                  <label id="date">Start Date:</label>
                  <br></br>
                  <input
                    type="date"
                    value={schoolStartDate}
                    onChange={(e) => setSchoolStartDate(e.target.value)}
                    style={{ width: "100px" }}
                  ></input>
                </div>
                <div className="endDate">
                  <label id="date">End Date:</label>
                  <br></br>
                  <input
                    type="date"
                    value={schoolEndDate}
                    onChange={(e) => setSchoolEndDate(e.target.value)}
                    style={{ width: "100px" }}
                  ></input>
                </div>
              </div>
              <br></br>
              <div className="formButtons">
                <span></span>
                {schoolButton ? (
                  <button
                    style={{ background: "#00B75B" }}
                    onClick={handleEduInfoSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    style={{ background: "#a1ac9f", cursor: "not-allowed" }}
                    onClick={handleEduInfoSave}
                    disabled
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          ) : null}
        </div>
      </div>

      <div className="experience">
        <p>
          Professional Experience{" "}
          {showExperienceBox ? (
            <img
              src={upArrow}
              alt="down arrow"
              onClick={() => setShowExperienceBox(!showExperienceBox)}
            />
          ) : (
            <img
              src={downArrow}
              alt="down arrow"
              onClick={() => setShowExperienceBox(!showExperienceBox)}
            />
          )}
        </p>
        <div className="experienceBoxInput">
          {showExperienceBox ? (
            <form>
              <br></br>
              <label id="jobTitle">Job Title:</label>
              <br></br>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                placeholder="Job Title"
                onChange={(e) => setJobTitle(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <label id="company">Company:</label>
              <br></br>
              <input
                type="text"
                id="company"
                value={company}
                placeholder="Name of Company"
                onChange={(e) => setCompany(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <div className="dates">
                <div className="startDate">
                  <label id="date">Start Date:</label>
                  <br></br>
                  <input
                    type="date"
                    value={jobStartDate}
                    onChange={(e) => setJobStartDate(e.target.value)}
                    style={{ width: "100px" }}
                  ></input>
                </div>
                <div className="endDate">
                  <label id="date">End Date:</label>
                  <br></br>
                  <input
                    type="date"
                    value={jobEndDate}
                    onChange={(e) => setJobEndDate(e.target.value)}
                    style={{ width: "100px" }}
                  ></input>
                </div>
              </div>
              <br></br>
              <label id="city">City: </label>
              <br></br>
              <input
                type="text"
                value={jobCity}
                placeholder="Enter City"
                onChange={(e) => setJobCity(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <label id="country">Country: </label>
              <br></br>
              <input
                type="text"
                value={jobCountry}
                placeholder="Enter Country"
                onChange={(e) => setJobCountry(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <label id="description">Description</label>
              <br></br>
              <textarea
                name="Main Tasks"
                id="description"
                placeholder="Main Tasks"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br></br>
              <div className="formButtons">
                <span></span>
                {jobButton ? (
                  <button
                    style={{ background: "#00B75B" }}
                    onClick={handleExpInfoSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    style={{ background: "#a1ac9f", cursor: "not-allowed" }}
                    onClick={handleExpInfoSave}
                    disabled
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          ) : null}
        </div>
      </div>

      <button className="downloadButton" onClick={downloadPdf}>
        Download Pdf
      </button>
    </div>
  );
};

export default Cvdetailsinput;
