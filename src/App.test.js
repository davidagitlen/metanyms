import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {

  test('renders correctly', () => {
    const wrapper = mount(App);
    expect(wrapper.element).toMatchSnapshot();
  })

})