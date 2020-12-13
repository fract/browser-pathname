export function redirect(pathname: string) {
    window.history.pushState(null, '', pathname)
    dispatchEvent(new PopStateEvent('popstate'))
}
