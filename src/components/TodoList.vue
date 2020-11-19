<template>
  <div class="bg-white rounded shadow p-6 m-6 w-full lg:w-3/4 lg:max-w-lg mx-auto">
    <header>
      <h1 class="text-purple-700"> <b>Task List </b></h1>
    </header>
   <div class="flex mt-4 mb-3">
      <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Task" v-model="newTodo">
      <button class="flex-no-shrink p-2 border-1 rounded bg-purple-500 text-white border-purple hover:text-white hover:bg-teal" @click="addTodo">ADD</button>
    </div>
    <div> 

<todo-item v-for="todo in todosFiltered"
     :key="todo.id" :todo="todo"
     :checkAll="!checkRemain">
     </todo-item>

   </div>

      <div class="flex space-x-4">
       <todo-check-all></todo-check-all>
      <todo-items-remaining></todo-items-remaining>
     </div>
    
     

    <div class="flex space-x-8">
      <todo-filtered></todo-filtered>
      <todo-clear-completed></todo-clear-completed>
     </div>
 </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoItemsRemaining from './TodoItemsRemaining'
import TodoCheckAll from './TodoCheckAll' 
import TodoFiltered from './TodoFiltered.vue'
import TodoClearCompleted from './TodoClearCompleted'

export default {
  name: 'todo-list',
  components:{
    TodoItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted,
  },

  data(){
      return{
          newTodo:'',
          idForTodo:3,
         
      }
  },
  
  computed:{
  
  checkRemain() {
   return this.$store.getters.checkRemain
   },
  todosFiltered() {
      
      return this.$store.getters.todosFiltered
    },
    
  },
  
     methods:
    {
      addTodo(){
        //  console.log($event)
        if(this.newTodo.trim().length==0){
          return;
        }
        this.$store.dispatch('addTodo',{
          id:this.idForTodo,
            title:this.newTodo,
                 
          })

          this.newTodo=''
          this.idForTodo++
          },
          } 
  }
</script>

<style>
.completed {
    text-decoration: line-through;
    color:green !important;
  }
</style>
