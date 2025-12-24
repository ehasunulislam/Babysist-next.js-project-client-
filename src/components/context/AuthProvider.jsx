"use client"
import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase/firebase.config'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* register functionality start */
    const  createUserFunction = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    /* register functionality end */

    /* signIn with google start */
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    /* signIn with google end */

    /* update user functionality start */
    const updateUser = (name, photoURL) => {
        if(!auth.currentUser) {
            return;
        }

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }
    /* update user functionality end */

    /* login user functionality start */

    /* login user functionality end */


    /* current User functionality start */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return() => {
            unsubscribe()
        }
    }, [])
    /* current User functionality end */
    
   const authInfo = {
    user, loading,
    createUserFunction, 
    updateUser,
    signInWithGoogle,
   }

  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider
