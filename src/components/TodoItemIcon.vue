<template>
  <v-list-item-icon @click="$emit('click')">
    <v-btn outlined fab :color="color" small>
      <v-icon>{{ name }}</v-icon>
    </v-btn>
  </v-list-item-icon>
</template>

<script>
export default {
  name: "TodoItemIcon",
  props: {
    name: {
      type: String,
      required: true,
      default: () => "",
    },
    color: {
      type: String,
      required: true,
      default: () => "",
    },
  },
};
</script>
