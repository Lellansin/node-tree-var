# node-tree-view

Show javascript JSON and Array structure with tree view.

```javascript
var tree = require('../');

var obj = {
  name: 'Alan',
  age: 18,
  class: '2-B',
  lesson: {
    English: {
      teacher: 'Max well',
      score: 'A'
    },
    Math: {
      teacher: 'Max well',
      score: 'B'
    }
  },
  friends: [{
    name: 'Bob',
    age: 19
  }, {
    name: 'Alice',
    age: 19
  }]
};

var content = tree(obj, function(value, key) {
  if (value > 10) {
    return key + ' = ' + (value + 10);
  }
});

console.log(content);
```

```
├── name : Alan
├── age = 28
├── class : 2-B
├─┬ lesson
│ ├─┬ English
│ │ ├── teacher : Max well
│ │ └── score : A
│ └─┬ Math
│   ├── teacher : Max well
│   └── score : B
└─┬ friends
  ├─┬ 0
  │ ├── name : Bob
  │ └── age = 29
  └─┬ 1
    ├── name : Alice
    └── age = 29
```