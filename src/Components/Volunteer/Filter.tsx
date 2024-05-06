function Filter({ filter, setFilter }: any) {
    return (
        <>
            <input type="radio" value={"Ekologija"} checked={filter === "Ekologija"} onChange={(e) => setFilter(e.target.value)} />Ekologija
            <input type="radio" value={"Edukacija"} checked={filter === "Edukacija"} onChange={(e) => setFilter(e.target.value)} />Edukacija
            <input type="radio" value={"Prijevoz"} checked={filter === "Prijevoz"} onChange={(e) => setFilter(e.target.value)} />Prijevoz
            <input type="radio" value={"Razno"} checked={filter === "Razno"} onChange={(e) => setFilter(e.target.value)} />Razno
            <input type="radio" value={""} checked={filter === ""} onChange={(e) => setFilter(e.target.value)} />Bez filtera
        </>
    );
}

export default Filter;