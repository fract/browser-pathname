import { Computed, Context } from '@fract/core'

export class Pathname extends Computed<string> {
    *stream(ctx: Context) {
        const listener = () => ctx.update()

        window.addEventListener('popstate', listener)

        try {
            while (true) {
                yield window.location.pathname
            }
        } finally {
            window.removeEventListener('popstate', listener)
        }
    }

    redirect(pathname: string) {
        window.history.pushState(null, '', pathname)
        dispatchEvent(new PopStateEvent('popstate'))
    }
}
