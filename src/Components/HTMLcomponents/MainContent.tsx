import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

function MainComponent({ title, children }: { title: string, children: JSX.Element }): JSX.Element {
    let { request }: any = useLoaderData();
    return (
        <>
            <h2>{title}</h2>
            <Suspense fallback={<>Loading...</>}>
                <Await
                    resolve={request}
                    errorElement={<>Error</>}
                >
                    {children}
                </Await>
            </Suspense>
        </>
    );
}

export default MainComponent;