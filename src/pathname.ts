import { fractal, tmp } from '@fract/core'

export const Pathname = fractal(async function* _Pathname() {
    while (true) {
        yield tmp(window.location.pathname)
        await new Promise((r) => {
            const listener = () => {
                window.removeEventListener('popstate', listener)
                r()
            }
            window.addEventListener('popstate', listener)
        })
    }
})

export function redirect(pathname: string) {
    window.history.pushState(null, '', pathname)
    dispatchEvent(new PopStateEvent('popstate'))
}
