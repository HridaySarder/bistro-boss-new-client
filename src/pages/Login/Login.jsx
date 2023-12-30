import { useEffect } from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
   useEffect(()=> {
    loadCaptchaEnginge(6);
  },[])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  }
  const handleValidateCaptcha = () => {

  }
  return (
    
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <img src={loginImg} alt="" />
      </div>
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
          <LoadCanvasTemplate />
            
            <input name='captcha' type="text" placeholder="Write above the captcha" className="input input-bordered" required />
            <button onChange={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
           
          </div>
          <div className="form-control mt-6">
            
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  </div>
   
  );
};

export default Login;