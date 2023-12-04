import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
// Add these import statements at the top of your files



function BotsPage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const resp = await fetch(`http://localhost:8002/bots`);
      if (!resp.ok) {
        throw new Error(`Failed to fetch. Status: ${resp.status}`);
      }
      const data = await resp.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      console.error("Error details:", error);
    }
  }
  
  

  function enlistBot(bot) {
    setBots((bots) =>
      bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b))
    );
  }

  function deleteBot(bot) {
    const updatedBots = bots.filter((b) => b.id !== bot.id);
    setBots(updatedBots);
  }

  return (
    <div>
      
      <YourBotArmy bots={bots.filter((b) => b.army)} deleteBot={deleteBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;

