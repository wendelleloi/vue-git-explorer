import LogoutButton from "../components/LogoutButton.vue";

export default {
  title: "components/LogoutButton",
  component: LogoutButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LogoutButton },
  template: '<LogoutButton @onClick="onClick" v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {};
