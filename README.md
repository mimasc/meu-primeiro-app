# aula de Cross-Platform Application Development


* instalar (caso necessário) no terminal
* Verifique se já tem instalado
node --version
npm --version

* Deve retornar v20.x ou superior
* Verificar instalação
java -version
javac -version

* Configuração essencial:
Instalar Android Studio
SDK Platform (Android 13+)
Android SDK Build-Tools
Criar AVD (Pixel 5 ou similar)

xcode-select --install
* clica em A

// settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

const nome = "FIAP"; // Não muda
let contador = 0;    // Pode mudar
// Antiga
function somar(a, b) {
  return a + b;
}

// Moderna (preferida em React)
const somar = (a, b) => a + b;

// Destructuring
const usuario = { nome: "Ana", idade: 22 };
const { nome, idade } = usuario;

# Template Strings
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
