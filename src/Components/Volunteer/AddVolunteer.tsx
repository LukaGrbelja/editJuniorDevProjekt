import axios from "axios";
import FormElement from "../HTMLcomponents/Form/Form";
import { useNavigate } from "react-router-dom";
import useId from "../HTMLcomponents/useId";

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
    data = { ...data, activities: formData.getAll("activities") }

    axios.post("http://localhost:3000/volunteers", data);
}

function AddVolunteer() {
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
                    name: "surname",
                    text: "Prezime",
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
                    name: "age",
                    text: "Godine",
                    type: "number"
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "description",
                    text: "O meni",
                    type: "text",
                    minLength: 10
                }}
            />
            <FormElement.Checkbox
                dodatneInformacije={{
                    name: "activities",
                    values: ["Ekologija", "Edukacija", "Prijevoz", "Razno"]
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    type: "submit",
                    value: "Pošalji"
                }}
            />
        </FormElement>
    );
}

const addVolunteerRoute: route = {
    path: "/volunteers/add/",
    element: <AddVolunteer />,
    children: []
}

export default addVolunteerRoute;