/**
 * @jest-environment jsdom
 */

import { watch } from '@fract/core'
import { Pathname } from '../src/pathname'

const pathname = new Pathname()
const mock = jest.fn()
const dispose = watch(pathname, mock)

it('initial pathname to be "/"', async () => {
    expect(mock).lastCalledWith('/')
})

it('redirect to "/test"', async () => {
    pathname.redirect('/test')
    expect(mock).lastCalledWith('/test')
})

it('should remove listener when destroy', async () => {
    dispose()
})
