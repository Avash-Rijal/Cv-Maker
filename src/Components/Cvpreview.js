import emailIcon from "./images/email.svg";
import phoneIcon from "./images/phone.svg";
import locationIcon from "./images/location.svg";
import EduInfoObj from "./EduinfoObj";
import ExpInfoObj from "./ExpInfoObj";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const Cvpreview = (props) => {
  const pdfRef = useRef();

  if (props.pdfDownload === true) {
    console.log(props.pdfDownload);
    const input = pdfRef.current;
    console.log(pdfRef.current);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = jsPDF("p", "mm", "a4", true);
      console.log("Downloading...");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Resume.pdf");
    });
  }

  return (
    <>
      <div className="cvPreview" ref={pdfRef}>
        <div className="cv">
          <div className="generalInfo">
            <div className="generalInfoContents">
              <h1 className="name">{props.name}</h1>
              <div className="contactInfo">
                {props.email ? (
                  <div className="email">
                    <img src={emailIcon} alt="email"></img>
                    {props.email}
                  </div>
                ) : null}

                {props.number ? (
                  <div className="number">
                    <img src={phoneIcon} alt="phone"></img>
                    {props.number}
                  </div>
                ) : null}

                {props.location ? (
                  <div className="location">
                    <img src={locationIcon} alt="location"></img>
                    {props.location}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="resumeBottom">
            <div className="educationBox">
              <h3 className="headerText">Education</h3>
              {props.educationInfoObj.map((data) => (
                <EduInfoObj data={data}></EduInfoObj>
              ))}
            </div>
            <div className="experienceBox">
              <h3 className="headerText">Professional Experience</h3>
              {props.experienceInfoObj.map((data) => (
                <ExpInfoObj data={data}></ExpInfoObj>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cvpreview;
