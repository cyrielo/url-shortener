const urlHelper = {

  randomizeUrl: url => {
    const randomString = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    url = url.endsWith('/') ? `${url}${randomString}` : `${url}/${randomString}`;
    return url;
  },

  shareViaEmail: url => {
    return `mailto:someone@example.com?Subject=Checkout%20this%20link&Body=${url}`;
  },

  shareViaFacebook: url => {
    return `https://facebook.com/share.php?u=${url}`;
  },

  shareViaTwitter: url => {
    return`https://twitter.com/intent/tweet?url=${url}`;
  }
};

export default urlHelper;
