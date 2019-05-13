import urlHelper from './urlHelper';

describe("UrlHelper", () => {
  const validUrl = "http://foo.com", inValidUrl = "https://foobar. com";

  it("generates a random url", () => {
    urlHelper.BASE_URL = '';
    expect(urlHelper.randomizeUrl().replace('/', '')).toHaveLength(6);
  });

  it("check for valid urls", () => {
    
    expect(urlHelper.validateUrl(validUrl)).toBeTruthy();
    expect(urlHelper.validateUrl(inValidUrl)).toBeFalsy();
  });

  it("creates a mailto link", () => {
    expect(urlHelper.shareViaEmail()).toContain("mailto:");
    expect(urlHelper.shareViaEmail(validUrl)).toContain(validUrl);
  });

  it("creates shareable facebook link", () => {
    const expectedResult = `https://facebook.com/share.php?u=${validUrl}`
    expect(urlHelper.shareViaFacebook(validUrl)).toEqual(expectedResult);
  });

  it("creates shareable twitter link", () => {
    const expectedResult = `https://twitter.com/intent/tweet?url=${validUrl}`
    expect(urlHelper.shareViaTwitter(validUrl)).toEqual(expectedResult);
  });

});