import Paginate from "vuejs-paginate";

export default {
  title: "components/Paginate",
  component: Paginate,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Paginate },
  template: '<Paginate v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  "v-model": 10,
  "page-count": 100,
  "page-range": 3,
  "margin-pages": 2,
  "click-handler": () => {},
  "prev-text": "Anterior",
  "next-text": "Próximo",
  "container-class": "pagination",
  "active-class": "myActivePaginateButton",
  "page-class": "page-item",
};
