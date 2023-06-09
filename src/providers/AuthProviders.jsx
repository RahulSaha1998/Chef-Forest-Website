import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserData = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
        .then(() => {
            console.log('user profile updated')
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        registerUser,
        signIn,
        updateUserData,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;