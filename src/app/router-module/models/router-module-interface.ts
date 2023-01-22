export interface RouterModuleInterface {
    path?: string;
    deps?: [];
    templateUrl?: string;

    template?(): Promise<any>;

    component(): Promise<any>;
}
