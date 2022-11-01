import classes from "./Button.module.css";

export interface ButtonInterface{
    isAvailable:boolean;
    label:string;
    onClickHandler?:any;
    additionalStyle:{};
    children?: React.ReactNode;
    animated:boolean;
}
const Button =({isAvailable, ...props}:ButtonInterface) => {
    
    const animatedButtonClass = props.animated ? `${classes["animated-button"]}` : '' ;
    
    if(isAvailable){
            return (
                <button onClick={props.onClickHandler} 
                className={`${classes["button-per"]} ${classes["button-app"]} ${animatedButtonClass}`} 
                style={props.additionalStyle}    >
                    {props.label}{props.children}
                </button>
               
                
            )
        }else{
            return(
                <button onClick={props.onClickHandler} 
                className={`${classes["button-per"]} ${classes["button-app"]} ${animatedButtonClass}`} 
                style={{...props.additionalStyle}} disabled >
                    {props.label}{props.children}
                </button>
                
            )
        }
    
    
}


export default Button;