import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Loading from './Loading';

describe("loading module", () => {
  it("hide in case of no ajax call", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(".spinner-border").length).toEqual(0);
  });

  it("show in case of active ajax call", () => {
    const wrapper = shallow(<Loading loading />);
    expect(wrapper.find(".spinner-border").length).toEqual(1);
  });
}); 