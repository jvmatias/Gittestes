import Card from "../componentsPage/Card"

const FirstTest = () => {
  return (
    <div className="w-screen min-h-screen bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-white p-2 lg:p-4 gap-2 lg:gap-4">

    <Card 
    cardImg="https://community.revelo.com.br/content/images/size/w1000/2024/11/-----REVELO-BLOG----Gerenciando-temas-com-Custom-Hooks--React-Context-API-e-Typescript-em-uma-aplicac-a-o-React-Native.png"
    title="Gerenciando temas com Custom Hooks, React Context API e TypeScript em uma nova aplicacao React Native"
    description=" Luísa Barros. React Native é um framework JavaScript utilizado principalmente na construção de aplicações cross-platform para dispositivos móveis. O desenvolvimento de interfaces que captam a atenção do usuário envolve muitas variáveis, e uma delas é o conjunto de estilos que irá compor essa interface.  Nesse artigo, iremos detalhar a importância"
    avatarImg="https://community.revelo.com.br/content/images/size/w100/2022/09/AVATAR---Community-A--1-.png"
    />

    <Card 
    cardImg="https://community.revelo.com.br/content/images/size/w1000/2024/11/-----BLOG-COMMUNITY-BR---Como-aplicar-o-princi-pio-da-infraestrutura-imuta-vel-em-um-ambiente-DevOps.png"
    title="Como aplicar o princípio da infraestrutura imutável em um ambiente DevOps"
    description="A infraestrutura imutável é uma abordagem que visa tornar os componentes de infraestrutura inalteráveis, ou seja, que não podem ser modificados depois de implantados. Isso significa que, em vez de atualizar ou corrigir os servidores, containers ou outros recursos em execução, eles são substituídos por novas versões sempre que houver"
    avatarImg="https://community.revelo.com.br/content/images/size/w100/2023/08/WhatsApp-Image-2023-08-03-at-13.57.47.jpeg"
    />

    <Card
    cardImg="https://community.revelo.com.br/content/images/size/w1000/2024/11/-----BLOG-COMMUNITY-BR---Guia-Avanc-ado-de-Google-Cloud-Platform.png"
    title="Guia Avançado de Google Cloud Platform"
    description="Caro leitor ávido por explorar as profundezas do Google Cloud Platform até agora exploramos apenas os fundamentos dessa plataforma poderosa. No entanto, chegou a hora de subir um degrau e mergulhar no mundo avançado do GCP. Este é o terceiro e último capítulo de nossa série, onde vamos desvendar as"
    avatarImg="https://www.gravatar.com/avatar/e1b1c8de57cf99a0a2d7ae7eca19965c?s=250&d=mm&r=x"
    />

    <Card 
    cardImg="https://community.revelo.com.br/content/images/size/w1000/2024/11/-----BLOG-COMMUNITY-BR---Tutorial_-Construindo-um-Modelo-de-Reconhecimento-de-Di-gitos-Manuscritos-com-TensorFlow.png"
    title="Tutorial: Construindo um Modelo de Reconhecimento de Dígitos Manuscritos com TensorFlow"
    description=" Raimundo Neto Barros. Redes Neurais Convolucionais (CNNs), também conhecidas como ConvNets ou Convolutional Neural Networks, são um tipo de arquitetura de rede neural projetada especialmente para tarefas de processamento de imagens e reconhecimento de padrões. As CNNs têm sido uma parte essencial do avanço da inteligência artificial em campos como"
    avatarImg="https://community.revelo.com.br/content/images/size/w100/2022/09/AVATAR---Community-A--1-.png"
    />
    </div>
  )
}

export default FirstTest