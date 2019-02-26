import React from 'react';
import { shallow } from 'enzyme';
import { PresidentsContainer } from './PresidentsContainer';
import { presidentsData } from './mockData';

describe('PresidentsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PresidentsContainer presidents={presidentsData} />);
  });

  it('should match the snapshot when partyFilter is All', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state of partyFilter when a change event occurs', () => {
    const mockEvent = { target: { value: 'Whig' } };
    wrapper.find('.drop-down').simulate('change', mockEvent);
    expect(wrapper.state('partyFilter')).toEqual('Whig');
  });

  it('should return a subset of presidents when getPresidentsToDisplay is called and partyFilter !== All', () => {
    wrapper.setState({ partyFilter: 'No Party' });
    const result = wrapper.instance().getPresidentsToDisplay();
    expect(result).toHaveLength(1);
  });
});