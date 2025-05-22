import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { router } from 'expo-router';
import BackButton from '@/components/backButton/backButton';

const Logo = require('../../../assets/images/logoNew.png');

interface ItemResponsabilidade {
    id: string;
    texto: string;
}


export const Informacoes = () => {

    const responsabilidades = [
        'Alimentação de qualidade e em horários adequados.',
        'Água fresca e disponível o tempo todo.',
        'Abrigo seguro e confortável, protegido de condições climáticas adversas.',
        'Cuidados veterinários regulares, incluindo vacinação e vermifugação.',
        'Passeios diários e exercícios adequados à espécie e idade.',
        'Higiene regular, como banhos e escovação.',
        'Carinho, atenção e tempo de qualidade.',
        'Paciência e compreensão durante o período de adaptação.',
        'Educação e socialização adequadas.',
        'Compromisso financeiro com os custos de manutenção e saúde.',
        'Compromisso de Longo Prazo.',
        'Segurança.',
    ];

    const renderItem = ({ item }: { item: ItemResponsabilidade }) => (
        <View>
            <Text style={styles.listaTexto}>• {item.texto}</Text>
        </View>
    );

    const ListHeader = () => (
        <>
            <BackButton/>
            <Text style={styles.informacoesTitulo}>Seja um tutor responsável: Seu compromisso com uma vida feliz</Text>

            <Image source={Logo} style={styles.logo}/>

            <Text style={styles.informacoesTexto}>Adotar um animal é um ato de amor e generosidade, e nós estamos muito felizes com o seu interesse em dar um lar a um de nossos resgatados. Contudo, é fundamental que você esteja ciente das responsabilidades significativas que essa decisão envolve. Ao abrir seu coração e sua casa para um novo membro da família, você assume um compromisso de longo prazo com o bem-estar físico e emocional desse ser vivo.</Text>

            <Text style={styles.subtitleTexto}>Esteja preparado para oferecer:</Text>
        </>
    );


    const ListFooter = () => (
        <TouchableOpacity onPress={() => router.navigate('/')} style={styles.button}>
            <Text style={styles.botaoAvancar}> Avançar </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={responsabilidades.map((resp, index) => ({ id: index.toString(), texto: resp }))}
                renderItem={renderItem}
                keyExtractor={(item: ItemResponsabilidade) => item.id}
                ListHeaderComponent={ListHeader}
                ListFooterComponent={ListFooter}
            />



            {/* este texto deve ser adiconado na proxima tela */}
            {/* <Text style={styles.informacoesTexto}>Lembre-se que a adoção é uma decisão séria e deve ser tomada com responsabilidade e planejamento. Ao preencher este formulário, você demonstra seu interesse em oferecer um lar amoroso e responsável. Estamos à disposição para esclarecer quaisquer dúvidas e auxiliá-lo nessa jornada. Acreditamos que juntos podemos proporcionar um futuro feliz e cheio de amor para este animal que tanto precisa.</Text>
             */}
        </View>
    )
}