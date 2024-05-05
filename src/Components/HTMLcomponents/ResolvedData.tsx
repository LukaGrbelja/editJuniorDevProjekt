import { useAsyncValue } from "react-router-dom";

function ResolvedData({ Card }: { Card: (props: any) => JSX.Element }) {
    let resolvedData: any = useAsyncValue();
    return (
        <div>
            {resolvedData.map((el: any) => <Card key={el.id} data={el} />)}
        </div>
    );
}

export default ResolvedData;