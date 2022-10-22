import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* create an user
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //* logIn an user
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //* logout
    const logout = () => {
        return signOut(auth);
    };

    //* update user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    };

    //* get currently sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => unsubscribe()
    }, []);

    //* email verification
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const authInfo = { user, userSignUp, userLogIn, googleSignIn, logout, updateUserProfile, loading, verifyEmail, setLoading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;