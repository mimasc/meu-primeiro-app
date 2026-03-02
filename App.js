import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Mirella Mascarenhas",
    curso: "Ciência da Computação - 3 semestre",
    frase: "Carpe Diem",
    avatar: "https://cdn.britannica.com/52/243652-050-FEE0A5E4/Actor-Adam-Sandler-2019.jpg",
    links: "https://www.linkedin.com/in/mirella-mascarenhas/", "https://github.com/mimasc"
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Stats */}
        <Text style={styles.curso}>👥 {usuario.curso} curso</Text>
       {/* frase */}
      <Text style={styles.frase}>{usuario.frase}</Text>
      {/* Links */}
      <Text style={styles.links}>{usuario.links}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a', /*erro aqui???*/
    padding: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 16,
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 3,
  },
  curso: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  frase: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  links: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 13,
  }
});
