<template>
  <v-app class="app">
    <h1 class="app__title">Список задач</h1>
    <v-main>
      <NewTodoForm />
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import NewTodoForm from "./components/NewTodoForm.vue";

export default {
  name: "App",
  components: {
    TodoList,
    NewTodoForm
  },
  data() {
    return {
      newTodo: ""
    }
  }
};
</script>

<style lang='scss'>
.app {
  max-width: 1100px;
  margin: 0 auto;
}
.app__title {
  margin: 1.2rem auto;
}
</style>
