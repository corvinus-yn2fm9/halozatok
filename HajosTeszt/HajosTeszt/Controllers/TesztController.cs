using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    // [Route("api/[controller]")]
    [ApiController]
    public class TesztController : ControllerBase
    {
        [HttpGet]
        [Route("corvinus/nagybetus/{szoveg}")]
        public IActionResult M2(string szoveg)
        {
            try
            {
                return new ContentResult
                {
                    ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
                    Content = szoveg.ToUpper()
                };
            }
            catch
            {
                return BadRequest("Nem jó a bemenő adat");
            }
        }

    }
}
