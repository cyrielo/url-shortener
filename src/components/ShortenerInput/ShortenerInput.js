import React, { Component } from 'react';
import clipboardCopy from 'clipboard-copy';
import urlShortenerService from '../../requests/urlShortenerService';

class ShortenerInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange;
  }

  state = {
    url: '',
    shortened: false,
    shortenedUrl: null
  }

  handleAction(action) {
    action = action.toLowerCase();
    if (action === 'copy') {
      clipboardCopy(this.state.url).then(() => {
        alert(`Copied: ${this.state.url}`);
      });
    } else {
      urlShortenerService.shortenUrl(this.state.url)
      .then((dataSaved) => {
        this.setState({
          shortenedUrl: dataSaved.shortenedUrl,
          url: dataSaved.shortenedUrl,
          shortened: true
        }, this.onChange(dataSaved.shortenedUrl));
      })
      .catch((error) => {
        console.log("error", error);
      });
    }
  }

  render() {
    const { shortened } = this.state;
    return (
      <div className="input-group mb-3 shadow p-3">
        <div className="input-group-prepend">
          <span className="input-group-text bg-transparent border-0" id="basic-addon1"><i className="zmdi zmdi-8tracks"></i></span>
        </div>
        <input onChange={ (e) => this.setState({ url: e.target.value }) } value={this.state.url} type="url" className="form-control bg-transparent border-0" placeholder="https://youtube.com/watch?v=qidysnts" aria-label="url" aria-describedby="basic-addon1"/>
        <button onClick={(e) => this.handleAction(e.target.innerText.trim().toLowerCase())} className="btn text-white shorten-btn px-4"><i className="zmdi zmdi-copy"></i> {shortened && 'Copy' || 'Shorten' } </button>
      </div>
    )
  }
}

export default ShortenerInput;
