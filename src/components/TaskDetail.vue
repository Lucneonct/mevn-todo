<template>
  <h1 class="p-4 font-semibold text-xl text-amber-900">Task Detail:</h1>
  <form @submit.prevent="handleUpdate()">
    <div class="flex gap-2 p-4 flex-col">
      <input v-model="task.title"
        class="text-center p-3 bg-white bg-opacity-50 rounded-md focus:bg-opacity-80 focus:outline-none">
      <textarea rows="3" v-model="task.description"
        class="text-center p-3 bg-white bg-opacity-50 rounded-md focus:bg-opacity-80 focus:outline-none"></textarea>
      <input type="checkbox" id="completed" v-model="task.done" class="hidden" />
      <label for="completed" class="block p-2 rounded-md text-white text-center hover:cursor-pointer"
        :class='[task.done ? "bg-green-400  hover:bg-green-500" : "bg-red-400 hover:bg-red-500",]'>{{
          task.done ? "Completed" : "Incompleted"
        }}</label>

      <hr class="border-b-0.5 border-amber-900 my-6" />
      <div class="flex gap-2">
        <button class="p-2 text-white w-full bg-green-500 hover:bg-green-600 rounded-md">Update</button>
        <button @click.prevent="handleDelete()" class="p-2 text-white  bg-red-500 hover:bg-red-800 w-full rounded-md">Delete</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getTask, updateTask, deleteTask } from '@/services/TaskService'
import { ITask } from '@/interfaces/Task';


export default defineComponent({
  data() {
    return {
      task: {
        title: '',
        description: '',
        done: false,
        _id: ''
      } as ITask
    }
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.task = res.data;
    },
    async handleUpdate() {
      const res = await updateTask(this.task);
      this.task = res.data;
      this.$router.push({
        name: 'tasks'
      })
    },
    async handleDelete() {
      await deleteTask(this.task._id);
      this.$router.push({
        name: 'tasks'
      })
    }
  },
  mounted() {
    const { id } = this.$route.params

    if (typeof id === "string") {
      this.loadTask(id)
    }
  }
})
</script>