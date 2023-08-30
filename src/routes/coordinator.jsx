export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToSignup = (navigate) => {
  navigate("/signup");
};

export const goToPosts = (navigate) => {
  navigate("/posts");
};

export const goToComments = (navigate, postId) => {
  navigate(`/posts/${postId}/comments`);
};
