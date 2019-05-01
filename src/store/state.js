let defaultCtiy = '上海'
try {
  if (localStorage.city) {
    defaultCtiy = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCtiy
}
