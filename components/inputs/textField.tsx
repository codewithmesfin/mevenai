


interface PROPS {
    placeholder?: string;
    label?: any;
    value?: string;
    type?: string;
    error?: string;
    success?: boolean;
    isTextArea?: boolean;
    rows?: number;
    onChange?: any;
    onKeyDown?: any
    isPasswordField?: boolean
    showPassword?: boolean
    onShowPassword?: any
    autoComplete?: string
    isRequired?: boolean
}

export default function TextField({
    label,
    isTextArea,
    placeholder,
    rows,
    type, value,
    error,
    onChange,
    onKeyDown,
    isPasswordField,
    showPassword,
    onShowPassword,
    autoComplete, isRequired = false
}: PROPS) {
    return <div>
        <label htmlFor={type} className="block text-sm/6 font-medium text-gray-900">
            {label}
        </label>
        <div className="mt-2">
            <input
                type={type}
                required={isRequired}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
                className={`px-3 ${error ? 'border-red-600 border' : 'border-0'} block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6`}
            />
        </div>
        <div>
            <small className="text-red-600 italic">{error}</small>
        </div>
    </div>
}