import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BaseUrl } from '@/modules/matching/constants'

export const useCurrentCatStore = defineStore('currentCat', () => {
  const id = ref('')
  const imageUrl = ref('')
  const isImageLoading = ref(true)

    function reset() {
      id.value = '';
      imageUrl.value = ''
        isImageLoading.value = true;
    }
    function setImageLoading(isLoading: boolean) {
      isImageLoading.value = isLoading
    }
  function setId(newId: string) {
    if (newId === id.value) return
    id.value = newId
    imageUrl.value = `${BaseUrl}/${id.value}`
    isImageLoading.value = true
  }

  return { id, isImageLoading, imageUrl, setId, setImageLoading, reset }
})
