import Loader from "react-loader-spinner";
const LoaderComp = () =>{
    const style={position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"};
    return(
        <Loader
        type="Grid"
        color="rgb(51,51,51)"
        height={70}
        width={70}
        timeout={5000}
        style={style}
        />
    );
}
export default LoaderComp;