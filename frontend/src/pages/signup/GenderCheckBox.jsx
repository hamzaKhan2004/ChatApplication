// eslint-disable-next-line no-unused-vars
import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex mt-3 justify-center ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            name=""
            className="checkbox border-slate-900"
          />
        </label>
      </div>

      <div className="form-control">
        <label className={`label ml-5 gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            name=""
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
