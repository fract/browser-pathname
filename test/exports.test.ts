import { pathname, redirect } from '../src/index'
import { pathname as _pathname } from '../src/pathname'
import { redirect as _redirect } from '../src/utils'

it('exports', () => {
    expect(pathname).toBe(_pathname)
    expect(redirect).toBe(_redirect)
})
