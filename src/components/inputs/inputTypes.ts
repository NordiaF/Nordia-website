export type TInputProps = {
    name: string;
    placeholder: string;
    label?: string;
    error?: string | undefined | false;
    value: string | undefined | number;
    type?: string;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    disabled?: boolean;
    required?: boolean;
  }
  