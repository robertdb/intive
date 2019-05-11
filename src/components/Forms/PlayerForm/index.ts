export * from './PlayerForm';
export * from './validation';

export interface MyFormValues {
    name: string;
    position: string;
    age: number | undefined
}

// The type of props MyForm receives
export interface MyFormProps {
    initialName?: string;
    initialPosition?: string;
    initialAge?: number | undefined,
    positions?: Array<Option>
}

interface Option {
    value: string,
    content: string
}

export interface OtherProps {
    positions?: Array<Option>
}
