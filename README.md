# Browser pathname cause stream

<div align="center">
<img src="https://img.shields.io/travis/whatsup/browser-pathname" alt="travis" />
<img src="https://img.shields.io/codecov/c/github/whatsup/browser-pathname" alt="codecov" />
<img src="https://img.shields.io/github/languages/top/whatsup/browser-pathname" alt="language" />
<img src="https://img.shields.io/npm/l/@whatsup-js/browser-pathname" alt="license" />  
</div>

## Install

```bash
npm i @whatsup-js/browser-pathname
```

## Usage

```tsx
import { fractal } from 'whatsup'
import { render } from '@whatsup-js/jsx'
import { pathname, redirect } from '@whatsup-js/browser-pathname'

const app = fractal(function* () {
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

render(app)
```
