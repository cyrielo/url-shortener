import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import urlShortenerService from '../../requests/urlShortenerService';
import urlHelper from '../../helpers/urlHelper';

class ShortUrlResolver extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    originalUrl: '/'
  }

  componentDidMount() {
    let { shortUrl } = this.props.match.params;
    shortUrl = `${urlHelper.BASE_URL}/${shortUrl}`;

    urlShortenerService.findShortUrl(shortUrl)
      .then((urlInfo) => {
        this.setState({ originalUrl: urlInfo.originalUrl});
        window.location.href = urlInfo.originalUrl;
      })
      .catch((error) => {
        window.location.href = '/';
      });
  }
  render() {
    return (
      <>
        <div className="text-center mt-5 pt-5">
          <p className="mt-5">Click <a href={this.state.originalUrl} className="text-primary">here</a> if you are not redirected automatically</p>
        </div>
      </>
    )
  }g 
};

export default ShortUrlResolver
