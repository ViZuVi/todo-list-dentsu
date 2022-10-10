<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        sm="8"
      >
        <v-text-field
          :value="newTodo"
          label="Новая задача"
          outlined
          @input="INPUT_NEW_TODO_TEXT"
        />
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <v-btn
          block
          outlined
          min-height="56"
          color="indigo"
          @click="ADD_TODO"
        >
          Создать
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'NewTodoForm',
  computed: {
    ...mapState(['newTodo'])
  },
  methods: {
    ...mapMutations(['ADD_TODO', 'INPUT_NEW_TODO_TEXT'])
  }
};
</script>
