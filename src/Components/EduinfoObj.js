const EduInfoObj = (props) => {
  return (
    <div className="eduInfoBox">
      <div className="educationInfoLeft">
        <p>
          {props.data.schoolStartDate} <span> – </span>
          {props.data.schoolEndDate}
        </p>
        <p>
          {props.data.city}
          <span>, </span>
          {props.data.country}
        </p>
      </div>
      <div className="educationInfoRight">
        <p style={{ fontWeight: "bolder" }}>{props.data.school}</p>
        <p style={{ fontSize: "15px" }}>{props.data.degree}</p>
      </div>
    </div>
  );
};

export default EduInfoObj;
