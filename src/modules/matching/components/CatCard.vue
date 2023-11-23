<template>
  <div>
    <div
      :class="{ 'animate-pulse': store.isImageLoading, 'bg-gray-300': store.isImageLoading }"
      class="h-96 w-96 flex justify-center"
    >
      <img
        :src="store.imageUrl"
        alt="So cute!"
        class="w-full h-full"
        @load="handleImageLoaded"
        v-show="!store.isImageLoading"
      />
    </div>
    <div class="flex flex-grow justify-between">
      <button
        :disabled="store.isImageLoading"
        :class="{ 'cursor-not-allowed': store.isImageLoading }"
        class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
      >
        Pass
      </button>
      <button
        @click="doMatch"
        :disabled="store.isImageLoading"
        :class="{ 'cursor-not-allowed': store.isImageLoading }"
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

const handleImageLoaded = () => {
  store.setImageLoading(false)
}

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
