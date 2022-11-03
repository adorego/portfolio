import classes from './PlayButton.module.css';
export interface PlayButtonProps{
    containerStyle:{};
    polygonStyle?:{};
    identificationId:string;
    onClickHandler:(id:string) => void;

}
const PlayButton = (props:PlayButtonProps) => {
    return(
        <div onClick={() =>props.onClickHandler(props.identificationId)} className={classes.container} style={{...props.containerStyle}}>
            <svg height={48} width={48}>
                <polygon points='8,5 48,24 8,39' className={classes.triangle}
                 />
            </svg>
        </div>
    )
}

export default PlayButton;