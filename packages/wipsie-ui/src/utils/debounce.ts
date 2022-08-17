export default function debounce(
  func: any,
  wait: number,
  immediate: boolean = false
) {
  var timeout;
  return function (this: any, ...arg: any[]) {
    var context = this;
    // var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, arg);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, arg);
  };
}
