type Chainable<O = {}> = {
    option<T extends string, U extends any>(key: T, value: U): Chainable<O & { [K in T]: U }>;
    get(): O;
  };
  

declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
