import React, { useState } from "react";

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState("");
  const [text, setText] = useState("");

  const clickHandler = (e, tabs) => {
    setCurrentTab(tabs.name);
    setText(tabs.text);
  };
  return (
    <>
      <div className="col-4 offset-3">
        <ul className="border-none nav nav-pills ">
          {props.tabs.map((item, idx) => {
            return (
              <li key={idx} className="nav-item">
                <button onClick={(e) => clickHandler(e, item)} className={ "me-3 " + (currentTab === item.name ? "active btn btn-dark " : "btn btn-outline-dark")} type="button">{item.name}</button>
              </li>);
          })}
        </ul>


        <div className="text-center border border-1 border-dark p-4 mt-4">
          {text}
        </div>
      </div>
    </>
  );
};

export default Tabs;