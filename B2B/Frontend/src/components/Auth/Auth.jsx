// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import AuthLR from "../../assets/Auth.png";

// const USER_BASE = "http://localhost:4000/api/user";
// const AUTH_BASE = "http://localhost:4000/api/auth"; 

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // Email / password login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${USER_BASE}/login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: form.email, password: form.password }),
//       });
//       const data = await res.json();
//       if (data.success) {
//         localStorage.setItem("token", data.token);
//         window.location.href = "/";
//       } else {
//         alert(data.message || "Login failed");
//       }
//     } catch {
//       alert("Login failed");
//     }
//   };

//   // Email / password register
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${USER_BASE}/register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (data.success) {
//         localStorage.setItem("token", data.token);
//         window.location.href = "/";
//       } else {
//         alert(data.message || "Registration failed");
//       }
//     } catch {
//       alert("Registration failed");
//     }
//   };

//   // FULL-PAGE REDIRECT to backend -> Google
//   const startGoogleLogin = () => {
//     // Optional: pass where to come back (frontend origin), backend can use this
//     const redirectBackTo = encodeURIComponent(window.location.origin);
//     window.location.href = `${AUTH_BASE}/google?redirect=${redirectBackTo}`;
//   };

//   const toggleAuth = () => setIsLogin(!isLogin);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      // <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden md:h-[600px]">

      //   {/* Left Image */}
      //   <div className="w-full md:w-1/2 h-52 md:h-auto">
      //     <img
      //       src={isLogin ? AuthLR : AuthLR}
      //       alt="Auth"
      //       className="w-full h-full object-cover"
      //     />
      //   </div>

      //   {/* Right Form */}
      //   <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
      //     <div className="w-full max-w-md flex flex-col">

      //       {/* Tabs */}
      //       <div className="flex justify-center space-x-10 border-b border-gray-200 pb-2">
      //         <button
      //           onClick={() => setIsLogin(true)}
      //           className={`text-lg font-semibold cursor-pointer ${
      //             isLogin
      //               ? "border-b-2 border-[#CEBB98] text-[#CEBB98]"
      //               : "text-gray-500"
      //           }`}
      //         >
      //           Login
      //         </button>
      //         <button
      //           onClick={() => setIsLogin(false)}
      //           className={`text-lg font-semibold cursor-pointer ${
      //             !isLogin
      //               ? "border-b-2 border-[#CEBB98] text-[#CEBB98]"
      //               : "text-gray-500"
      //           }`}
      //         >
      //           Register
      //         </button>
      //       </div>

      //       {/* Content Form */}
      //       <div className="flex-1 flex flex-col justify-center overflow-y-auto">
      //         {isLogin ? (
      //           /* LOGIN FORM */
      //           <form className="space-y-5 pt-6" onSubmit={handleLogin}>
      //             <p className="text-xs text-gray-500 leading-snug">
      //               For the purpose of industry registration, your details are required and will be stored.
      //             </p>

      //             <TextField label="E-mail" fullWidth variant="outlined" size="small" name="email"
      //               value={form.email}
      //               onChange={handleChange}/>

      //             <TextField
      //               label="Password"
      //               type={showPassword ? "text" : "password"}
      //               fullWidth
      //               variant="outlined"
      //               size="small"
      //               name="password"
      //               value={form.password}
      //               onChange={handleChange}
      //               sx={{ mt: 2 }}
                    
                  
      //               InputProps={{
      //                 endAdornment: (
      //                   <InputAdornment position="end">
      //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
      //                       {showPassword ? <VisibilityOff /> : <Visibility />}
      //                     </IconButton>
      //                   </InputAdornment>
      //                 ),
      //               }}
      //             />

      //             <div className="flex items-center justify-between flex-wrap">
      //               <FormControlLabel control={<Checkbox />} label="Remember me" />
      //               <span className="text-sm text-gray-700 cursor-pointer hover:text-[#CEBB98]">
      //                 Forgot Password
      //               </span>
      //             </div>

      //             <p className="text-xs text-gray-500 text-center">
      //               By Continuing, I agree to{" "}
      //               <span className="text-[#CEBB98] cursor-pointer">Terms of Use</span> &{" "}
      //               <span className="text-[#CEBB98] cursor-pointer">Privacy Policy</span>.
      //             </p>

      //             <Button
      //               type="submit"
      //               variant="contained"
      //               fullWidth
      //               sx={{
      //                 backgroundColor: "#CEBB98",
      //                 "&:hover": { backgroundColor: "black" },
      //               }}
      //             >
      //               Login
      //             </Button>

      //             {/* OR Divider */}
      //             <div className="flex items-center">
      //               <div className="flex-grow border-t border-gray-300"></div>
      //               <span className="px-2 text-gray-500 text-sm">or</span>
      //               <div className="flex-grow border-t border-gray-300"></div>
      //             </div>

      //             {/* Google Login */}
      //             <Button
      //               variant="outlined"
      //               fullWidth
      //               onClick={startGoogleLogin}
      //               startIcon={
      //                 <img
      //                   src="https://www.svgrepo.com/show/355037/google.svg"
      //                   alt="Google"
      //                   className="w-5 h-5"
      //                 />
      //               }
      //             >
      //               Sign in with Google
      //             </Button>

      //             <p className="text-center text-sm mt-2">
      //               Don’t have an Account?{" "}
      //               <span
      //                 className="text-[#CEBB98] font-semibold cursor-pointer"
      //                 onClick={toggleAuth}
      //               >
      //                 Create Account
      //               </span>
      //             </p>
      //           </form>
      //         ) : (
      //           /* REGISTER FORM */
      //           <form className="space-y-5 pt-6">
      //             <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
      //             <p className="text-xs text-gray-500 leading-snug">
      //               For the purpose of industry registration, your details are required and will be stored.
      //             </p>

      //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      //               <TextField label="Name" fullWidth variant="outlined" size="small"  name="name"
      //                 value={form.name}
      //                 onChange={handleChange}/>
      //               <TextField label="Mobile Number" fullWidth variant="outlined" size="small"  name="phone"
      //                 value={form.phone}
      //                 onChange={handleChange}/>
      //             </div>

      //             <TextField label="E-mail" fullWidth variant="outlined" size="small" name="email"
      //               value={form.email}
      //               onChange={handleChange}/>

      //             <TextField
      //               label="Password"
      //               type={showPassword ? "text" : "password"}
      //               fullWidth
      //               variant="outlined"
      //               size="small"
      //               sx={{ mt: 2 }}
      //               name="password"
      //               value={form.password}
      //               onChange={handleChange}
      //               InputProps={{
      //                 endAdornment: (
      //                   <InputAdornment position="end">
      //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
      //                       {showPassword ? <VisibilityOff /> : <Visibility />}
      //                     </IconButton>
      //                   </InputAdornment>
      //                 ),
      //               }}
      //             />

      //             <TextField
      //               label="Confirm Password"
      //               type={showPassword ? "text" : "password"}
      //               fullWidth
      //               variant="outlined"
      //               size="small"
      //               sx={{ mt: 2 }}
      //               name="confirmPassword"
      //               value={form.confirmPassword}
      //               onChange={handleChange}
      //               InputProps={{
      //                 endAdornment: (
      //                   <InputAdornment position="end">
      //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
      //                       {showPassword ? <VisibilityOff /> : <Visibility />}
      //                     </IconButton>
      //                   </InputAdornment>
      //                 ),
      //               }}
      //             />

      //             <p className="text-xs text-gray-500 text-center mt-2">
      //               By Continuing, I agree to{" "}
      //               <span className="text-[#CEBB98] cursor-pointer">Terms of Use</span> &{" "}
      //               <span className="text-[#CEBB98] cursor-pointer">Privacy Policy</span>.
      //             </p>

      //             <Button
      //               variant="contained"
      //               type="submit"
      //               fullWidth
      //               sx={{
      //                 backgroundColor: "#CEBB98",
      //                 "&:hover": { backgroundColor: "black" },
      //               }}
      //             >
      //               Register
      //             </Button>

      //             {/* OR Divider */}
      //             <div className="flex items-center mt-2">
      //               <div className="flex-grow border-t border-gray-300"></div>
      //               <span className="px-2 text-gray-500 text-sm">OR</span>
      //               <div className="flex-grow border-t border-gray-300"></div>
      //             </div>

      //                {/* Google Login */}
      //             <Button
      //               variant="outlined"
      //               fullWidth
      //               onClick={startGoogleLogin}
      //               startIcon={
      //                 <img
      //                   src="https://www.svgrepo.com/show/355037/google.svg"
      //                   alt="Google"
      //                   className="w-5 h-5"
      //                 />
      //               }
      //             >
      //               Sign up with Google
      //             </Button>

      //             <p className="text-center text-sm mt-2">
      //               Already have an account?{" "}
      //               <span
      //                 className="text-[#CEBB98] font-semibold cursor-pointer"
      //                 onClick={toggleAuth}
      //               >
      //                 Sign in
      //               </span>
      //             </p>
      //           </form>
      //         )}
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLR from "../../assets/Auth.png";

// 👇 Dynamic API base
const API_BASE =
  import.meta.env.VITE_API_BASE || "https://everglowb2b.onrender.com";

const USER_BASE = `${API_BASE}/api/user`;
const AUTH_BASE = `${API_BASE}/api/auth`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Email / password login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${USER_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        alert(data.message || "Login failed");
      }
    } catch {
      alert("Login failed");
    }
  };

  // Email / password register
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${USER_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        alert(data.message || "Registration failed");
      }
    } catch {
      alert("Registration failed");
    }
  };

  // FULL-PAGE REDIRECT to backend -> Google
  const startGoogleLogin = () => {
    const redirectBackTo = encodeURIComponent(window.location.origin);
    // 👇 backend /api/auth/google ko hit karo
    window.location.href = `${AUTH_BASE}/google?redirect=${redirectBackTo}`;
  };

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl shadow-xl rounded-lg bg-white overflow-hidden md:h-[600px]">

        {/* Left Image */}
        <div className="w-full md:w-1/2 h-52 md:h-auto">
          <img
            src={isLogin ? AuthLR : AuthLR}
            alt="Auth"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md flex flex-col">

            {/* Tabs */}
            <div className="flex justify-center space-x-10 border-b border-gray-200 pb-2">
              <button
                onClick={() => setIsLogin(true)}
                className={`text-lg font-semibold cursor-pointer ${
                  isLogin
                    ? "border-b-2 border-[#CEBB98] text-[#CEBB98]"
                    : "text-gray-500"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`text-lg font-semibold cursor-pointer ${
                  !isLogin
                    ? "border-b-2 border-[#CEBB98] text-[#CEBB98]"
                    : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>

            {/* Content Form */}
            <div className="flex-1 flex flex-col justify-center overflow-y-auto">
              {isLogin ? (
                /* LOGIN FORM */
                <form className="space-y-5 pt-6" onSubmit={handleLogin}>
                  <p className="text-xs text-gray-500 leading-snug">
                    For the purpose of industry registration, your details are required and will be stored.
                  </p>

                  <TextField label="E-mail" fullWidth variant="outlined" size="small" name="email"
                    value={form.email}
                    onChange={handleChange}/>

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    sx={{ mt: 2 }}
                    
                  
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <div className="flex items-center justify-between flex-wrap">
                    <FormControlLabel control={<Checkbox />} label="Remember me" />
                    <span className="text-sm text-gray-700 cursor-pointer hover:text-[#CEBB98]">
                      Forgot Password
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    By Continuing, I agree to{" "}
                    <span className="text-[#CEBB98] cursor-pointer">Terms of Use</span> &{" "}
                    <span className="text-[#CEBB98] cursor-pointer">Privacy Policy</span>.
                  </p>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#CEBB98",
                      "&:hover": { backgroundColor: "black" },
                    }}
                  >
                    Login
                  </Button>

                  {/* OR Divider */}
                  <div className="flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                  {/* Google Login */}
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={startGoogleLogin}
                    startIcon={
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    }
                  >
                    Sign in with Google
                  </Button>

                  <p className="text-center text-sm mt-2">
                    Don’t have an Account?{" "}
                    <span
                      className="text-[#CEBB98] font-semibold cursor-pointer"
                      onClick={toggleAuth}
                    >
                      Create Account
                    </span>
                  </p>
                </form>
              ) : (
                /* REGISTER FORM */
                <form className="space-y-5 pt-6">
                  <h2 className="text-lg font-semibold">Don’t have an Account?</h2>
                  <p className="text-xs text-gray-500 leading-snug">
                    For the purpose of industry registration, your details are required and will be stored.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <TextField label="Name" fullWidth variant="outlined" size="small"  name="name"
                      value={form.name}
                      onChange={handleChange}/>
                    <TextField label="Mobile Number" fullWidth variant="outlined" size="small"  name="phone"
                      value={form.phone}
                      onChange={handleChange}/>
                  </div>

                  <TextField label="E-mail" fullWidth variant="outlined" size="small" name="email"
                    value={form.email}
                    onChange={handleChange}/>

                  <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2 }}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    label="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{ mt: 2 }}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <p className="text-xs text-gray-500 text-center mt-2">
                    By Continuing, I agree to{" "}
                    <span className="text-[#CEBB98] cursor-pointer">Terms of Use</span> &{" "}
                    <span className="text-[#CEBB98] cursor-pointer">Privacy Policy</span>.
                  </p>

                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      backgroundColor: "#CEBB98",
                      "&:hover": { backgroundColor: "black" },
                    }}
                  >
                    Register
                  </Button>

                  {/* OR Divider */}
                  <div className="flex items-center mt-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-2 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                  </div>

                     {/* Google Login */}
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={startGoogleLogin}
                    startIcon={
                      <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    }
                  >
                    Sign up with Google
                  </Button>

                  <p className="text-center text-sm mt-2">
                    Already have an account?{" "}
                    <span
                      className="text-[#CEBB98] font-semibold cursor-pointer"
                      onClick={toggleAuth}
                    >
                      Sign in
                    </span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Auth;
