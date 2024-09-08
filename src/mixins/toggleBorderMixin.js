import { ref } from 'vue';

console.log('toggleBorderMixin loaded'); 

export default {
  setup() {
    const hasBorder = ref(false);

    const toggleBorder = () => {
      hasBorder.value = !hasBorder.value;
    };

    return {
      hasBorder,
      toggleBorder,
    };
  },
};
