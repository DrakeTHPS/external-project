export const auth = () => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));

    if (jwt && jwt.accessToken) {
        return {Authorization: "Bearer " + jwt.accessToken};
    } else {
        return {};
    }
}