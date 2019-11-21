import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { LoginPage } from './LoginPage';

describe('login page', () => {
  it('error on empty username', () => {
    const props = {
      actions: { logout: () => Promise.resolve() },
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<LoginPage {...props} />);
    const submitButton = wrapper.find('input').last();
    expect(submitButton.prop('type')).toEqual('submit');
    submitButton.simulate('click');
    expect(wrapper.state().errors).toHaveProperty('username');
  });
});
