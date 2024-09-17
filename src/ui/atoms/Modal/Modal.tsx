"use client"
import { useState, useEffect, useMemo } from "react";
import * as proptypes from "./Modal.proptypes";
import styles from "./Modal.styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons";


///On close es una funcion que se reemplza el cerrar modal desde fuera se controla desde fuera
export default function Modal({title, message, onClose } : proptypes.ModalProps) {

    const handleKeyDown = useMemo(() => (event: KeyboardEvent) => {
        event.preventDefault();
        if (event.key === 'Escape') onClose();
    }, [onClose])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (

        <div className={styles.container}>

            <div className={styles.content}>

                <div className={styles.modal_header}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.icon} onClick={onClose}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>

                <div className={styles.modal_message}>
                    <p>{message}</p>
                </div>

            </div>
        </div>

    );
}