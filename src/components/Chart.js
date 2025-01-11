import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  PieChart, Pie, Cell,
} from "recharts";
import { Etudiant as EdutiantData } from "../data/Etudiant";
import "../style/chart.css"


const Chart = () => {
  // State for selected data type
  const [selectedOption, setSelectedOption] = useState("semaine");
  const [Etudiant,setEtudiant] = useState(EdutiantData)
  const competenceData = Etudiant[0].competance;

  // Colors for the pie slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  // Extract the datasets
  const weeklyData = Etudiant[0].donneesQuotidiennes.jours.map((jour, index) => ({
    name: jour,
    value: Etudiant[0].donneesQuotidiennes.datasets[0].donnees[index],
  }));

  const monthlyData = Etudiant[0].donneesMensuelles.mois.map((mois, index) => ({
    name: mois,
    value: Etudiant[0].donneesMensuelles.datasets[0].donnees[index],
  }));

  // Choose the correct dataset based on the selected option
  const currentData = selectedOption === "semaine" ? weeklyData : monthlyData;
  const barColor =
    selectedOption === "semaine"
      ? Etudiant[0].donneesQuotidiennes.datasets[0].couleurDeFond
      : Etudiant[0].donneesMensuelles.datasets[0].couleurDeFond;

// Define a fixed total for the circle (e.g., 100%)
const TOTAL = 100;

// // Normalize values to always add up to TOTAL
// const normalizedData = competenceData.map((item) => ({
//   ...item,
//   value: item.value,
//   percentage: (item.value / TOTAL) * 100, // Calculate exact percentage
// }));

// Calculate the total sum of all values
const totalSum = competenceData.reduce((sum, item) => sum + item.value, 0);

// Normalize data so it sums up to 100%
const normalizedData = competenceData.map((item) => ({
  ...item,
  percentage: (item.value / totalSum) * 100, // Add percentage for clarity
}));

  return (
    <section className="chart">
     <div style={{ width: "100%", height:400 }}>
      <h1>Exercices</h1>

      {/* Dropdown to select the data */}
      <div style={{ marginBottom: 20 }}>
        <label htmlFor="chart-select" style={{ marginRight: 10 }}>
          Select Data Type:
        </label>
        <select
          id="chart-select"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="semaine">Exercices dernière semaine</option>
          <option value="mois">Exercices par mois</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer>
        <BarChart
          data={currentData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={barColor}>
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div style={{ width: "100%", height: 400 }}>
      <h2>Répartition des Compétences</h2>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie
            data={competenceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {competenceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer> */}
{/* 
<ResponsiveContainer>
        <PieChart>
          <Pie
            data={competenceData}
            cx="50%"
            cy="50%"
            labelLine={false}
            // Customize labels to show raw values
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {competenceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
        </PieChart>
      </ResponsiveContainer> */}
<ResponsiveContainer>
        <PieChart>
          <Pie
            data={normalizedData}
            cx="50%"
            cy="50%"
            label={({ name,percentage }) => `${name}: ${percentage.toFixed(2)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            startAngle={0}
            endAngle={360} // Ensure it fills the full circle
          >
            {normalizedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) =>
              ` ${((value / TOTAL) * 100).toFixed(2)}%`
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
    </section>
   
  );
};

export default Chart;
