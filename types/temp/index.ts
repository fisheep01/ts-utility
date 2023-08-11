export type PickPartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

export type OmitPartial<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>