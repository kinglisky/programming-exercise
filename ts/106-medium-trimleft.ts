type Space = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Space}${infer U}${Space}` ? TrimLeft<U> : S;
type t = TrimLeft<' aaaa '>;