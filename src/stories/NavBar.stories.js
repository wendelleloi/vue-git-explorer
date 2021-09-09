import NavBar from "../components/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavBar },
  template: '<NavBar @onClick="() => {}" v-bind="$props"/>',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  isUserDetailsView: true,
  isAuthenticated: true,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  // showBackButton: true,
  // isAuthenticated: false,
};
