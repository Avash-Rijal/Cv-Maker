const ExpInfoObj = (props) => {
  return (
    <div className="expInfoBox">
      <div className="expInfoBoxLeft">
        <p>
          {props.data.jobStartDate}
          <span> – </span>
          {props.data.jobEndDate}
        </p>
        <p>
          {props.data.jobCity}
          <span>, </span>
          {props.data.jobCountry}
        </p>
        <p></p>
      </div>
      <div className="expInfoBoxRight">
        <p style={{ fontWeight: "bolder" }}>{props.data.company}</p>
        <p>{props.data.jobTitle}</p>
        <p style={{ fontSize: "15px" }}>{props.data.description}</p>
      </div>
    </div>
  );
};

export default ExpInfoObj;
