import { useState } from "react";
import "../css/input.css";

function Input() {
  const [openPrep, setOpenPrep] = useState(false);
  const [openCook, setOpenCook] = useState(false);

  const clearRadios = (name) => {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
    radios.forEach((radio) => (radio.checked = false));
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="dropdown-btn"
          onClick={() => setOpenPrep(!openPrep)}
        >
          Max Prep Time 👇
        </button>
        {openPrep && (
          <div className="dropdown-content">
            <label className="min">
              <input type="radio" name="prep" value="0" /> 0 minutes
            </label>
            <label className="min">
              <input type="radio" name="prep" value="5" /> 5 minutes
            </label>
            <label className="min">
              <input type="radio" name="prep" value="10" /> 10 minutes
            </label>
            <span
              className="clear"
              onClick={() => clearRadios("prep")}
            >
              Clear
            </span>
          </div>
        )}
      </div>

      <div className="dropdown">
        <button
          className="dropdown-btn"
          onClick={() => setOpenCook(!openCook)}
        >
          Max Cook Time 👇
        </button>
        {openCook && (
          <div className="dropdown-content">
            <label className="min">
              <input type="radio" name="cook" value="0" /> 0 minutes
            </label>
            <label className="min">
              <input type="radio" name="cook" value="5" /> 5 minutes
            </label>
            <label className="min">
              <input type="radio" name="cook" value="10" /> 10 minutes
            </label>
            <label className="min">
              <input type="radio" name="cook" value="15" /> 15 minutes
            </label>
            <label className="min">
              <input type="radio" name="cook" value="20" /> 20 minutes
            </label>
            <span
              className="clear"
              onClick={() => clearRadios("cook")}
            >
              Clear
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;









// import { useState } from "react";
// import "../css/input.css";


// function Input() {
//   const [openPrep, setOpenPrep] = useState(false);
//   const [openCook, setOpenCook] = useState(false);

//   return (
//     <div>
//       {/* Max Prep Time */}
//       <div className="dropdown">
//         <button
//           className="dropdown-btn"
//           onClick={() => setOpenPrep(!openPrep)}
//         >
//           Max Prep Time ▾
//         </button>
//         {openPrep && (
//           <div className="dropdown-content">
//             <label>
//               <input type="radio" name="prep" value="0" /> 0 minutes
//             </label>
//             <label>
//               <input type="radio" name="prep" value="5" /> 5 minutes
//             </label>
//             <label>
//               <input type="radio" name="prep" value="10" /> 10 minutes
//             </label>
//             <label>
//               <input type="radio" name="prep" value="15" /> 15 minutes
//             </label>
//             <label>
//               <input type="radio" name="prep" value="20" /> 20 minutes
//             </label>
//             <span className="clear">Clear</span>
//           </div>
//         )}
//       </div>

//       {/* Max Cook Time */}
//       <div className="dropdown">
//         <button
//           className="dropdown-btn"
//           onClick={() => setOpenCook(!openCook)}
//         >
//           Max Cook Time ▾
//         </button>
//         {openCook && (
//           <div className="dropdown-content">
//             <label>
//               <input type="radio" name="cook" value="0" /> 0 minutes
//             </label>
//             <label>
//               <input type="radio" name="cook" value="5" /> 5 minutes
//             </label>
//             <label>
//               <input type="radio" name="cook" value="10" /> 10 minutes
//             </label>
//             <label>
//               <input type="radio" name="cook" value="15" /> 15 minutes
//             </label>
//             <label>
//               <input type="radio" name="cook" value="20" /> 20 minutes
//             </label>
//             <span className="clear">Clear</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Input;