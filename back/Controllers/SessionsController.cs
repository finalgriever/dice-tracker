using System.Collections.Generic;
using DiceTracker.Models;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Google.Cloud.Firestore;
using System;
using System.Threading.Tasks;

namespace DiceTracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly IConfiguration configuration;

        public SessionsController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> Get()
        {
            var apiKey = configuration.GetValue<string>("GoogleKey");
            FirestoreDb db = FirestoreDb.Create(apiKey);
            QuerySnapshot collectionSnapshot = await db.Collection("sessions").GetSnapshotAsync();
            var games = collectionSnapshot.Documents.Select(x => x.ConvertTo<Game>());
            return Ok(games);
        }

        // POST api/values
        [HttpPost]
        public async void Post([FromBody] Game game)
        {
            var apiKey = configuration.GetValue<string>("GoogleKey");
            FirestoreDb db = FirestoreDb.Create(apiKey);
            DocumentReference document = db.Collection("sessions").Document(DateTime.Now.ToString());
            await document.SetAsync(game);
        }
    }
}
