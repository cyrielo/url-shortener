import React from 'react';
import urlHelper from '../../helpers/urlHelper';

const SocialShareButton = props => {
  const { url } = props;
  return (
    <div className="url-options mt-4">
      <ul className="d-inline-block social-share bg-diabled text-white p-3">
        <li className="d-inline-block mr-5">
          <i className="zmdi zmdi-share"></i>
        </li >
        <li className="d-inline-block mr-2">
          <a target="_blank" href={urlHelper.shareViaEmail(url)} className="zmdi zmdi-email text-white"></a>
        </li >
        <li className="d-inline-block mr-2">
          <a target="_blank" href={urlHelper.shareViaFacebook(url)} className="zmdi zmdi-facebook text-white"></a>
        </li>
        <li className="d-inline-block mr-2">
          <a target="_blank" href={urlHelper.shareViaTwitter(url)} className="zmdi zmdi-twitter text-white"></a>
        </li>
      </ul>
    </div>
  )
}

export default SocialShareButton;
