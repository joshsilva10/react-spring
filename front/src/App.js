import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import {useEffect, useState} from 'react'

function App() {
  const produto ={
    codigo: 0,
    nome:  '',
    marca: '',
    feito: false
  }

  const [objProduto,setObjProduto] = useState(produto)
  const [produtos, setProdutos] =useState([])
  const [btnCadastrar, setBtnCadastrar] = useState(true)

  // RECEBE AS INFORMACAOES DO BANCO //
  
    useEffect(()=>{
      fetch("http://localhost:8080/produtos")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido))
      
  },[])
  
   //INSERE NO MAUTIC

   const cadastrar = () =>{
    fetch(/*CAMINHO DA API MAUTIC*/"http://localhost:8080/produtos/cadastrar",{
      method:'post',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json()).then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        setProdutos([...produtos,retorno_convertido])
        alert('Produto Cadastrado com Sucesso')
        limparFormulario()
      }
      //console.log(retorno_convertido)
      
    } )
  }

  const limparFormulario = () =>{
    setObjProduto(produto)
    setBtnCadastrar(true)
  }
  

 
  const aoDigitar =(e) =>{
    //console.log(e)
    setObjProduto({...objProduto,[e.target.name]:e.target.value})
  
  }
 
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar = {cadastrar} obj = {objProduto} cancelar='{limparFormulario}' remover = '{remover}' alterar ='{alterar}'/>
      <Tabela vetor = {produtos} selecionar='{selecionarProduto}' selecionarFeito='{selecionarFeito}'/*marcado = {marcado} tdMarcado={tdMarcado}*//>
    </div>
  );
}

export default App;
