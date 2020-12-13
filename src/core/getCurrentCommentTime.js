const getCurrentCommentTime = () => {
  return new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "/")
    .replace("T", " ");
};

export default getCurrentCommentTime;
