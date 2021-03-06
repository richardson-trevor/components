import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import any from '@travi/any';
import InternalLink from '../../../../src/atoms/links/internal';

suite('internal link', () => {
  test('that gatsby-link is leveraged', () => {
    const url = any.url();
    const text = any.sentence();

    const wrapper = shallow(<InternalLink text={text} to={url} />);
    const link = wrapper.find('GatsbyLink');

    assert.equal(link.prop('to'), url);
    assert.equal(link.childAt(0).text(), text);
  });
});
