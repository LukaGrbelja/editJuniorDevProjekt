import FormElement from "../HTMLcomponents/Form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useId from "../HTMLcomponents/useId";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const handleForm = (e: any, user: string) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    let id = useId();
    let data: any = {
        id: id,
        poster: user
    };
    for (const iterator of formData.keys()) {
        data = { ...data, [iterator]: formData.get(iterator) };
    }
    data = { ...data, volunteers: [] }

    axios.post("http://localhost:3000/activities", data);
}

function AddActivity() {
    const navigate = useNavigate();
    const { user }: any = useContext(UserContext);

    const onSubmit = (e: any) => {
        handleForm(e, user);
        navigate(-1);
    }

    return (
        <FormElement onSubmit={onSubmit}>
            <FormElement.Input
                dodatneInformacije={{
                    name: "title",
                    text: "Naslov",
                    type: "text",
                    minLength: 3
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "organisation",
                    text: "Organizacija",
                    type: "text"
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
                    name: "date",
                    text: "Datum",
                    type: "date",
                }}
            />
            <FormElement.Input
                dodatneInformacije={{
                    name: "description",
                    text: "Opis",
                    type: "text",
                    minLength: 10
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

const addActivityRoute: route = {
    path: "/activities/add/",
    element: <AddActivity />,
    children: []
}

export default addActivityRoute;