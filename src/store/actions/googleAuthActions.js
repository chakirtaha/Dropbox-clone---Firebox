export const googleSignUp = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
     
      const firestore = getFirestore();
      const Id = getState().firebase.auth.uid;
      const name = getState().firebase.auth.name;
      const email = getState().firebase.auth.email;
     
      
      
      firestore.collection('users').doc(Id).set({
          ...user,
          firstName:name,
          email:email,
          
        })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }