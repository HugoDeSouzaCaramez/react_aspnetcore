using Microsoft.AspNetCore.Mvc;

namespace ProAtividade.API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Bem-vindo à API ProAtividade!");
        }
    }
}
