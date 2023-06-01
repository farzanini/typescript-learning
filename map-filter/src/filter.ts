export type Filter = <A, B>(f: (x: A) => B, arr: Array<A>) => A[];

const filter: Filter = (f, arr) => arr.filter(f);

filter((x) => (x > 3 ? true : false), [1, 2, 3, 4, 5]);
