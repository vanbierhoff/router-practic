export type VModule = [
    template: string | undefined,
    component: new (...args: any[]) => any,
    path: string,
    selector: string
];

