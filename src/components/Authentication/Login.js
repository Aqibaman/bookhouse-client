
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';





const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, setUser, signInWithGoogle, setLoading } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle(provider)
            .then(res => {
                setLoading(true)
                const user = res.user;
                setUser(user)
                toast.success("Seccessfully Sign up")
                const currentUser = {
                    email: user.email
                }

                //console.log(currentUser)
                // get jwt token
                fetch('https://bookhouse-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',

                    },
                    body: JSON.stringify(currentUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('accessToken', data.token);
                        navigate(from, { replace: true });
                    });

            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                getUserToken(data.email);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    const getUserToken = email => {
        fetch(`https://bookhouse-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/')
                }
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 border shadow-lg'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Selling Point? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;