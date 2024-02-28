export const GridConstants : IGridConstants = {
    singleSelection: 'single',
    multipleSelection: 'multiple',
    flexScroll: 'flex',
};

export interface IGridConstants {
    singleSelection: "single" | "multiple" | null | undefined,
    multipleSelection: "single" | "multiple" | null | undefined,
    flexScroll: string
};