import { useForm } from 'react-hook-form';
import loginImg from '../../assets/others/authentication2.png'
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {createUser,updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()
  const onSubmit = data => {
    console.log(data);
  createUser(data.email,data.password)
  .then(result => {
    const loggedUser = result.user;
    console.log(loggedUser);
    updateUserProfile(data.name, data.photoURL)
    .then(() => {
      console.log('user profile info updated');
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch(error => {
      console.log(error);
    })
  })
  }
  return (
  <>
   <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                
              />
              {errors.name && <span className='text-red-700'>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
               
              />
               {errors.email && <span className='text-red-700'>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="email"
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
               
              />
               {errors.photoURL && <span className='text-red-700'>Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                {...register("password", { required: true,minLength:6, maxLength: 20 })}
                type="password"
                placeholder="password"
                className="input input-bordered"
               
              />
               {errors.password?.type === 'required' && <p className='text-red-700'>Password is required</p>}
               {errors.password?.type === 'minLength' && <p className='text-red-700'>Password must be 6 character</p>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
           
          </form>
        </div>
      </div>
    </div>
  </>
  );
};

export default SignUp;