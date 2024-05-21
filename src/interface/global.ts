export interface ModalProps {
    open: boolean,
    handleClose: () => void,
    item: any,
}

interface Header {
    title: string,
    value: string,
}

interface BodyItem {
    id: number
    [key:string]: any
}

export interface TableProps {
    headers: Header[],
    body: BodyItem[],
    isLoading: boolean,
    action?: any[]
    editItem?: any,
}

export interface PaginationProps {
    totalCount: number,
    page: number,
    setParams: (value:number) => void,
}