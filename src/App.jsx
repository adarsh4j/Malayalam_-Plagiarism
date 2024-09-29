// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Landing from "./pages/landing/landing";
// import Signin from "./pages/signin/signin";
// // import Signup from "./pages/signup/signup";
// import Dashboard from "./pages/dashboard/dashboard";
// import Checker from "./pages/checker/checker";
// // import ForgotPassword from "./pages/reset/reset";
// import ProtectedRoute from "../src/components/protectedRoutes"; 

// function App() {
//   const isLoggedIn = window.localStorage.getItem("loggedIn");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/signin" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signin />} />
//         {/* <Route path="/signup" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup />} /> */}
//         <Route path="/" element={<Landing />} />

//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={<ProtectedRoute isLoggedIn={isLoggedIn}><Dashboard /></ProtectedRoute>}
//         />
//         <Route
//           path="/checker"
//           element={<ProtectedRoute isLoggedIn={isLoggedIn}><Checker /></ProtectedRoute>}
//         />

//         {/* <Route path="/reset" element={<ForgotPassword />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;















import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import Checker from "./pages/checker/checker";
import AdminDashboard from "./pages/dashboard/dashboardadmin";
// import ForgotPassword from "./pages/reset/reset";
// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <Routes>
        {!isLoggedIn && (
          <>
           <Route path="/signin" element={<Signin />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/" element={<Landing />} />
           </>
        )}
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checker" element={<Checker />} />
        <Route path="/Admindashboard" element={<AdminDashboard/>}   />     {/* <Route path="/reset" element={<ForgotPassword />} /> */}

      </Routes>
    </Router>
  );
}
export default App;




