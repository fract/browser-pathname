# Browser pathname computed stream

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
import { fractal } from '@fract/core'
import { pathname, redirect } from '@fract/browser-pathname'
import { render } from '@fract/jsx'

const App = fractal(function* () {
    while (true) {
        switch (yield* pathname) {
            case '/':
                yield <a onClick={() => redirect('/test')}>Go to test page</a>
                continue
            case '/test':
                yield <a onClick={() => redirect('/')}>Go to home page</a>
                continue
        }
    }
})

render(new App(), document.getElementById('app'))
```
