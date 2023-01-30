<template>
  <li :class="[loading ? 'opacity-20' : 'opacity-100']"
    class="item group items-center relative bg-amber-100 gap-3 bg-opacity-0 px-4 py-1 hover:bg-opacity-95 flex justify-between transition-all duration-100">

    <label v-on:click.prevent="checkTask()"
      class="p-2 group-hover:opacity-100 md:opacity-0 checkbox-container flex items-center justify-base text-center grow-0">
      <input type="checkbox" :checked="task.done" name="" id="" class="grow-0 border-transparent ring-red-800">
      <span class="checkmark"></span>
    </label>
    <p :class="[task.done && 'line-through']" class="w-full">
      {{ task.title }}
    </p>
    <button v-on:click.prevent="deteleTask()" class="group text-red-500 md:text-transparent opacity-30 group-hover:text-red-500 hover:opacity-100 transition-all duration-100 text-lg py-1.5 px-3 rounded-full hover:bg-gray-600 hover:bg-opacity-10">
      <FontAwesomeIcon icon="fa-regular fa-trash-alt" />
    </button>
  </li>
</template>

<style>
/* Customize the label (the container) */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid rgba(133, 69, 23, 0.5);
  top: 30%;
  border-radius: 4px;
}

/* On mouse-over, add a grey background color */
.checkbox-container:hover input~.checkmark {
  border: 2px solid rgba(133, 69, 23, 1);
  background-color: rgba(133, 69, 23, 0.1);
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked~.checkmark {
  background-color: #854517;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked~.checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { deleteTask, updateTask } from '@/services/TaskService';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    onDelete: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      task: {
        title: this.$props.title,
        id: this.$props.id,
        done: this.$props.done
      },
      loading: false
    }
  },
  methods: {
    async checkTask() {
      if (!this.loading) {
        this.loading = true
        const { data: { done } } = await updateTask({
          _id: this.id,
          done: !this.task.done
        })

        this.loading = false
        this.task.done = done
      }
    },
    async deteleTask() {      
      if (!this.loading) {
        await deleteTask(this.task.id)
        this.$props.onDelete()
      }      
    }
  },
  components: {
    FontAwesomeIcon
  }
})
</script>