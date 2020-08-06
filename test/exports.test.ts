import { Pathname, redirect } from '../src/index'
import { Pathname as _Pathname, redirect as _redirect } from '../src/pathname'

it('exports', () => {
    expect(Pathname).toBe(_Pathname)
    expect(redirect).toBe(_redirect)
})
