<template>
    <div class="flex space-x-4">
        <button class="flex-no-shrink p-2 border-1 rounded bg-purple-500 text-white border-purple hover:text-white hover:bg-teal" :class="{ active: filter == 'all' }"  @click="changeFilter('all')">All</button>
        <button class="flex-no-shrink p-2 border-1 rounded bg-purple-500 text-white border-purple hover:text-white hover:bg-teal"  :class="{ active: filter == 'active' }"  @click="changeFilter('active')">Active</button>
        <button class="flex-no-shrink p-2 border-1 rounded bg-purple-500 text-white border-purple hover:text-white hover:bg-teal" :class="{ active: filter == 'completed' }"  @click="changeFilter('completed')" >Completed</button>
      </div>

</template>


<script>
export default {
    name:'todo-filtered',
   computed:{
       filter(){
return this.$store.state.filter
       }

},
    methods:{
    changeFilter(filter){
        this.$store.dispatch('updateFilter',filter)
    }  
    }

}
</script>