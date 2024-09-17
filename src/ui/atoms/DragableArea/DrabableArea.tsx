import { DragableAreaProps } from "./DrabableArea.proptypes";

export default function DragableArea( { children, onDrop } : DragableAreaProps){

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Necesario para permitir el drop
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        onDrop && onDrop(id)
    };
    
    return (
        <div onDragOver={handleDragOver} onDrop={handleDrop} >
            {children}
        </div>
    )
}