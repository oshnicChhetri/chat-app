import React from "react";

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control mr-4">
        <label
          className={`label cursor-pointer gap-2 ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male </span>
          <input
            onChange={() => onCheckboxChange("male")}
            checked={selectedGender === "male"}
            id="male"
            type="checkbox"
            className="checkbox checkbox-primary border-slate-950"
          />
        </label>
      </div>

      <div className="form-control">
        <label
          className={`cursor-pointer label gap-2 ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female </span>
          <input
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
            id="female"
            type="checkbox"
            className="checkbox checkbox-secondary border-slate-950"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// Starter Code

// const GenderCheckBox = () => {
//     return (
//         <div className="flex">
//             <div className="form-control mr-4">
//                 <label className="label cursor-pointer gap-2">
//                     <span className="label-text">Male </span>
//                     <input type="checkbox" defaultChecked className="checkbox checkbox-primary border-slate-950" />
//                 </label>
//             </div>

//             <div className="form-control">
//                 <label className="cursor-pointer label gap-2">
//                     <span className="label-text">Female </span>
//                     <input type="checkbox" defaultChecked className="checkbox checkbox-secondary border-slate-950" />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckBox
