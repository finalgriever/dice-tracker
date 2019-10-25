using System.Collections.Generic;

namespace DiceTracker.Models
{
    public class Game
    {
        public IList<Roll> Rolls { get; set; }
    }
}