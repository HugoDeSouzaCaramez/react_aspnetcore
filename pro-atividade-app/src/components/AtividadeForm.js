import { useEffect, useState } from "react";

const atividadeInicial = {
   id: 0,
   titulo: '',
   prioridade: 0,
   descricao: ''
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if(props.atividadeSelecionada.id !== 0) {
            setAtividade(props.atividadeSelecionada)
        }
    }, [props.atividadeSelecionada])

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setAtividade(prev => ({ ...prev, [name]: value }));
    };

    function atividadeAtual() {
        if (props.atividadeSelecionada.id !== 0) {
            return props.atividadeSelecionada
        }

        return atividadeInicial
    }

    return (
        <form className='row g-3'>
            <div className="col-md-6">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input 
                    name="titulo"
                    value={atividade.titulo || ''}
                    onChange={inputTextHandler}
                    type="text" 
                    className="form-control" 
                    id="titulo" 
                />
            </div>
            <div className='col-md-6'>
                <label className='form-label'>Prioridade</label>
                <select 
                    name="prioridade"
                    value={atividade.prioridade}
                    onChange={inputTextHandler}
                    id='prioridade' 
                    className='form-select'
                >
                    <option value='0'>Selecione..</option>
                    <option value='1'>Baixa</option>
                    <option value='2'>Normal</option>
                    <option value='3'>Alta</option>
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea 
                    name="descricao"
                    value={atividade.descricao || ''}
                    onChange={inputTextHandler}
                    type="text" 
                    className="form-control" 
                    id="descricao" 
                />
            </div>
            <hr />
            <div className='col-12'>
                <button 
                    className='btn btn-outline-secondary' 
                    onClick={(e) => {
                        e.preventDefault();
                        props.addAtividade(e);
                    }}
                >
                    + Atividade
                </button>
            </div>
        </form>
    );
}
