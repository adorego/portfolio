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
            <svg height={98} width={98}>
                <polygon points='30,20 78,47 30,70' className={classes.triangle}
                 />
            </svg>
        </div>
    )
}

export default PlayButton;