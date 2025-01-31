import React from 'react';
import style from './Botao.module.scss';

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style.botao}
    >
      {children}
    </button>
  )
}

export default Botao;





// type buttonProps = {
//     type?: "submit" | "reset" ,
//     title: string,
//     click?: () => void
// }



// function Botao({type, title, click}:buttonProps){
    
//     return (
//             <button className = {style.botao} type={type} onClick={click}>
//             {title}

//         </button>
//     )
    
// }

// export default Botao;

// const estaAtivo = true; //Aqui podemos usar um boleano para definir se o botão está ativo ou não, se estiver ativo a cor do texto será branco, se não será roxo

// const corDoBotao = "red"; //Aqui podemos usar a variável corDoBotao para definir a cor do botão

// const backgroundColor = "red"; --Aqui podemos usar a variável backgroundColor para definir a cor do botão

// return (
//     <button style={{ backgroundColor, color: estaAtivo ? "white" : "purple" }} type="submit">
//         Botão
//     </button>
// ) --Aqui podemos usar a variável backgroundColor para definir a cor do botão e a variável estaAtivo para definir a cor do texto

// return (
//     <button style={{ backgroundColor: corDoBotao, color: estaAtivo ? "white" : "purple" }} type="submit">
//         Botão
//     </button>
// )