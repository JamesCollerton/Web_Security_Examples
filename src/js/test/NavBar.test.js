import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../NavBar'

describe('<NavBar />', () => {
    test('contains the company name', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.text()).toMatch("The Art Bazaar")
    });

    test('contains a search bar', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find('Search')).toHaveLength(1)
    });
})
