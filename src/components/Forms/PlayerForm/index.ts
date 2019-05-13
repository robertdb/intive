export * from './PlayerForm';
export * from './validation';

export interface MyFormValues {
    name: string,
    position: string,
    age: string
}

// The type of props MyForm receives
export interface MyFormProps {
    initialName?: string,
    initialPosition?: string,
    initialAge?: string,
    positions?: Array<Option>,
    setFilterPlayers: (filters: MyFormValues) => void
}

interface Option {
    value: string,
    content: string
}

export interface OtherProps {
    positions?: Array<Option>,
    setFilterPlayers: (filters: MyFormValues) => void
}
