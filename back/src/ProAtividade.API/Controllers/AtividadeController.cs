using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        private DataContext Context { get; }

        public AtividadeController(DataContext context)
        {
            this.Context = context;
            
        }

        [HttpGet]
        public IEnumerable<Atividade> Get()
        {
            return this.Context.Atividades;
        }

        [HttpGet("{id}")]
        public Atividade Get(int id)
        {
            return this.Context.Atividades.FirstOrDefault(ati => ati.Id == id);
        }

        [HttpPost]
        public IEnumerable<Atividade> Post(Atividade atividade)
        {
            this.Context.Atividades.Add(atividade);

            if (this.Context.SaveChanges() > 0) {
                return this.Context.Atividades;
            }

            throw new Exception("Você não conseguiu adicionar uma atividade");
        }

        [HttpPut("{id}")]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) {
                throw new Exception("Você está tentando atualizar a atividade errada");
            }

            this.Context.Update(atividade);

            if (this.Context.SaveChanges() > 0) {
                return this.Context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            }

            return new Atividade();
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            var atividade = this.Context.Atividades.FirstOrDefault(ativ => ativ.Id == id);
            if (atividade == null) {
                throw new Exception("Você está tentando deletar uma atividade que não existe");
            }

            this.Context.Remove(atividade);

            return this.Context.SaveChanges() > 0;
        }
    }
}