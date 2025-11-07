import { ref, readonly } from 'vue';

export function useApi(serviceFunction) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const execute = async (...args) => {
    loading.value = true;
    error.value = null;

    try {
      const result = await serviceFunction(...args);
      data.value = result;
      return result;
    } catch (err) {
      error.value = err;
      
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    data.value = null;
    loading.value = false;
    error.value = null;
  };

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    execute,
    reset,
  };
}