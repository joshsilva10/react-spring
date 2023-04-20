function Tabela ({vetor,selecionar,selecionarFeito}){
    //console.log({marcado})
    //console.log(vetor)
    
    return(
        
        <table className='table'>
            <thead>
                <tr>
                     <th>#</th>
                     <th>Nome</th>
                     <th>Marca</th>
                     <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                   
                    vetor.map((obj, indice)=>(
                        
                        (<tr key={indice} /*className={`${ obj.feito ? "markdo" :""}`}*/>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button className="btn btn-success" onClick={()=>{selecionar(indice)}}>Selecionar</button></td>
                            <td><button className={`${ obj.feito ? "markdo" :""}`} onClick={()=>{selecionarFeito(indice)}}>{`${ obj.feito ? "Feito" :"Não Feito"}`}</button></td>
                        </tr>

                    )))
                }
            </tbody>
        </table>
        //style={{marcado} === true ? "color:red;" :""}    {`${ marcacao = tdMarcado.map((mark,ind)=>mark === indice ? marca = "markdo" : (marca ==="markdo"?"markdo":""))}`}
    )
}


export default Tabela