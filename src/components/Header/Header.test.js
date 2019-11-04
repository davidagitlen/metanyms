import { mount } from '@vue/test-utils';
import Header from './Header.vue';

describe('Header', () => {

  test('renders correctly', () => {
    const wrapper = mount(Header);
    expect(wrapper.element).toMatchSnapshot();
  })

})