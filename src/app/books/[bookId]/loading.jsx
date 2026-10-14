const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center">
            <h1>Loading Data....</h1>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default LoadingPage;