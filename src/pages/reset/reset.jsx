import { useState } from 'react';
import style from '../../pages/reset/reset.module.css' 
import logoo from '../../assets/logo.png'
import symbol1 from '../../assets/kerala.png'
import symbol3 from '../../assets/image.png'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(`A password reset link has been sent to ${email}`);
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  return (
    <div className={style.container}>
       <a href="https://icfoss.in/" target="_blank" rel="noopener noreferrer">
            <img className={style.icon} src={logoo} alt="ICFOSS" />
        </a>
        <img className={style.kerala} src={symbol1} alt="Kerala Symbol" />
        <img className={style.img} src={symbol3} alt="Image Symbol" />
    <div className={style.text}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.input}
        />
        <br />
        <button type="submit" className={style.button}>
          Send Reset Link
        </button>
      </form>
      <p className={style.message}>{message}</p>
    </div>
    </div>
  );
};

export default ForgotPassword;

