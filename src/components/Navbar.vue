<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-amber-900 bg-opacity-90 flex items-center justify-between">
    <div class="px-6 py-4 text-xl font-bold text-amber-100">
      VueJS - Todo List
    </div>
    <ul class="flex">
      <router-link to="/">
        <li class="text-gray-200 px-6 py-4 text-2xl text-center hover:bg-amber-800 bg-opacity-75">
          <FontAwesomeIcon icon="fa-regular fa-rectangle-list" />
        </li>
      </router-link>
      <router-link to="/task/new">
        <li class="text-gray-200 px-6 py-4 text-2xl text-center hover:bg-amber-800 bg-opacity-75">
          <FontAwesomeIcon icon="fa-regular fa-plus-square" />
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faRectangleList, faHandPointRight, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlusSquare, faRectangleList, faHandPointRight, faTrashAlt)

export default defineComponent({
  name: 'NavBar',
  components: {
    FontAwesomeIcon
  }
})
</script>