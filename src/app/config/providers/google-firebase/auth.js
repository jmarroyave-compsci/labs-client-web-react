import firebase from './';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseAuth = ( provider ) => {
  const auth = getAuth();
  return signInWithPopup(auth, provider)
      .then( (res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = res.user;        
        return user;
      } )
      .catch( error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);        
        return error;
      })
}

export const googleProvider = new GoogleAuthProvider();
