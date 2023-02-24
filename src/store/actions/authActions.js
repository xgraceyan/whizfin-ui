export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("signing up", dispatch);
    const firebase = getFirebase();
    const firestore = getFirestore();

    const usersRef = firebase
      .firestore()
      .collection("users")
      .where("username", "==", user.username);

    usersRef.get().then((doc) => {
      console.log(doc);
      if (doc.size > 0) {
        console.log("username exists");
        dispatch({
          type: "SIGNUP_ERROR",
          err: {
            message: "Username already exists",
          },
        }).then(() => {
          console.log("dispatched");
        });
      } else {
        console.log("going to db");
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((response) => {
            return firestore
              .collection("users")
              .doc(response.user.uid)
              .set({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                username: user.username,
                dateCreated: Math.floor(Date.now() / 1000),
                admin: false,
              });
          })
          .then(() => {
            dispatch({ type: "SIGNUP_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "SIGNUP_FAILURE", err });
          });
      }
    });
  };
};

export const logIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAILURE", err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    console.log("logging out");
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGOUT_FAILURE" });
      });
  };
};
