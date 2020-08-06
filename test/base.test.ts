/**
 * @jest-environment jsdom
 */

import { live } from '@fract/core'
import { Pathname, redirect } from '../src/pathname'

let promise = live(Pathname)

it('initial pathname to be "/"', async () => {
    const frame = await promise
    promise = frame.next
    expect(frame.data).toBe('/')
})

it('redirect to "/test"', async () => {
    redirect('/test')
    const frame = await promise
    expect(frame.data).toBe('/test')
})
