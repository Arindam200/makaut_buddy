const LoadingSpinner = () => {

    return (
        <div className="w-full h-[500px] flex justify-center items-center">
            <div className="spinner animate-spin" style={{
                border: "7px solid rgba(0, 0, 0, 0.1)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                borderLeftColor: "hsl(0 0% 0%)",
            }}></div>
        </div >
    )
}
export default LoadingSpinner;