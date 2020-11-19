# Browser pathname fractal

<div align="center">
<img src="https://img.shields.io/travis/fract/browser-pathname" alt="travis" />
<img src="https://img.shields.io/codecov/c/github/fract/browser-pathname" alt="codecov" />
<img src="https://img.shields.io/github/languages/top/fract/browser-pathname" alt="language" />
<img src="https://img.shields.io/npm/l/@fract/browser-pathname" alt="license" />  
</div>

## Install

```bash
npm i @fract/browser-pathname
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { fractal } from '@fract/core'
import { Alive } from '@fract/react-alive'
import { Pathname, redirect } from '@fract/browser-pathname'

const App = fractal(async function* () {
    while (true) {
        switch (yield* Pathname) {
            case '/':
                yield <a onClick={() => redirect('/test')}>Go to test page</a>
                continue
            case '/test':
                yield <a onClick={() => redirect('/')}>Go to home page</a>
                continue
        }
    }
})

render(<Alive target={App} />, document.getElementById('app'))
```
