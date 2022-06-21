export type Status = 'done' | 'pending' | 'late'

export type IHomework = {
    id: string
    title: string
    status: Status
    createdAt: string
    dueTo: string
    className: string
}
