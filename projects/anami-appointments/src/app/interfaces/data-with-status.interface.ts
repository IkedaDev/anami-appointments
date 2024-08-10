export interface DataWithStatus<T> {
    item?: T;
    hasError: boolean;
    isLoading: boolean;
    isLoad: boolean;
}