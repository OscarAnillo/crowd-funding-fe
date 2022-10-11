import { useState } from "react";
import { Typography } from "@mui/material";
import data from "../data/data-modal.json";

export default function DataModalComponent({ submitted, setSubmitted }) {
  const [showEnterPledge, setShowEnterPledge] = useState(false);
  const [pledgeAmount, setPledgeAmout] = useState("");
  const [valueRadio, setValueRadio] = useState("");

  const clickHandler = (e) => {
    if (valueRadio === "1") {
      setSubmitted(true);
    } else if (valueRadio === "2" || valueRadio === "3") {
      setShowEnterPledge(true);
      setSubmitted(false);
    }
  };

  const changeHandler = (e) => {
    setPledgeAmout(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!pledgeAmount) {
      alert("Please provide an amount.");
      return;
    } else if (pledgeAmount < 25) {
      alert("Please provide the correct amount.");
      return;
    }
    setPledgeAmout("");
    setSubmitted(true);
  };
  console.log(valueRadio);
  return (
    <div>
      <>
        {data.map((item) => (
          <div key={item.id} className={`${item.className} modal-div`}>
            <div onClick={clickHandler}>
              {item.className !== "out-modal-div" ? (
                <input
                  type="radio"
                  id="input-radio-btn"
                  value={item.id}
                  checked={valueRadio === item.id}
                  name="pledge"
                  onChange={(e) => setValueRadio(e.target.value)}
                />
              ) : (
                <input
                  type="radio"
                  id="input-radio-btn"
                  name="pledge"
                  disabled
                />
              )}

              <div>
                <Typography
                  variant="subtitle2"
                  component="h4"
                  id="modal-div-title"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="h6"
                  id="modal-div-subtitle"
                >
                  {item.pledge}
                </Typography>
              </div>
            </div>
            <div>
              <Typography variant="body2" component="p" id="modal-div-text">
                {item.text}
              </Typography>
            </div>
            <div>
              <Typography variant="h6" component="h4" id="modal-div-quantity">
                {item.quantity} {item.quantity ? <span>left</span> : ""}{" "}
              </Typography>
            </div>
            <div>
              {item.quantity > 0 && item.quantity !== " " && showEnterPledge ? (
                <div className="enter-pledge">
                  <Typography variant="body2" component="p">
                    Enter your pledge
                  </Typography>
                  <form onSubmit={submitHandler}>
                    <input
                      type="text"
                      placeholder="$"
                      value={pledgeAmount}
                      onChange={changeHandler}
                    />
                    <button>Continue</button>
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
