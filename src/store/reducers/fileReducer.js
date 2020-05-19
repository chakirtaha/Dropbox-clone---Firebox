const initState = {}

const fileReducer = (state = initState, action) => {
  switch (action.type) {
    case 'UPLOAD_FILE_SUCCESS':
      console.log('upload file success');
      return state;
    case 'UPLOAD_FILE_ERROR':
      console.log('upload file error');
      return state;
      
    default:
      return state;
  }
};

export default fileReducer;