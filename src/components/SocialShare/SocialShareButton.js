import React from 'react';
import urlHelper from '../../helpers/urlHelper';
import './SocialShareButton.scss';

const SocialShareButton = props => {
  const { url } = props;
  return (
    <div className="url-options mt-4">
      <ul className={`d-inline-block social-share ${ url ? '' : 'bg-diabled'} text-white p-2`}>
        <li className={`d-inline-block  ${url ? 'mr-5' : ''}`}>
          <i className="zmdi zmdi-share"></i>
        </li >
        {
          url ? (
            <>
              <li className="d-inline-block mr-2">
                <a target="_blank" rel="noopener noreferrer" href={urlHelper.shareViaEmail(url)} className="text-white">
                  <i className="zmdi zmdi-email"></i>
                </a>
              </li >
              <li className="d-inline-block mr-2">
                <a target="_blank" rel="noopener noreferrer" href={urlHelper.shareViaFacebook(url)} title="Facebook Share" className="text-white">
                  <i className="zmdi zmdi-facebook"></i>
                </a>
              </li>
              <li className="d-inline-block mr-2">
                <a target="_blank" rel="noopener noreferrer" href={urlHelper.shareViaTwitter(url)} className="text-white">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
              </li>            
            </>
          ): null
        }
      </ul>
    </div>
  )
}

export default SocialShareButton;
