export declare const useAsync: <T, E = string>(asyncFunction: () => Promise<T>, immediate?: boolean) => {
    execute: () => Promise<void>;
    status: "success" | "error" | "idle" | "pending";
    value: T;
    error: E;
};
