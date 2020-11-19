<template>

<div class="flex mb-4 items-center" >
    <input type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" :checked="!checkRemain" @change="allChecked">
    <label class="ml-3">
         <span  class="block text-sm leading-5 font-medium text-gray-700">Check All</span>
    </label>
</div>

</template>


<script>
export default {
    name:'todo-check-all',
    computed:{
        checkRemain(){
            return this.$store.getters.checkRemain
        }
    },
    methods:{
    allChecked(){
        this.$store.dispatch('checkAll',event.target.checked)
         
    }    
    }

}
</script>