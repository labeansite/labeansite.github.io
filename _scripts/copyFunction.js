function copy(text) {
    navigator.clipboard.writeText(text)
    .catch((error) => {
        console.error("Could not copy text: ", error);
    });
}
