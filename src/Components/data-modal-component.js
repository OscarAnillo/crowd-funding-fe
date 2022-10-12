import { useState } from "react";
import { Typography } from "@mui/material";
import data from "../data/data-modal.json";

export default function DataModalComponent({ submitted, setSubmitted }) {
  const [showEnterPledge, setShowEnterPledge] = useState(false);
  const [pledgeAmount, setPledgeAmout] = useState("");
  const [valueRadio, setValueRadio] = useState("");
  const [tests, setTests] = useState([...data]);

  const clickHandler = (e) => {
    if (e.currentTarget.value === "1") {
      setSubmitted(true);
    }  
    if (e.currentTarget.value === "2" || e.currentTarget.value === "3") {
      setShowEnterPledge(true);
      setSubmitted(false);
    }
  };

  const changeHandler = (e, id) => {
    const { value } = e.target;
    setTests((pledge_value) => 
    pledge_value?.map((list, index) => 
        index === id ? {...list, pledge_value: value} : list)
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPledgeAmout("");
    setSubmitted(true);
  };
  console.log(pledgeAmount)
  return (
    <div>
      <>
        {tests.map((pledgeData, i) => (
          <div key={pledgeData.id} className={`${pledgeData.className} modal-div`}>
            <div>
              {pledgeData.className !== "out-modal-div" ? (
                <input
                  type="radio"
                  id="input-radio-btn"
                  value={pledgeData.id}
                  checked={valueRadio === pledgeData.id}
                  name="pledgeRadio"
                  onChange={(e) => setValueRadio(e.target.value)}
                  onClick={clickHandler}
                />
              ) : (
                <input
                  type="radio"
                  id="input-radio-btn"
                  name="pledge"
                  disabled
                />
              )}

              <div className="data-modal-row-desktop">
                <Typography
                  variant="subtitle2"
                  component="h4"
                  id="modal-div-title"
                >
                  {pledgeData.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="h6"
                  id="modal-div-subtitle"
                >
                  {pledgeData.pledge}
                </Typography>
                <div>
              <Typography variant="h6" component="h4" id="modal-div-quantity-desktop">
                {pledgeData.quantity} {pledgeData.quantity ? <span>left</span> : ""}{" "}
              </Typography>
              </div>
              </div>
            </div>
            <div>
              <Typography variant="body2" component="p" id="modal-div-text">
                {pledgeData.text}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" component="h4" id="modal-div-quantity">
                {pledgeData.quantity} {pledgeData.quantity ? <span>left</span> : ""}{" "}
              </Typography>
            </div>
            <div>
              {pledgeData.quantity > 0 && pledgeData.quantity !== " " && showEnterPledge ? (
                <div className="enter-pledge">
                  <Typography variant="body2" component="p">
                    Enter your pledge
                  </Typography>
                  <form onSubmit={submitHandler}>
                    <input
                      name="pledgeInput"
                      type="text"
                      value={`$${pledgeData.pledge_value}`}
                      onChange={(e) => setPledgeAmout(changeHandler(e, i))}
                    />
                    <button className="continue">Continue</button>
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
