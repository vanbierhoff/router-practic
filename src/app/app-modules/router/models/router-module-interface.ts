export interface RouterModuleInterface {
    path: string;
    deps?: [];
    selector: string;


    template?(): Promise<any>;

    component(): Promise<abstract new (...args: any[]) => any>;
}
