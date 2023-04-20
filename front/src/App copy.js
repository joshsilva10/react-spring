import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import {useEffect, useState} from 'react'

// importando pacote mautic
//import Mautic from 'mautic-api'
//instanciando Mautic
//const baseUrl = 'http://mautic-instance/api'
//const auth= {
//  username: 'luiz',
//  password: 'shhhhhhhhhhhhhh!:x'
//}
//const client = new Mautic({
//  baseUrl: baseUrl,
//  auth: auth
//})


//const responseContactsListId = await client.post(baseUrl,auth)
/*
//CONTATOS

// Lisar contatos por Id
const responseContactsListId = await client.contacts.get(contactId)

// Sistar todos os contatos
const responseContactsListAll = await client.contacts.list()

// Listar contatos com busca
const responseContactsListSearch = await client.contacts.list({ search: 'exemple@exemple.com' })

// Criar contato
const responseContactsInsert = await client.contacts.create({
  firstname: 'Luiz',
  lastname: 'Freneda',
  email: 'luiz@freneda.com.br',
  owner: 1
})

// Deletar contato
const responseContactsDelete = await client.contacts.delete(contactId)

// Alterar contato
const responseContactsUpdate = await client.contacts.edit(contactId, {
  firstname: 'Luiz',
  lastname: 'Freneda',
  email: 'luiz@freneda.com.br',
  owner: 1
})

// Verifica se ja existe o Id, nao encontrando, insere na base, se nao, atualiza a base
const responseContactsUpdateOrInsert = await client.contacts.editOrCreate(contactId, {
  firstname: 'Luiz',
  lastname: 'Freneda',
  email: 'luiz@freneda.com.br',
  owner: 1
})

// Listar Nota do Contato
const responseContactsNotes = await client.contacts.getNotes(contactId)

// Listar Eventos ativos do Contato
const responseContactsActiveEvent = await client.contacts.getActivityEvents(contactId)

// Listar Campanha do Contatos
const responseContactsCoimpanies = await client.contacts.getCompanies(contactId)


// Listar segmentos do contato
const responseContactsSegments = await client.contacts.listSegments(contactId)


// para mais informações, vide documentação : https://github.com/FieldControl/mautic

*/



/*
 



 */












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
  //const [marcado, setMarcado] = useState()
  //const [tdMarcado, setTdMarcado] = useState([])
  
  //console.log(objProduto)



  // RECEBE AS INFORMACAOES DO BANCO //
  
    useEffect(()=>{
      fetch("http://localhost:8080/produtos")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido))
      
  },[])
  //console.log(produtos)






   //INSERE NO MAUTICO

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
 /*
  const limparFormulario = () =>{
    setObjProduto(produto)
    setBtnCadastrar(true)
  }

  //cadastro

  const cadastrar = () =>{
    fetch("http://192.168.3.167:8080/cadastrar",{
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



  //remover

  const remover = () =>{
    fetch("http://192.168.3.167:8080/remover/"+objProduto.codigo,{
      method:'delete',
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      },
      cache: 'default'
    }).then(retorno => retorno.json()).then(retorno_convertido =>{
      alert(retorno_convertido.mensagem)
      //copia vetor
      let vetorTemp = [...produtos]

      //indice
      let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.codigo
      })

      //remover produto
      vetorTemp.splice(indice,1)

     // atualizar produto

     setProdutos(vetorTemp)

     limparFormulario()

    } )
  }



  //alterar

  const alterar = () =>{
    fetch("http://192.168.3.167:8080/alterar",{
      method:'put',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json()).then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem)
      }else{
        alert('Produto Alterado com Sucesso')
        //copia vetor
        let vetorTemp = [...produtos]

        //indice
        let indice = vetorTemp.findIndex((p)=>{
        return p.codigo === objProduto.codigo
        })

        //alterar produto
        vetorTemp[indice] = objProduto

        // atualizar produto

        setProdutos(vetorTemp)

          limparFormulario()
          }
          //console.log(retorno_convertido)
      
    } )
  }

  const marcaFeito = () =>{
    fetch("http://192.168.3.167:8080/alterar",{
      method:'put',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      }
    }).then(retorno => retorno.json()).then(retorno_convertido =>{
      if(retorno_convertido.mensagem !== undefined){
        console.log(retorno_convertido.mensagem)
      }
      let vetorTemp = [...produtos]
    
      let indice = vetorTemp.findIndex((p)=>{
            return p.codigo === objProduto.codigo
            })

            //alterar produto
          vetorTemp[indice] = objProduto

        // atualizar produto

        setProdutos(vetorTemp)

          limparFormulario()
          
          //console.log(retorno_convertido)
      
  })
  }



  const selecionarProduto = (indice) =>{
      //console.log("antes",produtos[indice])
      //produtos[indice].feito=!produtos[indice].feito
      setObjProduto(produtos[indice])
      //console.log("depois",produtos[indice])
      //marcaFeito()
      setBtnCadastrar(false)
      //setMarcado(indice)
      //setTdMarcado(indice)
  }


  const selecionarFeito = (indice) =>{
    //console.log("antes",produtos[indice])
    produtos[indice].feito=!produtos[indice].feito
    setObjProduto(produtos[indice])
    //console.log("depois",produtos[indice])
    marcaFeito()
    setBtnCadastrar(false)
    //setMarcado(indice)
    //setTdMarcado(indice)
}


//<p>{JSON.stringify(objProduto)}</p> 

*/
  return (
    <div>
      
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar = {cadastrar} obj = {objProduto} cancelar='{limparFormulario}' remover = '{remover}' alterar ='{alterar}'/>
      <Tabela vetor = {produtos} selecionar='{selecionarProduto}' selecionarFeito='{selecionarFeito}'/*marcado = {marcado} tdMarcado={tdMarcado}*//>
    </div>
  );
}

export default App;
