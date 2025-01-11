
export const Etudiant = [
        {
           
            prenom: "Ahmed",
            nom: "alawi",
            tempsPasse: 9000,
            competance: [
                { name: "Front End", value: 25 },
                { name: "Back End", value: 20 },
                { name: "Database", value: 10 },
                { name: "Management", value: 40 },
              ],
            donneesQuotidiennes: {
                jours: ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
                datasets: [
                    {
                        label: "Exercices derniere semaine",
                        donnees: [5, 8, 6, 7, 5, 11, 0],
                        couleurDeFond: "#06045F"
                    }
                ]
            },
            donneesMensuelles: {
                mois: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                datasets: [
                    {
                        label: "Exercices par mois",
                        donnees: [10, 15, 20, 25, 30, 12, 10, 5, 20, 30, 35, 15],
                        couleurDeFond: "#17377E"
                    }
                ]
            }
        }
    ]


