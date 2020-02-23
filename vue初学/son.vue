//子组件部分 son.vue  

<template>
    <div>
        <slot :todo="todo"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            todo:[10,20,30,40,50,60,70]
        }
    },
    components:{
        
    }
}
</script>

<style>

</style>


    