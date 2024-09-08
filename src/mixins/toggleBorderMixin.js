import { ref } from 'vue';

export default function toggleBorderMixin() {
  const hasBorder = ref(false);

  function toggleBorder() {
    hasBorder.value = !hasBorder.value;
  }

  return {
    hasBorder,
    toggleBorder,
  };
}
