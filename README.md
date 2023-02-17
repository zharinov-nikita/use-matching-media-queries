#### Installation

```
npm i use-matching-media-queries
```


#### Using

```ts
import React from 'react'
import { useMatchingMediaQueries } from 'matching-media-queries.hook'

const ComponentForSmallDevice = () => {
  const isSmallDevice = useMatchingMediaQueries('(min-width: 576px)')
  return <>{isSmallDevice && <div>Hello - ComponentForSmallDevice</div>}</>
}

const ComponentForMediumDevice = () => {
  const isMediumDevice = useMatchingMediaQueries('(min-width: 768px)')
  return <>{isMediumDevice && <div>Hello - ComponentForMediumDevice</div>}</>
}

const ComponentForLargeDevice = () => {
  const isLargeDevice = useMatchingMediaQueries('(min-width: 992px)')
  return <>{isLargeDevice && <div>Hello - ComponentForLargeDevice</div>}</>
}

export const App = () => {
  return (
    <>
      <ComponentForSmallDevice />
      <ComponentForMediumDevice />
      <ComponentForLargeDevice />
    </>
  )
}
```

#### Media queries

In the hook as an argument, you can pass the string to according to the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).