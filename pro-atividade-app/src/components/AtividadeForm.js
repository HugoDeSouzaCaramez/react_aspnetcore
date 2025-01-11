export default function AtividadeForm(props) {
    return (
        <form className='row g-3'>
        <div className="col-md-6">
          <label for="id" className="form-label">Id</label>
          <input 
            type="text" 
            className="form-control" 
            readOnly
            id="id" 
            value={Math.max.apply(
              Math, props.atividades.map(
                atividade => atividade.id)) 
              + 1}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select id='prioridade' className='form-select'>
            <option defaultValue='0'>Selecione..</option>
            <option value='1'>Baixa</option>
            <option value='2'>Normal</option>
            <option value='3'>Alta</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="titulo" className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" />
        </div>
        <div className="col-md-6">
          <label for="descricao" className="form-label">Descrição</label>
          <input type="text" className="form-control" id="descricao" />
        </div>
        <hr />
        <div className='col-12'>
          <button 
            className='btn btn-outline-secondary' 
            onClick={props.addAtividade}
          >
            + Atividade
          </button>
        </div>
      </form>
    )
}
