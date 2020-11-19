<template>

<div class="text-red-600 font-medium">{{ remain }} Items left</div>

</template>


<script>
export default {
    name:'todo-remaining',
    computed:{
        remain(){
            return this.$store.getters.remain
        }
    }
   
}
</script>