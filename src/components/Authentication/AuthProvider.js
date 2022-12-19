import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from './Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }


    const createUser = (email, password) => {
        console.log(email)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        console.log(userInfo)
        return updateProfile(auth.currentUser, userInfo);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user observing');
            setUser(currentUser);
            // console.log(currentUser)
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authifo = {
        signInWithGoogle,
        createUser,
        signIn,
        setUser,
        user,
        setLoading,
        loading,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authifo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;