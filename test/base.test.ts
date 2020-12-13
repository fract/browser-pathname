/**
 * @jest-environment jsdom
 */

import { watch } from '@fract/core'
import { Pathname } from '../src/pathname'
import { redirect } from '../src/utils'

const pathname = new Pathname()
const mock = jest.fn()
const dispose = watch(pathname, mock)

it('initial pathname to be "/"', () => {
    expect(mock).lastCalledWith('/')
})

it('redirect to "/test"', () => {
    redirect('/test')
    expect(mock).lastCalledWith('/test')
})

it('should remove listener when destroy', () => {
    dispose()
})
