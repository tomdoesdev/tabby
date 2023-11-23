import { defineStore } from 'pinia'
import { ref } from 'vue'
import { BaseUrl } from '@/modules/matching/constants'

export const useCurrentCatStore = defineStore('currentCat', () => {
  const id = ref('')
  const imageUrl = ref('')

    function reset() {
      id.value = '';
      imageUrl.value = ''
    }
  function setId(newId: string) {
    if (newId === id.value) return
    id.value = newId
    imageUrl.value = `${BaseUrl}/${id.value}`
  }

  return { id,  imageUrl, setId,  reset }
})
