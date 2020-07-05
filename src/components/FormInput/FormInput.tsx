import React, {ReactNode} from "react";

interface IFormInputProps {
    field,
    meta,
    children: React.ReactElement,
}

export default function ({field, meta, children}: IFormInputProps) {
    return (
        <>
            {{
                ...children,
                props: {...children.props, ...field}
            }}
            {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
            )}
        </>
    )
}
