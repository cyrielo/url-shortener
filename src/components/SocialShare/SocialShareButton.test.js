import React from 'react';
import { mount } from 'enzyme';
import SocialShareButton from './SocialShareButton';

describe("<SocialShareButton />", () => {
  let mountedSocialShareButton, url = 'https://localhost:3000/edbdje';

  it("renders correctly without a url prop", () => {
    mountedSocialShareButton = mount(<SocialShareButton />);
   expect(mountedSocialShareButton.find("ul.bg-diabled")).toHaveLength(1);
   expect(mountedSocialShareButton.children()).not.toContain(['facebook', 'twitter', 'email']);
  });

  it("renders social share icons ", () => {
    mountedSocialShareButton = mount(<SocialShareButton url={url} />);
    expect(mountedSocialShareButton.containsAllMatchingElements([<i className="zmdi zmdi-email" />, <i className="zmdi zmdi-facebook" />, <i className="zmdi zmdi-twitter" />])).toBeTruthy();
  });

});
