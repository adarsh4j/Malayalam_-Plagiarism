import Style from '../../pages/signup/signup.module.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoo from '../../assets/logo.png';
import symbol1 from '../../assets/kerala.png';
import symbol3 from '../../assets/image.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   // State for password value
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password value
  const [passwordType, setPasswordType] = useState('password'); // State for password visibility
  const [confirmPasswordType, setConfirmPasswordType] = useState('password'); // State for confirm password visibility
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  // Toggle for password visibility
  const handlePasswordToggle = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  // Toggle for confirm password visibility
  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordType(confirmPasswordType === 'password' ? 'text' : 'password');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert('Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name,
        email,
        password,  // Send password, not the type
      });
      alert('Registration Success!');
      navigate('/signin');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed!');
    }
  };

  return (
    <div className={Style.container}>
      <a href="https://icfoss.in/" target="_blank" rel="noopener noreferrer">
        <img className={Style.icon} src={logoo} alt="ICFOSS" />
      </a>
      <img className={Style.kerala} src={symbol1} alt="Kerala Symbol" />
      <img className={Style.img} src={symbol3} alt="Image Symbol" />
      <div className={Style.card}>
        <h2 className={Style.title}>REGISTER</h2>

        <form onSubmit={handleSubmit}>
          <div className={Style.roleselection}>
            <label>
              <input type="radio" name='role' value='user' checked={role === 'user'} onChange={() => setRole('user')} />User
            </label>
            <label>
              <input type="radio" name='role' value='admin' checked={role === 'admin'} onChange={() => setRole('admin')} />Admin
            </label>
          </div>
          <div className={Style.inputBox}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
          </div>
          <div className={Style.inputBox}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
          </div>
          <div className={Style.inputBox}>
            <div className={Style.passwordWrapper}>
              <input type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <span className={Style.iconWrapper} onClick={handlePasswordToggle}>
                {passwordType === 'password' ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>
          <div className={Style.inputBox}>
            <div className={Style.passwordWrapper}>
              <input type={confirmPasswordType} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required />
              <span className={Style.iconWrapper} onClick={handleConfirmPasswordToggle}>
                {confirmPasswordType === 'password' ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

          <div className={Style.inputBox}>
            <button type="submit">Sign up</button>
          </div>
          <p className={Style.account}>
            <Link to="/Signin">Already have an account?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;





