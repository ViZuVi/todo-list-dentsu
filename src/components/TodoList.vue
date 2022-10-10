<template>
  <div>
    <h2 class="text-center" v-if="!todos?.length">
      Список пуст
    </h2>
    <v-list v-else outlined>
      <TodoItem
        v-for="todo in todos"
        :key="todo.field_num"
        :item="todo"
      />
    </v-list>
    <v-btn
      block
      large
      class="mt-4 mb-4 ml-auto mr-auto white--text"
      color="indigo"
      @click="submitTodos"
    >
      Сохранить
    </v-btn>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    ...mapActions(["submitTodos"]),
  },
};
</script>
