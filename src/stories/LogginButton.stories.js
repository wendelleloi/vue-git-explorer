import LoginButton from "../components/LoginButton.vue";

export default {
  title: "components/LoginButton",
  component: LoginButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginButton },
  template: '<LoginButton @onClick="onClick" v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {};
