import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-3 justify-center ">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name=""
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label ml-5 gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name=""
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
