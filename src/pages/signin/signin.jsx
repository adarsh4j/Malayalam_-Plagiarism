// import Style from '../../pages/signin/signin.module.css';
// import axios from 'axios';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import logo from "../../assets/logo.png";
// import symbol from "../../assets/kerala.png";
// import symbol2 from "../../assets/image.png";
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// function Signin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [type, setType]=useState('password');
//   const [isPasswordVisible, setisPasswordVisible]=useState(false);
//   const navigate = useNavigate();

//   const handleToggle=()=>{
//     setisPasswordVisible(!isPasswordVisible);
//     setType(isPasswordVisible? 'password':'text');
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
//       const token = response.data.jwt;
//       console.log(token);
//       const userType =response.data.userType;
//       localStorage.setItem('jwt', token);

//       if (response.data.status === 'ok') {
//         console.log(userType);
//         alert("Login successful");

//         localStorage.setItem("token", token);  
//         localStorage.setItem("userType", response.data.userType);
//         localStorage.setItem("loggedIn", true);

//         if (response.data.userType === "Admin") {
//           navigate("/dashboardadmin"); 
//         } else {
//           navigate("/dashboard");  
//         }
//       } else {
//         alert('Login failed!');
//       }
//     } catch (error) {
//       alert('Login failed!');
//       console.error(error);
//     }
//   };

//   return (
//     <div className={Style.container}>
//       <a href="https://icfoss.in/" target="_blank" rel="noopener noreferrer">
//         <img className={Style.icon} src={logo} alt="ICFOSS" />
//       </a>
//       <img className={Style.kerala} src={symbol} alt="Kerala Symbol" />
//       <img className={Style.img} src={symbol2} alt="Image Symbol" />
//       <div className={Style.card}>
//         <h3 className={Style.title}>WELCOME BACK</h3>
//         <form onSubmit={handleSubmit}>
//           <div className={Style.inputBox}>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="                  Email"
//               required
//             />
//           </div>
//           <div className={Style.inputBox}>
//             <div className={Style.inputWrapper}>
//             <input
//               type={type}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="             Password"
//               required
//             />
//             <span className={Style.iconWrapper} onClick={handleToggle}>{isPasswordVisible? <FaEye size={20}/> : <FaEyeSlash size={20}/>}</span>
//             </div>
//           </div>
//           <div className={Style.inputBox}>
//             <button type="submit">Login</button>
//           </div>
//           {/* Uncomment if you want forgot password link */}
//           {/* <p className={Style.forgot}>
//             <Link to="/reset">Forgot Password?</Link>
//           </p> */}
//           <p className={Style.account}>
//             <Link to="/Signup">Don't have an account?</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signin;






import Style from '../../pages/signin/signin.module.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import symbol from "../../assets/kerala.png";
import symbol2 from "../../assets/image.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  
  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setType(isPasswordVisible ? 'password' : 'text'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/login',
        { email, password },
        {
          withCredentials: true,  
      }
      );
    

      navigate('/dashboard');
    } catch (error) {
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className={Style.container}>
      <a href="https://icfoss.in/" target="_blank" rel="noopener noreferrer">
        <img className={Style.icon} src={logo} alt="ICFOSS" />
      </a>
      <img className={Style.kerala} src={symbol} alt="Kerala Symbol" />
      <img className={Style.img} src={symbol2} alt="Image Symbol" />
      <div className={Style.card}>
        <h3 className={Style.title}>WELCOME BACK</h3>
        <form onSubmit={handleSubmit}>
          <div className={Style.inputBox}>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email" 
              required 
            />
          </div>
          <div className={Style.inputBox}>
            <div className={Style.inputWrapper}> 
              <input 
                type={type} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
              />
              <span className={Style.iconWrapper} onClick={handleToggle}>
                {isPasswordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />} 
              </span>
            </div>
          </div>
          <div className={Style.inputBox}>
            <button type="submit">Login</button>
          </div>
          <p className={Style.account}>
            <Link to="/Signup">Don't have an account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;