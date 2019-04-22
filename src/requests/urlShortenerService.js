import { database } from '../config/firebase';
import urlHelper from '../helpers/urlHelper';

const urlShortenerService = {
  URL_KEY: 'urls',
  shortenUrl: async function(originalUrl) {
    const shortenedUrl = urlHelper.randomizeUrl(originalUrl);
    const newKey = database.ref(this.URL_KEY).push().key;
    return await new Promise((resolve, reject) => {
      database.ref(`${this.URL_KEY}/${newKey}`).set({ originalUrl, shortenedUrl })
      .then(() => {
        resolve({ originalUrl, shortenedUrl });
      })
      .catch(error => {
        reject(error);
      })
    });
  },

  findShortUrl: async function(shortenedUrl) {
    return await new Promise((resolve, reject) => {
      database.ref(this.URL_KEY).once('value')
      .then((snapshot) => {
        window.snapshot = snapshot;
        const urlValues = snapshot.val();
        for(const key in urlValues) {
          if(urlValues[key].shortenedUrl === shortenedUrl ){
            resolve(urlValues[key]);
            return urlValues[key];
          }
        }
      })
      .catch((error) => {
        reject(error);
        return error;
      });
    });

  }
};

export default urlShortenerService;
