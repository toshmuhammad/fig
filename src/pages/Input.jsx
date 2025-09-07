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
