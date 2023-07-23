import React from 'react';
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement, Tooltip);

class CharacterChart extends React.Component {
  chartRef = React.createRef();
  myChart = null;

  componentDidUpdate(prevProps) {
    if (prevProps.characters !== this.props.characters && this.chartRef.current) {
      this.createChart();
    }
  }

  componentDidMount() {
    this.createChart();
  }

  createChart = () => {
    const { characters } = this.props;

    // Ensure that the canvas element is in the DOM and ready
    if (!this.chartRef.current || !this.chartRef.current.getContext) {
      return;
    }

    const characterNames = characters.map(character => character.get('characterName'));
    const runSpeeds = characters.map(character => character.get('runSpeed'));
    const dashSpeeds = characters.map(character => character.get('dash'));
    const airSpeeds = characters.map(character => character.get('airSpeed'));

    const data = {
      labels: characterNames,
      datasets: [
        {
          label: 'Run Speed',
          data: runSpeeds,
          backgroundColor: 'rgba(255, 28, 28, 0.5)',
          hoverBackgroundColor: 'rgba(255, 28, 28, 1)', // Darker background on hover
        },
        {
          label: 'Dash Speed',
          data: dashSpeeds,
          backgroundColor: 'rgba(0, 205, 28, 0.5)',
          hoverBackgroundColor: 'rgba(0, 205, 28, 1)', // Darker background on hover
        },
        {
          label: 'Air Speed',
          data: airSpeeds,
          backgroundColor: 'rgba(39, 140, 255, 0.5)',
          hoverBackgroundColor: 'rgba(39, 140, 255, 1)', // Darker background on hover
        }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          type: 'category',
          beginAtZero: true,
        },
        y: {
          type: 'linear',
          beginAtZero: true,
        },
      },
    };

    if (this.myChart) {
      this.myChart.destroy(); // Destroy the previous chart instance
    }

    this.myChart = new Chart(this.chartRef.current, {
      type: 'bar',
      data: data,
      options: options,
    });
  }

  componentWillUnmount() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default CharacterChart;
