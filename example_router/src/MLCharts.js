import React, { useContext } from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LinearScale, LineElement } from "chart.js";
import { APIContext } from "./config/context";

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale, LineElement);

const MLCharts = () => {
    const { PredictedCommissions = [], ActualCommission = [] } = useContext(APIContext);

    // If no data, return a message
    if (!PredictedCommissions.length || !ActualCommission.length) {
        return <p>No data available to display the chart</p>;
    }

    // Determine the min and max values to ensure the line spans the chart
    const minX = Math.min(...ActualCommission);
    const maxX = Math.max(...ActualCommission);
    const minY = Math.min(...PredictedCommissions);
    const maxY = Math.max(...PredictedCommissions);

    // Prepare data for the scatter plot
    const scatterData = {
        datasets: [
            {
                label: "Actual vs Predicted",
                data: PredictedCommissions.map((predicted, index) => ({
                    x: Number(ActualCommission[index]),  // Ensure it's a number
                    y: Number(predicted),  // Ensure it's a number
                })),
                backgroundColor: "rgba(54, 162, 235, 0.5)", // Light blue dots
                borderColor: "rgba(54, 162, 235, 1)", // Blue border
                borderWidth: 1,
                pointRadius: 6,
            },
            // Add the red solid line where x = y (static line across the chart)
            {
                label: "x = y",
                data: [
                    { x: minX, y: minY },  // Start at the min values
                    { x: maxX, y: maxY },  // End at the max values
                ],
                borderColor: "rgba(255, 99, 132, 1)", // Red solid line
                borderWidth: 2,
                fill: false,
                tension: 0,  // Straight line, no curves
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            title: {
                display: true,
                text: "Scatter Plot of Actual vs Predicted with x = y Line",
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Actual Commission",
                },
                min: minX - 5,  // Increased margin on the left side
                max: maxX + 5,  // Increased margin on the right side
                ticks: {
                    stepSize: 5, // Increase step size for better scale
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Predicted Commission",
                },
                min: minY - 5,  // Increased margin at the bottom
                max: maxY + 5,  // Increased margin at the top
                ticks: {
                    stepSize: 5, // Increase step size for better scale
                },
            },
        },
    };

    return (
        <div style={{ width: '80%', height: '400px' }}>
            <Scatter data={scatterData} options={options} />
        </div>
    );
};

export default MLCharts;