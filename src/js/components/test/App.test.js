import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  test('contains a NavBar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('NavBar')).toHaveLength(1)
  });
})