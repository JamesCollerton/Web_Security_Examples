import React from 'react'
import { shallow } from 'enzyme'
import Search from '../Search'

describe('<Search />', () => {
    test('contains a single input', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('input')).toHaveLength(1)
    });

    test('contains a single search field', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find({type :"search"})).toHaveLength(1)
    });

    test('contains a single button', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('button')).toHaveLength(1)
    });

    test('contains a single submit', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find({type :"submit"})).toHaveLength(1)
    });
})