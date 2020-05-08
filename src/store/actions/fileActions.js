export const uploadFile = (file) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('files').add({
        ...file,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'UPLOAD_FILE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'UPLOAD_FILE_ERROR' }, err);
      });
    }
  };