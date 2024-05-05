function useId() {
    let id = Math.floor(Math.random() * 1000000000).toString();
    return id;
}

export default useId;