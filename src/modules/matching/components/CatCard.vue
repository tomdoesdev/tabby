<template>
  <div>
    <AsyncImage :src="store.imageUrl"/>

    <div class="flex flex-grow justify-between">
      <button
        class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
      >
        Pass
      </button>
      <button
        @click="doMatch"
        class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-pink-300 text-black px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-pink-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
      >
        Match
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, } from 'vue'
import { useCurrentCatStore } from '@/modules/matching/stores/current-cat'
import { BaseUrl } from '@/modules/matching/constants'
import AsyncImage from "@/modules/matching/components/AsyncImage.vue";

const store = useCurrentCatStore()
const loadCat = async () => {
  try {
    const { data, status } = await axios.get<{ _id: string }>(`${BaseUrl}/cute?json=true`)
    if (status === axios.HttpStatusCode.Ok) {
      store.setId(data._id)
    }
  } catch (e) {
    console.error(e)
  }
}
const doMatch = async () => {
  store.reset()
  await loadCat()
}

onMounted(async () => {
  await loadCat()
})
</script>
