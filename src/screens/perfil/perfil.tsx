import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./style"
import { Ionicons } from "@expo/vector-icons"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


export const Perfil = () => {

    return(
        <View style={styles.container}>
                <View style={styles.cardSobre}>
                    
                    <View style={styles.cardInfos}>
                        <View style={styles.iconPerfil}>           
                            <Ionicons name="person" size={50} color="#EC7FA9" />
                        </View>

                        <View style={styles.iconInfos}>
                            <Text style={styles.textInfo}>
                                Olá, Wladimir
                            </Text>

                        </View>
                    </View>
                </View>

            <View style={styles.cardInformacoes}>
                <Text style={styles.tituloInformacoes}>
                    Configurações
                </Text>

                <View style={styles.cardConfig}>
                    <View style={styles.cardCadastro}>
                        <View style={styles.imageCadastro}>
                            <AntDesign name="idcard" size={24} color="black" />
                        </View>

                        <View style={styles.cardTexts}>
                            <Text style={styles.titleCadastro}>
                                Cadastro
                            </Text>

                            <Text style={styles.textCadastro}>
                                Edite seus dados pessoais.
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.setaCadastro}>
                            <AntDesign name="right" size={15} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Quebra de Linha */}

                    <View style={styles.line}>

                    </View>

                    {/* Fim da quebra */}

                    <View style={styles.cardCadastro}>
                        <View style={styles.imageCadastro}>
                            <Ionicons name="options-outline" size={24} color="black" />
                        </View>

                        <View style={styles.cardTexts}>
                            <Text style={styles.titleCadastro}>
                                Preferências
                            </Text>

                            <Text style={styles.textCadastro}>
                                Personalize seu aplicativo.
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.setaCadastro}>
                            <AntDesign name="right" size={15} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Quebra de Linha */}

                    <View style={styles.line}>

                    </View>

                    {/* Fim da quebra */}


                </View>
            </View>

        </View>
    )
}