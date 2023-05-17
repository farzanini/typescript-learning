const getPostLikeCounts = (account: {
  id: number;
  name: string;
  password: string;
  post?: {
    image_url: string;
    caption?: string;
    likesCount?: number;
  };
}): number | null | undefined => {
  //implement optional chaining
  return account.id ? account?.post?.likesCount : 0;
};

export { getPostLikeCounts };
