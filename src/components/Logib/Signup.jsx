import React from 'react';
import photo from '../../assets/images/login/login.svg';
const Signup = () => {
    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const password = form.get('password');
        const email = form.get('email');

        console.log(email , password)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                
                <div className="hero-content flex-col lg:flex-row space-x-12">
                <div>
                    <img src={photo} alt="" />
                </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSignUp}>
                            <div className="form-control">
                                <h1 className='text-center text-[20px] font-bold'>Sign Up Now!</h1>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;