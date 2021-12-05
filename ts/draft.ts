type Permutation<T, U = T> = [T] extends [never]
    ? []
    : T extends T
        ? [T, ...Permutation<Exclude<U, T>>]
        : never;

type perm = Permutation<'A' | 'B' | 'C'>;

type loopUnion<Union extends string, Item extends string = Union> = Item extends Item ? `loop ${Item}` : never;
type result = loopUnion<"A" | "B" | "C">; // "loop A" | "loop B" | "loop C" 

type Length<T extends string, R extends string[] = []> = T extends `${infer A}${infer B}`
    ? Length<B, [...R, A]>
    : R['length'];

type a = Length<'str'>

type Flatten<T extends any[]> = T extends [infer A, ...infer B]
    ? [...A extends any[] ? Flatten<A> : [A], ...Flatten<B>]
    : T;
type flatten = Flatten<[ ]> // [1, 2, 3, 4, 5]

type Test = { id: '1' }
type AppendToObject<T extends Record<string, any>, P extends string, V extends any> = {
    [K in keyof (T & { [K1 in P]: V })]: { [K1 in K]: T[K] } extends T ? T[K] : V;
}
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

type Absolute<T extends number> =  `${T}` extends `-${infer Rest}`
    ? `${Rest}`
    : `${T}`;
type Result = Absolute<-100>; // expected to be "100"
