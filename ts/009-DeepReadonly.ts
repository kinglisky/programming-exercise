type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  type DeepReadonly<T> = {
      readonly [K in keyof T]: DeepReadonly<T[K]>
  }
  type Todo = DeepReadonly<X> // should be same as `Expected`

  const d: Todo = {
      x: {
          a: 1,
          b: 'hi',
      },
      y:'hey'
  }
