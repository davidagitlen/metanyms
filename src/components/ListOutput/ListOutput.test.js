import { mount } from '@vue/test-utils';
import ListOutput from './ListOutput.vue';

describe('ListOutput', () => {

  test('renders correctly', () => {
    const wrapper = mount(ListOutput);
    expect(wrapper.element).toMatchSnapshot();
  })

})