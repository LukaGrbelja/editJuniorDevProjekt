import axios from "axios";
import { defer } from "react-router-dom";


const loader = (url: string) => {
    let request =
        axios.get(url)
            .then(response => response.data);
    return defer({ request });
}

export default loader;