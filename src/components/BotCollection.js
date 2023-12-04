import React from "react";
import BotCard from "./BotCard";
// Add these import statements at the top of your files


function BotCollection({ bots, enlistBot, deleteBot}) {
  

  const botItem = bots.map((bot) => {
  return (
    <BotCard
       key={bot.id}
       bot={bot}
       clickEvent={enlistBot}
       deletebot={deleteBot}/>);

  });

return (
  <div className="ui four column grid">
      <div className="row">
       
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;
