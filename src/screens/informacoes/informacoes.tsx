import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import BackButton from '@/components/backButton/backButton';
import { BottomTab } from '@/components/bottomTab/bottomTab';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '@/components/buttonDefault/CustomButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Logo = require('../../../assets/images/logoNew.png');


export const Informacoes = () => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <BackButton/>
                <Text style={styles.informacoesTitulo}>Seja um tutor responsável: Seu compromisso com uma vida feliz</Text>

                <Image source={Logo} style={styles.logo}/>

                <View style={styles.cardTop}>
                    <FontAwesome5 name="dog" size={45} color="black" />
                    <Text style={styles.informacoesTexto}>Adotar um animal é um ato de amor e generosidade, e nós estamos muito felizes com o seu interesse em dar um lar a um de nossos resgatados. Contudo, é fundamental que você esteja ciente das responsabilidades significativas que essa decisão envolve. Ao abrir seu coração e sua casa para um novo membro da família, você assume um compromisso de longo prazo com o bem-estar físico e emocional desse ser vivo.</Text>
                </View>

                <Text style={styles.subtitleTexto}>Esteja preparado para oferecer:</Text>

                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <FontAwesome6 name="clock" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Alimentação de qualidade e em horários adequados.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Ionicons name="water" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Água fresca e disponível o tempo todo.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <FontAwesome name="medkit" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Cuidados veterinários regulares, incluindo vacinação e vermifugação.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <AntDesign name="Safety" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Abrigo seguro e confortável, protegido de condições climáticas adversas.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <MaterialIcons name="query-stats" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Paciência e compreensão durante o período de adaptação.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <MaterialCommunityIcons name="dog-service" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Passeios diários e exercícios adequados à espécie e idade.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <FontAwesome5 name="hand-holding-heart" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Carinho, atenção e tempo de qualidade.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <FontAwesome5 name="bath" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Higiene regular, como banhos e escovação.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Entypo name="book" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Educação e socialização adequadas.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <FontAwesome6 name="clock-rotate-left" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Compromisso de Longo Prazo.
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <MaterialIcons name="attach-money" size={30} color="black" style={{ marginBottom: 10 }} />
                        <Text style={styles.cardTexto}>
                            Compromisso financeiro com os custos de manutenção e saúde.
                        </Text>
                    </View>


                </View>

            <View style={{alignItems: 'center',}}>
                <CustomButton
                    title="Avançar"
                    onPress={() => router.navigate('/stacks/home')}
                />   
            </View>

            </ScrollView>
        </View>

            /* este texto deve ser adiconado na proxima tela */
            /* <Text style={styles.informacoesTexto}>Lembre-se que a adoção é uma decisão séria e deve ser tomada com responsabilidade e planejamento. Ao preencher este formulário, você demonstra seu interesse em oferecer um lar amoroso e responsável. Estamos à disposição para esclarecer quaisquer dúvidas e auxiliá-lo nessa jornada. Acreditamos que juntos podemos proporcionar um futuro feliz e cheio de amor para este animal que tanto precisa.</Text>
             */
    )
}