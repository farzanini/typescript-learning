export type FMap = <A, B>(f: (x: B) => A, arr: Array<B>) => A[];

const map: FMap = (f, arr) => arr.map(f);

map((x) => (x ? 1 : 2), [true, false, true]);
