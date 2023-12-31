import { useForm } from 'react-hook-form';
import loginImg from '../../assets/others/authentication2.png'

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
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
  );
};

export default SignUp;