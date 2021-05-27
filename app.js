class Despesa {
    constructor(ano, mes, dia, tipo, descricao,valor){
        this.ano=ano
        this.mes=mes
        this.dia=dia
        this.tipo=tipo
        this.descricao=descricao
        this.valor=valor
    }
    validarDados(){
        for(let i in this){
            if(this[i]== undefined || this[i]==''|| this[i]== null){
                
                return false
            }
        }
        return true
}
}
class Bd{
    constructor(){
        let id = localStorage.getItem('id')
        if(id===null){
            localStorage.setItem('id',0)

        }

    }
    getProximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId)+1
    }
  gravar(d){
        
        let id =this.getProximoId()
        
        localStorage.setItem(id, JSON.stringify(d))
        localStorage.setItem('id', id)
        
    }
    recuperarTodososRegistros(){
        console.log('Estamos chegando ate aqui')
    }
}

let bd =new Bd()

///////// PARTE DE CADASTRAS DESPESA/////////////////////////////
function cadastrarDespesa(){
   
    let ano = document.getElementById('ano')
    let mes= document.getElementById('mes')
    let dia= document.getElementById('dia')
    let tipo= document.getElementById('tipo')
    let descricao= document.getElementById('descricao')
    let valor= document.getElementById('valor')
    
let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value,valor.value)
if(despesa.validarDados()==true){
    bd.gravar(despesa) 
    document.getElementById('exampleModalLabel').innerHTML = "Registro inserido com sucesso"
    document.getElementById('modalboy').className= 'modal-body '
    document.getElementById('exampleModalLabel').className= 'modal-title text-success'
    document.getElementById('modalboy').innerHTML="Despesas foram inseridas com sucesso"

    $('#exampleModal').modal('show')
}else{
    document.getElementById('exampleModalLabel').innerHTML = "ERRO"
    document.getElementById('modalboy').className= 'modal-body '
    document.getElementById('exampleModalLabel').className= 'modal-title text-danger'
    document.getElementById('modalboy').innerHTML="Prencha todos os campos"

    $('#exampleModal').modal('show')
}
}
  function carregarDespesas(){
      bd.recuperarTodososRegistros()

  }


