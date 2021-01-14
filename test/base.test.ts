/**
 * @jest-environment jsdom
 */

import { whatsUp } from 'whatsup'
import { pathname } from '../src/pathname'
import { redirect } from '../src/utils'

const mock = jest.fn()
const dispose = whatsUp(pathname, mock)

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
