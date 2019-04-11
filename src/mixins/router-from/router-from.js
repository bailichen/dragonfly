export default {
    data() {
        return {
            directiveRouterFrom: {}
        }
    },
    computed: {
        routerFrom() {
            let result = {};

            if (this.directiveRouterFrom.fullPath) {
                result = this.directiveRouterFrom;
            } else {
                let vParent = this.$parent;
                while (vParent && !result.fullPath) {
                    if (vParent.directiveRouterFrom.fullPath) {
                        result = vParent.directiveRouterFrom;
                        break;
                    } else {
                        vParent = vParent.$parent;
                    }
                }
            }

            return result
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.directiveRouterFrom = from;
        })
    }
}
