/**
 * @jest-environment jsdom
 */

import { stream } from '@fract/core'
import { Pathname } from '../src/pathname'

const pathname = new Pathname()
const iterator = stream(pathname)

it('initial pathname to be "/"', async () => {
    const { value } = await iterator.next()
    expect(value).toBe('/')
})

it('redirect to "/test"', async () => {
    pathname.redirect('/test')
    const { value } = await iterator.next()
    expect(value).toBe('/test')
})

it('should remove listener when destroy', async () => {
    iterator.return()
})
