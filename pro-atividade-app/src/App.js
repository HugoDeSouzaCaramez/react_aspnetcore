import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: 'Título',
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    prioridade: '1',
    titulo: 'Título',
    descricao: 'Segunda Atividade'
  },
];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e) {
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    };

    setAtividades([...atividades, { ...atividade }]);
  }

  function prioridadeLabel(param) {
    switch(param) {
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Não definida'
    }
  }

  function prioridadeStyle(param) {
    switch(param) {
      case '1':
        return 'smile'
      case '2':
        return 'meh'
      case '3':
        return 'frown'
      default:
        return 'Não definida'
    }
  }

  return (
    <>
      <form className='row g-3'>
        <div className="col-md-6">
          <label for="id" className="form-label">Id</label>
          <input type="text" className="form-control" id="id" />
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
            onClick={addAtividade}
          >
            + Atividade
          </button>
        </div>
      </form>
      <div className="mt-3">
        { atividades.map((ativ) => (
          <div key={ativ.id} className='card mb-2 shadow-sm'>
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className='badge rounded-pil bg-secondary me-1'>{ativ.id}</span> 
                   - {ativ.titulo}
                </h5>
                <h6>
                  Prioridade: 
                  <span className='ms-1 text-black'>
                    <i className={'me-1 far fa-' + prioridadeStyle(ativ.prioridade)}></i>
                    {prioridadeLabel(ativ.prioridade)}
                  </span>
                </h6>
              </div>
              <p className='card-text'>
                {ativ.descricao}
              </p>
              <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'>
                  <i className='fas fa-pen me-2'></i>
                  Editar
                </button>
                <button className='btn btn-sm btn-outline-danger me-2'>
                  <i className='fas fa-trash me-2'></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
