import { mount } from '@vue/test-utils';
import Form from './Form.vue';

describe('Form', () => {

  test('renders correctly', () => {
    const wrapper = mount(Form);
    expect(wrapper.element).toMatchSnapshot();
  })

})