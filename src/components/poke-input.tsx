// import { ReactNode, useState } from "react";
// import Autocomplete from "@mui/material/Autocomplete";
// import { FaSearch } from "react-icons/fa";

// type CustomAutocompleteProps<T> = {
//   options: [];
//   value: string;
//   onChange: () => void;
//   onSearchClick: () => void;
//   component?: ReactNode;
//   filteredData?: T;
//   onClose: () => void;
//   onKeyDown?: React.KeyboardEvent;
//   placeholder: string;
// };

// const CustomAutocomplete = <T,>({
//   options,
//   value,
//   onChange,
//   onSearchClick,
//   filteredData,
//   onClose,
//   onKeyDown,
//   placeholder,
// }: CustomAutocompleteProps<T>) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Autocomplete
//         sx={{
//           "& input:focus": {
//             outline: "none",
//           },
//         }}
//         size="small"
//         disableClearable
//         clearOnEscape
//         options={options}
//         value={value}
//         isOptionEqualToValue={(option, value) =>
//           value ? option === value : true
//         }
//         onChange={onChange}
//         renderInput={(params) => (
//           <div className="rounded-full" ref={params.InputProps.ref}>
//             <input
//               {...params.inputProps}
//               className="rounded-l-md  px-1 p-1 bg-slate-900 text-white text-sm font-mono w-36"
//               type="text"
//               placeholder={placeholder}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   onSearchClick();
//                 }
//               }}
//             />
//           </div>
//         )}
//       />
//       <FaSearch
//         onClick={onSearchClick}
//         color="white"
//         size={28}
//         className="hover:cursor-pointer rounded-r-md bg-slate-900 mr-1 hover:bg-slate-800
//             p-1"
//       />
//     </>
//   );
// };

// export { CustomAutocomplete };
