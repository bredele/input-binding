
# input-binding

  A double data binding for Reactive

## Installation

    $ component install bredele/input-binding

## API
```js
var Emitter = require('emitter'),
    Input = require('input-binding');

var test = {
  inner : ''
};

//create model
Emitter(test);

var view = reactive(document.querySelector('.wrapper'), test);

Input(view);
```

## License

  MIT
