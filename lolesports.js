import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LoLEsports() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Simulação de dados - depois podemos integrar com uma API real
    setMatches([
      { id: 1, teams: "T1 vs G2", time: "14:00 UTC", status: "Ao Vivo" },
      { id: 2, teams: "FNC vs C9", time: "16:00 UTC", status: "Agendado" },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">LoL eSports - Partidas</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <motion.div key={match.id} whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800 p-4 rounded-2xl shadow-lg">
              <CardContent>
                <h2 className="text-xl font-semibold">{match.teams}</h2>
                <p className="text-gray-400">{match.time}</p>
                <p className={`text-sm ${match.status === "Ao Vivo" ? "text-green-400" : "text-yellow-400"}`}>
                  {match.status}
                </p>
                <Button className="mt-4 w-full">Detalhes</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}