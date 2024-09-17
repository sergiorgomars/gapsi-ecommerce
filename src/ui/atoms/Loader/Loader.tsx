import { LoaderProps } from "./Loader.proptypes";
import styles from "./Loader.styles.module.scss";

export default function Loader( { text, imgSrc } : LoaderProps) {
    return (
        <div className={styles.container}>
            {imgSrc ?
                <img src={imgSrc} alt="" />
            :
                <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            }
            <span>{text}</span>
        </div>
    )
}