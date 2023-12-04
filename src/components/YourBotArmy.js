import React from "react";
import BotCard from "./BotCard";
// Add these import statements at the top of your files



function YourBotArmy({ bots, deleteBot }) {
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={() => {}}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{armyItem}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;

    