# asyncEventDemo

## Repo notes

Sample repo for async event handlers. This sample has pure JS ES2018 async sample in html/file2.html (+ js/file2.js) and TypeScript sample that need to be build by TypeScript in html/file1.html (+ ts/file1.js that will be delivere by TypeScript compiler).

Both samples deliver same result in all latest browsers.

For IE11 Promise shim would be needed (sample).

```javascript
    <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js"></script>
    <script src="../ts/file1.js" async></script>
```

## My StackOverflow question link

https://stackoverflow.com/questions/48688136/how-to-correctly-implement-async-event-handlers-in-browser

## Current state

The current state how every browser handles the async function that is event handler is, that when first await of function returning Promise<T> is evaluated, next event handler is fired, and so on. The very same way as if awaited function would be defered via setTimeout() JS function.

 ## Wanted state

 "Wanted state" is expected flow of code where only after whole first event handler is executed, the next event handler kicks in (when no kind of stopPropagation was used).