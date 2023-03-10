import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';




const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUser, setUser, setLoading, signInWithGoogle } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();


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
                    });

                const userData = {
                    name: user.displayName,
                    email: user.email,
                    type: "buyer"

                }
                fetch("https://bookhouse-server.vercel.app/gsignup", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem("accessToken")}`

                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(res => {
                        //console.log(res)
                        setLoading(false)
                        navigate('/')
                    })


            })
            .catch(err => {
                console.error(err)
            })
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photo
                }
                updateUser(userInfo)
                    .then(result => {
                        toast.success("Sucessfully Logged in")
                        saveUser(data.name, data.email, data.password, data.type)
                        reset()

                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email, password, type) => {
        const user = { name, email, password, type }
        fetch("https://bookhouse-server.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
                getUserToken(email);
                console.log(data)
            })
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
                <h2 className='text-2xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo Url</span></label>
                        <input type="photo" {...register("photo", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <p className='my-2'>Are you Buyer or Seller?</p>
                    <div className='grid grid-cols-2'>
                        <div>
                            <label htmlFor="Buyer" >
                                <input
                                    {...register("type")}
                                    type="radio"
                                    value="buyer"
                                    id="Buyer"
                                    className='radio h-4 w-4 radio-primary'
                                />
                                <span className='ml-3'>Buyer</span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="seller" >
                                <input
                                    {...register("type")}
                                    type="radio"
                                    value="seller"
                                    id="seller"
                                    className='radio h-4 w-4 radio-primary'
                                />
                                <span className='ml-3'>Seller</span>
                            </label>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account?<Link className='text-primary' to="/login"> Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;