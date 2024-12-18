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

    </div>
  )
}

export default FirstTest