type InputProps = {
    type: string
}

export const InputText: React.FC<InputProps> = ({type}) => {
    return(
        <input
            type={type} />
    )
}