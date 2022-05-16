# rez-utils

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/rez-list.svg)](https://www.npmjs.com/package/rez-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rez-utils
```

## Usage
### RezList
```jsx
import React, { Component } from 'react'

import {RezList} from 'rez-utils'
import 'rez-utils/dist/index.css'

class Example extends Component {
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
  render() {
    return <RezList columns={columns} data={data}/>
  }
}
```

### RezForm
```jsx
import React, { Component } from 'react'

import {RezForm} from 'rez-utils'
import 'rez-utils/dist/index.css'

class Example extends Component {

  render() {
    return <RezForm data={data}/>
  }
}
```

## License

MIT © [](https://github.com/)
