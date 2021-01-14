import { cause, Context } from 'whatsup'

export const pathname = cause(function* (ctx: Context) {
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
