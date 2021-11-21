import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  const [admin, setAdmin] = useState(false)
  const auth = getAuth();
  // create a new user
  const createNewUser = ({ name, email, password }, location, history) => {
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => { })
          .catch((error) => {
            setError(error.message);
          });
        saveUserToDB(name, email)
        const destination = location?.state?.from;
        history.replace(destination || "/");
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => { setIsLoading(false) });
  };
  // sign in a user with firebase authentication
  const singInUser = ({ email, password }, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.replace(location?.state?.from || "/home");
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // sign out a user with firebase authentication
  const signOutUser = (history) => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.replace("/home");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  console.log(user)
  // observe the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAdminLoading(true);
        fetch(`https://dry-springs-50521.herokuapp.com/users/${user?.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
          .finally(() => setAdminLoading(false))
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);
  // save the registered use to the mongo database
  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("https://dry-springs-50521.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return {
    createNewUser,
    singInUser,
    user,
    error,
    signOutUser,
    isLoading,
    setError,
    admin,
    adminLoading
  };
};
export default useFirebase;
