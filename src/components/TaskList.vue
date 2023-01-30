<template>
  <ul>
    <router-link v-for="task in tasks" :key="task._id" :to="{ name: 'task-detail', params: { id: task._id } }">
      <TaskListItem :title="task.title" :done="task.done" :id="task._id" :onDelete="() => loadTasks()" />
    </router-link>
  </ul>
</template>

<script lang="ts">
import { ITask } from '@/interfaces/Task';
import TaskListItem from '@/components/TaskListItem.vue'
import { getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      tasks: [] as ITask[]
    }
  },
  methods: {
    async loadTasks() {
      const res = await getTasks()
      this.tasks = res.data
    }
  },
  mounted() {
    this.loadTasks()
  },
  components: {
    TaskListItem
  }
})
</script>