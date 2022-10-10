<template>
  <div>
    <v-list-item class="todo-item">
      <v-list-item-content class="mt-4 mb-4">
        <v-text-field
          dense
          hide-details
          clearable
          v-model="newText"
          v-if="editTextMode"
          color="indigo"
          :error="!newText"
        ></v-text-field>
        <v-list-item-title v-else v-text="item.field_value"></v-list-item-title>
      </v-list-item-content>
      <TodoItemIcon
        class="ml-4"
        color="indigo"
        :name="editTextMode ? 'mdi-check-underline' : 'mdi-pencil'"
        @click="editTodo"
      />
      <TodoItemIcon
        color="red"
        name="mdi-delete"
        @click="DELETE_TODO(item.field_num)"
      />
    </v-list-item>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TodoItemIcon from "./TodoItemIcon.vue";

export default {
  name: "TodoItem",
  components: {
    TodoItemIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      editTextMode: false,
      newText: this.item.field_value,
    };
  },
  methods: {
    ...mapMutations(["EDIT_TODO", "DELETE_TODO"]),
    editTodo() {
      if (this.editTextMode && this.newText && this.newText.trim()) {
        this.EDIT_TODO([this.item.field_num, this.newText]);
      }
      const test = ''
      this.editTextMode = !this.editTextMode;
    },
  },
};
</script>
