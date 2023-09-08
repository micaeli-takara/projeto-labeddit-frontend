export const goToLogin = (navigate) => {
    navigate("/");
  };
  
  export const goToPosts = (navigate) => {
    navigate("/posts");
  };
  
  export const goToComments = (navigate, id) => {
    navigate(`/comments/${id}/posts`);
  };