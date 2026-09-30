import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
    label: string;
    name: string;
};

type InputProps = BaseProps &
    InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaProps = BaseProps &
    TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

/** Underline-only field, for use on the coloured Contact form panel. */
export default function FormField(props: InputProps | TextareaProps) {
    const { label, name } = props;
    const sharedClasses =
        "w-full border-0 border-b-2 border-ink/15 bg-transparent px-0 py-3 font-sans text-base text-ink placeholder:text-ink/40 focus:border-coral focus:outline-none";

    return (
        <div>
            <label
                htmlFor={name}
                className='block font-display text-xs font-semibold uppercase tracking-wide text-ink/50'
            >
                {label}
            </label>
            {props.as === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    rows={3}
                    className={`mt-1 resize-none ${sharedClasses}`}
                    {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    className={`mt-1 ${sharedClasses}`}
                    {...(props as InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
        </div>
    );
}
