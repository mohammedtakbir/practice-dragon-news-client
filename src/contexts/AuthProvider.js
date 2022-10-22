import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //* create an user
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //* logIn an user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //* sign in with google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }
    //* logout
    const logout = () => {
        return signOut(auth)
    };

    //* update user profile
    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    };







    //* get currently sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { user, userSignUp, userLogIn, googleSignIn, logout, updateUserProfile };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;