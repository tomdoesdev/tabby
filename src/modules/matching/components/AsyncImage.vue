<script lang="ts" setup>
import {ref, watch} from "vue";

const props = defineProps<{
  src: string
}>()

const isLoading = ref(true);

watch(()=>props.src, ()=> {
  isLoading.value = true;
})

function handleImageLoaded() {
  isLoading.value = false;
}

</script>

<template>
  <div
      :class="{ 'animate-pulse': isLoading, 'bg-gray-300': isLoading }"
      class="h-96 w-96 flex justify-center"
  >
    <img
        :src="src"
        alt="So cute!"
        class="w-full h-full"
        @load="handleImageLoaded"
        v-show="isLoading === false"
    />
  </div>
</template>

<style scoped>

</style>