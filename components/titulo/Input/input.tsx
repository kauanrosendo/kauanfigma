import { TextInputProps } from "react-native";
import { CampoTexto } from "./style";

type InputTextoProps = TextInputProps & {
    erro : boolean;
}

export default function InputTexto({erro,...rest} : InputTextoProps){
    return(
        <CampoTexto
           erro={erro}
           placeholderTextColor= {'#1500F7'}
           {...rest}
        />
    )
}

     



