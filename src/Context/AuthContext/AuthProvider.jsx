import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('State Captured', currentUser  );
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }
    return (
        <div>
            <AuthContext.Provider value ={authInfo}>
                {children}
            </AuthContext.Provider>           
        </div>
    );
};

export default AuthProvider;