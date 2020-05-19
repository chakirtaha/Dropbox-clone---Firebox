export const uploadFile = (file) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const name = getState().firebase.auth.displayName;
      const authorId = getState().firebase.auth.uid;
      
    
      
      firestore.collection('files').add({
        ...file,
        authorId: authorId,
        name:name,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'UPLOAD_FILE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'UPLOAD_FILE_ERROR' }, err);
      });
    }
  };
  