import React from 'react';
import MarketingCard from './MarketingCard';
import { mount } from 'enzyme';

describe("<MarketingCard />", () => {
  let mountedMarketingCard, imagePath = 'path/to/image.jpeg';
  it("renders a responsive feature image", () => {
    mountedMarketingCard = mount(<MarketingCard featuredImage={imagePath} />);
    const featuredImage = mountedMarketingCard.find('img');
    expect(featuredImage).toHaveLength(1);
    expect(featuredImage.prop("src")).toEqual(imagePath);
    expect(featuredImage.hasClass("img-fluid")).toBeTruthy();
  });

  it("renders the title prop", () => {
    const data = "Connescitur" ;
    mountedMarketingCard = mount(<MarketingCard title={data} />);
    expect(mountedMarketingCard.children().text()).toContain(data);
  });

  it("renders the content prop", () => {
    const data = "Lorem ipsum" ;
    mountedMarketingCard = mount(<MarketingCard content={data} />);
    expect(mountedMarketingCard.children().text()).toContain(data);
  });

  it("renders the component children from builtin props.children", () => {
    const data = "Dolor sit amet"
    mountedMarketingCard = mount(<MarketingCard > { data } </MarketingCard>);
    expect(mountedMarketingCard.children().text()).toContain(data);
  });
});

