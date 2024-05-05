import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

function MainComponent({ title, children }: { title: string, children: Array<JSX.Element> }): JSX.Element {
    let { request }: any = useLoaderData();
    console.log(request);
    return (
        <>
            <h2>{title}</h2>
            {children[0]}
            <Suspense fallback={<>Loading...</>}>
                <Await
                    resolve={request}
                    errorElement={<>Error</>}
                >
                    {children[1]}
                </Await>
            </Suspense>
        </>
    );
}

export default MainComponent;