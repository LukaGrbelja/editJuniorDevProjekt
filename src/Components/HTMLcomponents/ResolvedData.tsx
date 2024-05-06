import axios from "axios";
import { useEffect, useState } from "react";
import { useAsyncValue } from "react-router-dom";

function ResolvedData({ Card, filter }: { Card: (props: any) => JSX.Element, filter: any }): JSX.Element {
    let resolvedData = useAsyncValue() as Array<any>;
    const [state, setState] = useState(resolvedData);

    useEffect(() => {
        setState(prevState => prevState.filter(filter));
    }, []);

    const deleteElement = (id: string) => {
        axios.delete("http://localhost:3000/activities/" + id);
        setState(prevState => prevState.filter(element => element.id !== id));
    }

    return (
        <div>
            {state.map((el: any) => <Card key={el.id} data={el} deleteData={deleteElement} />)}
        </div>
    );
}

export default ResolvedData;