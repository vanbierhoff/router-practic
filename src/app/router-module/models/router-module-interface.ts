export type Component = () => Promise<new (...args: []) => unknown>


export interface RouterModuleInterface {
    path?: string;
    deps?: [];
    templateUrl?: string;

    component(): Promise<any>;
}
