import { Pathname, redirect } from '../src/index'
import { Pathname as _Pathname } from '../src/pathname'
import { redirect as _redirect } from '../src/utils'

it('exports', () => {
    expect(Pathname).toBe(_Pathname)
    expect(redirect).toBe(_redirect)
})
