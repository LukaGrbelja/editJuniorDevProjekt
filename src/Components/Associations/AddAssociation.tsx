import { useNavigate } from "react-router-dom";
import useId from "../HTMLcomponents/useId";
import FormElement from "../HTMLcomponents/Form/Form";
import axios from "axios";

const handleForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let id = useId();
    let data: any = {
        id: id
    };
    for (const iterator of formData.keys()) {
        data = { ...data, [iterator]: formData.get(iterator) };
    }

    axios.post("http://localhost:3000/associations", data);
}

function AddAssociation() {
    const navigate = useNavigate();

    const onSubmit = (e: any) => {
        handleForm(e);
        navigate(-1);
    }

    return (
        <FormElement onSubmit={onSubmit}>
            <FormElement.Input
                dodatneInformacije={{
                    name: "name",
                    text: "Ime",
                    type: "text",
                    minLength: 3
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "location",
                    text: "Grad",
                    type: "text",
                    minLength: 3
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "address",
                    text: "Adresa",
                    type: "text",
                    minLength: 3
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "email",
                    text: "E-mail",
                    type: "email",
                    pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}",
                    minLength: 5,
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    type: "submit",
                    value: "Posalji"
                }}
            />
        </FormElement>
    );
}

const addAssociationRoute: route = {
    path: "/associations/add/",
    element: <AddAssociation />,
    children: []
}

export default addAssociationRoute;