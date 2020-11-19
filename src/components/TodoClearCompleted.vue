<template>
  <button v-if="showClearCompletedButton" @click="clearCompleted" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-purple border-purple hover:bg-green">Clear Completed</button>
</template>

<script>
export default {
  name: 'todo-clear-completed',
  computed: {
    showClearCompletedButton(){
      return this.$store.getters.showClearCompletedButton
    }
  },
  methods: {
    clearCompleted() {
        this.$store.dispatch('clearCompleted')
       
    }
  }
}
</script>