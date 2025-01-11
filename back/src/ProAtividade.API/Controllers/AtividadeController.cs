using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AtividadeController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "Meu primeiro método Get";
        }

        [HttpPost]
        public string Post()
        {
            return "Meu primeiro método Post";
        }

        [HttpPut]
        public string Put()
        {
            return "Meu primeiro método Put";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Meu primeiro método Delete";
        }
    }
}