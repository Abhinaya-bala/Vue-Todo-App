<template>
  <div class="mt-4">
     <div class="flex mb-4 items-center">

         <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" v-model="completed" @change="doneEdit">
         <label class="ml-3">
              <span v-if="!edit" :class="{completed:completed}" class="block text-sm leading-5 font-medium text-gray-700">{{title}}</span>
              <input v-else  type="text" v-model="title" @keyup.enter="doneEdit" v-focus  @keyup.esc="cancelEdit" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker">
        </label>
         <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-purple border-purple hover:bg-green" @click="editTodo"> Edit </button>
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" @click="removeTodo(id)"> Remove </button>
     </div>
       
  </div>
</template>

<script>
export default {
    nmae:'todo-item',
    props:{
        todo:{
                type:Object,
                required:true,
        },
        
        checkAll:{
            type:Boolean,
            required:true,
        }

    },
    data(){
        return{
            'id':this.todo.id,
            'title':this.todo.title,
            'completed':this.todo.completed,
            'edit':this.edit,
            'beforeEditCache':'',
        }
    },
    watch:{
        checkAll(){
        this.completed=this.checkAll ? true : this.todo.completed
        }
    },
    directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
    methods:{
        removeTodo(id){
            this.$store.dispatch('deleteTodo',id)
 
},
         editTodo(){
            this.beforeEditCache=this.title
            this.edit=true
          },
           doneEdit(){
             if(this.title.trim()=='')
             {
        this.title=this.beforeEditCache;
          }
            this.edit=false;
            this.$store.dispatch('updateTodo',{
                     'id':this.id,
                    'title':this.title,
                    'completed':this.completed,
                    'edit':this.edit,
            })
           },
          cancelEdit(){
           this.title=this.beforeEditCache
           this.edit=false
          },
    }
    
}
</script>

<style >

</style>