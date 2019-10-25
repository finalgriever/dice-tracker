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

        // GET api/sessions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> Get()
        {
            var project = configuration.GetValue<string>("FirebaseProject");
            FirestoreDb db = FirestoreDb.Create(project);
            QuerySnapshot collectionSnapshot = await db.Collection("sessions").GetSnapshotAsync();
            var games = collectionSnapshot.Documents.Select(x => x.ConvertTo<Game>());
            return Ok(games);
        }

        // POST api/sessions
        [HttpPost]
        public async void Post([FromBody] Game game)
        {
            var project = configuration.GetValue<string>("FirebaseProject");
            FirestoreDb db = FirestoreDb.Create(project);
            DocumentReference document = db.Collection("sessions").Document(DateTime.Now.ToString());
            await document.SetAsync(game);
        }
    }
}
