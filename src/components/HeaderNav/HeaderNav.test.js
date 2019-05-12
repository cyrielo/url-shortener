import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import HeaderNav from './HeaderNav';

describe("HeaderNav", () => {
  let mountedHeader;
  it("renders without crashing", () => {
    mountedHeader = mount(<BrowserRouter><HeaderNav /></BrowserRouter>);
    expect(mountedHeader).toBeTruthy();
  });

  it("should render the site logo", () => {
    const findLogo = mountedHeader.find("img");
    expect(findLogo).toHaveLength(1);
    expect(findLogo.first().hasClass("logo")).toBeTruthy();
  });

  it("Should render site title", () => {
    expect(mountedHeader.find('.site-name')).toHaveLength(1);
  });
});
