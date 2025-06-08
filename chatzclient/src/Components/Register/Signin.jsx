// import React from "react";
// import { Alert, Button, Snackbar } from "@mui/material";
// import { green } from "@mui/material/colors";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { currentUser, login } from "../../Redux/Auth/Action";

// const Signin = () => {
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [inputData, setInputData] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//   const { auth } = useSelector((store) => store);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Dispatch the login action with inputData
//     dispatch(login(inputData));
//     setOpenSnackbar(true);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Update the inputData state with the new values
//     setInputData((values) => ({ ...values, [name]: value }));
//   };

//   const handleSnackbarClose = () => {
//     setOpenSnackbar(false);
//   };

//   useEffect(() => {
//     // Check if there is a token and fetch the current user data
//     if (token) {
//       dispatch(currentUser(token));
//     }
//   }, [token]);

//   useEffect(() => {
//     // If the current user data is available, navigate to the homepage
//     if (auth.reqUser?.name) {
//       navigate("/");
//     }
//   }, [auth.reqUser, navigate]);

//   return (
//     <div>
//       <div className="flex justify-center h-screen w-[100vw] items-center">
//         <div className="p-10 w-[30%] shadow-md bg-white">
//           <form onSubmit={handleSubmit} className="space-y-5 ">
//             <div>
//               <p className="mb-2">Email</p>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Enter your email"
//                 onChange={handleChange}
//                 value={inputData.email}
//                 className="py-2 outline outline-green-600 w-full rounded-md border"
//               />
//             </div>
//             <div>
//               <p className="mb-2">Password</p>
//               <input
//                 type="password" // Change to type="password" for security
//                 name="password"
//                 placeholder="Enter your password"
//                 onChange={handleChange}
//                 value={inputData.password}
//                 className="py-2 outline outline-green-600 w-full rounded-md border"
//               />
//             </div>
//             <div>
//               <Button
//                 type="submit"
//                 sx={{ bgcolor: green[700], padding: ".5rem 0rem" }}
//                 className="w-full"
//                 variant="contained"
//               >
//                 Sign In
//               </Button>
//             </div>
//           </form>

//           <div className="flex space-x-3 items-center mt-5">
//             <p className="m-0">Create New Account</p>
//             <Button variant="text" onClick={() => navigate("/signup")}>
//               SignUp
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Snackbar
//           open={openSnackbar}
//           autoHideDuration={6000}
//           onClose={handleSnackbarClose}
//         >
//           <Alert
//             onClose={handleSnackbarClose}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             Login Successfully!!
//           </Alert>
//         </Snackbar>
//       </div>
//     </div>
//   );
// };
// export default Signin;



import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser, login } from "../../Redux/Auth/Action";

const Signin = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [inputData, setInputData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { auth } = useSelector((store) => store);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate college email domain
    if (!inputData.email.endsWith("@aot.edu.in")) {
      setSnackbarMessage("Only @aot.edu.in mail allowed");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    dispatch(login(inputData));
    setSnackbarMessage("Login Successfully!!");
    setSnackbarSeverity("success");
    setOpenSnackbar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (token) {
      dispatch(currentUser(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (auth.reqUser?.name) {
      navigate("/");
    }
  }, [auth.reqUser, navigate]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex justify-center items-center">
      <div className="p-10 w-full max-w-md bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <p className="mb-2 text-lg font-semibold">Email</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={inputData.email}
              className="py-2 px-4 w-full rounded-md bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>
          <div>
            <p className="mb-2 text-lg font-semibold">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={inputData.password}
              className="py-2 px-4 w-full rounded-md bg-white/20 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-pink-400 transition-all"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 rounded-md text-white font-semibold hover:from-pink-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-pink-300"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex space-x-2 items-center mt-6">
          <p className="text-white">Create New Account</p>
          <button
            onClick={() => navigate("/signup")}
            className="text-pink-200 hover:text-white font-semibold transition-all"
          >
            SignUp
          </button>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signin;

