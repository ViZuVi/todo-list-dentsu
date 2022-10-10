export default {
  state: {
    todos: [
      { field_num: 1, field_value: 'text' },
      {
        field_num: 2,
        field_value:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, est pariatur! Veniam nihil, molestiae eum atque ',
      },
      {
        field_num: 3,
        field_value:
          'repellat tempora saepe, perspiciatis odit vero accusamus sapiente? Delectus, minima nesciunt. Aliquid, voluptatem rerum!',
      },
    ],
    newTodo: ''
  },
  mutations: {
    EDIT_TODO(state, [id, newText]) {
      const todo = state.todos.find(todo => todo.field_num === id)
      if (todo) {
        todo.field_value = newText
      }
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter(todo => todo.field_num !== id)
    },
    INPUT_NEW_TODO_TEXT(state, text) {
      state.newTodo = text
    },
    ADD_TODO(state) {
      if (!state.newTodo.trim()) {
        state.newTodo = ''
        return
      }
      state.todos.push({ field_num: Date.now(), field_value: state.newTodo })
      state.newTodo = ''
    },
  },
  actions: {
    submitTodos({ state }) {
      console.log(state.todos);
    },
  },
  getters: {}
}
