import classes from "./MiniCardKey.module.css";

export type MiniCardKeyProps = {
    label:string;
}

const MiniCardKey = (props:MiniCardKeyProps) =>{
    return(
        <div className={classes.container}>
            <label className={classes.label}>{props.label}</label>
        </div>
    )
}

export default MiniCardKey;