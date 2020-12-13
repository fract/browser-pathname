import { computed, Context } from '@fract/core'

export const pathname = computed(function* (ctx: Context) {
    const listener = () => ctx.update()

    window.addEventListener('popstate', listener)

    try {
        while (true) {
            yield window.location.pathname
        }
    } finally {
        window.removeEventListener('popstate', listener)
    }
})
