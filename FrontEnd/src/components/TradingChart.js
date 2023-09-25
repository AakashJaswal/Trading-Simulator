import React, { useEffect, useRef } from 'react'
import { createChart } from 'lightweight-charts';

const TradingChart = () => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const chart = createChart(chartContainerRef.current, {
            width: 900,
            height: 550,

        });

        const candlestickSeries = chart.addCandlestickSeries();

        // Replace this with your actual data
        const data = [
            { time: '2022-01-01', open: 100, high: 120, low: 90, close: 110 },
            // Add more data points here
        ];

        candlestickSeries.setData(data);

        return () => {
            chart.remove();
        };
    }, []);
    return (
        <div>
            <div className='bg-white border border-black rounded-lg p-4 mb-2' ref={chartContainerRef}></div>

            <div className="flex w-full justify-center items-center ">
                <button className="bg-red-400 hover:bg-red-600 font-bold border border-black rounded-lg transition duration-300 ease-in-out px-4 py-2 mx-4">SELL</button>
                <button className="bg-green-400 hover:bg-green-600 font-bold border border-black rounded-lg transition duration-300 ease-in-out px-4 py-2 mx-4">BUY</button>
            </div>
        </div>
    )
}

export default TradingChart;