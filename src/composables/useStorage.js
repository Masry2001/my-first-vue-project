import { ref, watch } from "vue";

export function useStorage(key, defaultValue = null) {

  let storedValue = ref(read() || defaultValue);

  if (defaultValue) {
    write(defaultValue);
  }

  watch(storedValue, (newValue) => {
    write(newValue)
  });


  function write(newValue) {
    if (newValue === '' || newValue === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  };

  function read() {
    return JSON.parse(localStorage.getItem(key));
  };

  return storedValue;
}
