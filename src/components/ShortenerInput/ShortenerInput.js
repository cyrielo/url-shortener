import React, { Component } from 'react';
import clipboardCopy from 'clipboard-copy';
import urlHelper from '../../helpers/urlHelper';
import { SHORTENER_ACTION_TYPE_COPY, SHORTENER_ACTION_TYPE_SHORTEN } from '../../constants/constants';
import urlShortenerService from '../../requests/urlShortenerService';
import './ShortenerInput.scss';

class ShortenerInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
  }

  state = {
    url: '',
    shortened: false,
    shortenedUrl: null,
    isValidUrl: false,
  }

  setUrl(url) {
    this.setState({
      url,
      isValidUrl: urlHelper.validateUrl(url)
    });
  }

  handleAction(action) {
    if (action === SHORTENER_ACTION_TYPE_COPY) {
      clipboardCopy(this.state.url).then(() => {
       alert(`Copied ${this.state.shortenedUrl} to clipboard!`);
      });
    } else if (action === SHORTENER_ACTION_TYPE_SHORTEN) {
      urlShortenerService.shortenUrl(this.state.url)
      .then((dataSaved) => {
        this.setState({
          shortenedUrl: dataSaved.shortenedUrl,
          url: dataSaved.shortenedUrl,
          shortened: true
        }, this.onChange(dataSaved.shortenedUrl));
      })
      .catch((error) => {
        alert(`Something happened, could not shorted ${this.state.url} this time!`);
      });
    }
  }

  render() {
    const { shortened, url, isValidUrl } = this.state;
    return (
      <div className="input-group mb-3 shortener-input shadow p-3">
        <div className="input-group-prepend">
          <span className="input-group-text bg-transparent border-0" id="basic-addon1">
            <i className="zmdi zmdi-8tracks"></i>
          </span>
        </div>
        <input onChange={ (e) => this.setUrl(e.target.value) } value={ url } type="url" className="form-control bg-transparent border-0" placeholder="https://youtube.com/watch?v=qidysnts" aria-label="url" aria-describedby="basic-addon1"/>
        <button
          disabled={ !isValidUrl }
          onClick={(e) => this.handleAction( e.target.dataset.actionType )}
          data-action-type={ shortened ? SHORTENER_ACTION_TYPE_COPY : SHORTENER_ACTION_TYPE_SHORTEN }
          className={`btn text-white ${ isValidUrl ? 'shorten-btn' : 'btn-dark'} px-4`}>
            <i className="zmdi zmdi-copy"></i> {shortened && 'Copy' || 'Shorten' }
        </button>
      </div>
    )
  }
}

export default ShortenerInput;
