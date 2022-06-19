//  5   -   Destruturando Props
import React from "react";

interface Props {
    name: string
}

const SecondComponent = (props: Props) => {
    return (
        <div>
            <p>Meu Segundo Componente</p>
            <p>O nome dele é { props.name }</p>
        </div>
    )
}

export default SecondComponent