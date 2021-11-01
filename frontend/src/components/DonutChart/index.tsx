import Chart from "react-apexcharts"
const DonutChart = () => {


    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    };

    const options = {
        legend: {
            show: true
        }
    };


    return (
        <Chart options={{ ...options, labels: mockData.labels }} type="donut"
            height="250" series={mockData.series} />
    );
}

export default DonutChart;
