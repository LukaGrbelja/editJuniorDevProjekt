
import { Form } from "react-router-dom";
import useId from "../useId";

function FormElement({ children, onSubmit }: any) {
    return (
        <Form onSubmit={onSubmit}>
            {children}
        </Form>
    );
}

FormElement.Input = function (props: any) {
    let { name, text, type, minLength, pattern, value } = props.dodatneInformacije;

    return (
        <>
            <label htmlFor={name}>{text ? text + ":" : false}</label>
            <input type={type} minLength={minLength} pattern={pattern} name={name} id={name} value={value} required />
            <br />
        </>
    );
}

FormElement.Checkbox = function (props: any) {
    let { name, values } = props.dodatneInformacije;
    return (
        <>
            {
                values.map((value: string) =>
                    <span key={useId()}>
                        <input type="checkbox" name={name} id={value} value={value} />
                        <label htmlFor={value}>{value}</label>
                        <br />
                    </span>
                )
            }
        </>
    );
}

export default FormElement;