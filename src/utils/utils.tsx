
// Utility function to check if the browser is Safari
const isSafari = () => {
    return (
        /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent)
    );
};

export default isSafari;
