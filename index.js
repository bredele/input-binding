/**
 * Module dependencies.
 */

var event = require('event');
/**
 * Expose 'Input Binding'
 */

module.exports = function(reactive) {
  var view = reactive;
  view.bind('data-input', function(el, name){
    event.bind(el, 'input', function(e){
       view.obj[name] = e.target.value;
       view.obj.emit('change ' + name);
    });
  });

};


