const urlHelper = {

  BASE_URL: window.location.host,

  randomizeUrl: function() {
    const randomString = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return `${this.BASE_URL}/${randomString}`;
  },

  validateUrl: url => {
    return /^((s3|ftp|https?):\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url);
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
