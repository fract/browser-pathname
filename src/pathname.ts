import { Fractal, fraction } from '@fract/core'

export class Pathname extends Fractal<string> {
    async *collector() {
        const value = fraction(window.location.pathname)
        const listener = () => value.set(window.location.pathname)

        window.addEventListener('popstate', listener)

        try {
            yield value as any // TODO: need fix
        } finally {
            window.removeEventListener('popstate', listener)
        }
    }

    redirect(pathname: string) {
        window.history.pushState(null, '', pathname)
        dispatchEvent(new PopStateEvent('popstate'))
    }
}
