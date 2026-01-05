<!-- import { defineComponent } from 'vue'

const  = defineComponent({
    name: '',
    props: {
        
    },
    setup(props) {
        
    }
})

export default  -->

<script setup>
const props = defineProps(["pendingTasks"]);
</script>

<template>
  <header>
    <h1>My Tasks</h1>
    <p>You have {{ pendingTasks }} pending tasks</p>
  </header>
</template>
