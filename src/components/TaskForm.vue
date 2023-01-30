<template>
  <form @submit.prevent="saveTask()">
    <div class="flex gap-2 p-4 flex-col">
      <input v-model="task.title" placeholder="Write a title"
        class="text-center p-3 bg-white bg-opacity-50 rounded-md focus:bg-opacity-80 focus:outline-none">
      <textarea rows="3" v-model="task.description" placeholder="Write a description"
        class="text-center p-3 bg-white bg-opacity-50 rounded-md focus:bg-opacity-80 focus:outline-none"></textarea>
      <div class="flex gap-2">
        <button class="p-2 text-white w-full bg-green-500 hover:bg-green-600 rounded-md">Add</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ITask } from '../interfaces/Task'
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {
        title: "",
        description: ""
      } as ITask
    }
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task)
      console.log(res)
      this.$router.push({
        name: 'tasks'
      })
    }
  }
})
</script>
