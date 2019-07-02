const SrcollEnd = {
    inserted(el, binding, vnode) {
        const fn = binding.value;

        if (typeof fn !== 'function') {
            throw new Error('directive scroll-end must bind in a functon');
        } else {
            el.addEventListener(
                'scroll',
                function() {
                    if (el && el.scrollHeight - el.scrollTop - el.clientHeight < 10) {
                        fn();
                    }
                },
                { passive: true },
            );
        }
    },
};

export default SrcollEnd;
