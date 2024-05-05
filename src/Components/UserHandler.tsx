import { SubmitFunction, redirect, useParams, useSubmit } from "react-router-dom";
import FormElement from "./HTMLcomponents/Form/Form";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const handleForm = (submit: SubmitFunction, logIn: any, action: string, e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let user: any = {};
    for (const iterator of formData.keys()) {
        user = { ...user, [iterator]: formData.get(iterator) };
    }

    if (action === "logIn") {
        logIn(user.username);
    }

    submit(e.currentTarget, {
        method: "POST"
    });
}

function UserHandler() {
    const { action } = useParams();
    const { logIn }: any = useContext(UserContext);
    const submit = useSubmit();

    const onSubmit = (e: any) => {
        handleForm(submit, logIn, action as string, e);
    }
    return (
        <FormElement onSubmit={onSubmit}>
            <FormElement.Input
                dodatneInformacije={{
                    name: "username",
                    text: "Username",
                    type: "text",
                    minLength: 3,
                    pattern: "[A-Za-z0-9]+",
                }}
            />

            <FormElement.Input
                dodatneInformacije={{
                    name: "password",
                    text: "Password",
                    type: "password",
                    minLength: 6,
                    pattern: "[A-Za-z0-9]+",
                }}
            />
            {action === "Register" ?
                <FormElement.Input
                    dodatneInformacije={{
                        name: "email",
                        text: "Email",
                        type: "email",
                        minLength: 5,
                        pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
                    }}
                /> :
                false
            }


            <FormElement.Input
                dodatneInformacije={{
                    name: "submit",
                    type: "submit",
                    value: action === "logIn" ? "Prijavi se" : "registriraj se",
                }}
            />
        </FormElement>
    );
}

const userHandlerRoute: route = {
    path: "/userHandler/:action",
    element: <UserHandler />,
    action: () => redirect("/"),
    children: []
}

export default userHandlerRoute;
