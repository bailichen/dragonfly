import Ripple from './ripple/ripple.js';
import Theme from './theme/theme.js'
import focus from './focus/input-focus.js'

export default {
    install(Vue, options) {
        Vue.directive('ripple', Ripple);
        Vue.directive('theme', Theme);
        Vue.directive('focus', focus);
    }
}
