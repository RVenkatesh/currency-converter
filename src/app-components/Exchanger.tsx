import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Exchanger.scss';
import Papa from 'papaparse';
import ReactApexChart from 'react-apexcharts';


const BASE_URL = 'https://www.alphavantage.co/';
const FLOAT_PRECISION = 4;
const API_KEY = 'NP2GW775OQW7TW4A';

async function request(url: string, config?: object) {
    try {
        let response = await fetch(url);
        return response.json();
    } catch(error) {
        console.error(error);
    }
}


/**
 *
 * @param {*} initialValue Handles update during value change of any input field
 * @returns Object containing the latest value, the onChange action and value setter method to be bound to
 *   the corresponding event
 */
 function useInput(initialValue: any, callback?: (current: string) => void, ...params: any) {
    let [value, setValue] = useState(initialValue);
  
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        callback && callback.apply(null, params);
    }
  
    return {
        value,
        onChange: handleChange,
        setValue
    };
}

function useExchangeRate(initialValue = 1, defaultFrom: string, defaultTo: string) {
    let [from, setFrom] = useState(defaultFrom);
    let [to, setTo] = useState(defaultTo);

    let [fromName, setFromName] = useState('United States Dollar');
    let [toName, setToName] = useState('Euro');
    
    let [rate, setRate] = useState(initialValue);
    let [dailyRate, setDailyRate] = useState<any>([]);
    // const API_KEY = 'demo';

    useEffect(() => {
        async function getExchangeRate(from: string, to: string) {
            try {
                let query = `query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`;
                let response = await request(`${BASE_URL}${query}`);
                let newRate = parseFloat(response['Realtime Currency Exchange Rate']['5. Exchange Rate']);
                setRate(newRate);
            } catch (error) {
                console.log(error);
            }
        }
        getExchangeRate(from, to);
    }, [from,to]);

    useEffect(() => {
        async function getExchangeRateDaily(from: string, to: string) {
            try {
                let query = `query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`;
                let response = await request(`${BASE_URL}${query}`);
                let newDailyRate = response['Time Series FX (Daily)'];
                let series = [];
                for (let day in newDailyRate) {
                    let details = newDailyRate[day];
                    series.push([
                        new Date(day).getTime(),
                        parseFloat(details['4. close']).toFixed(FLOAT_PRECISION)
                    ]);
                    if (series.length === 30) {
                        break;
                    }
                }
                setDailyRate(series);
            } catch (error) {
                console.log(error);
            }
        }
        getExchangeRateDaily(from, to);
    }, [from,to]);

    function setFromCurrency(currency: any) {
        setFrom(currency['currency code']);
        setFromName(currency['currency name']);
    }
    function setToCurrency(currency: any) {
        setTo(currency['currency code']);
        setToName(currency['currency name']);
    }

    return {
        rate,
        dailyRate,
        from,
        fromName,
        setFromCurrency,
        to,
        toName,
        setToCurrency,
    }
}

async function getCurrencies(url: string) {
    return new Promise((resolve, reject) => {
        Papa.parse(url, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                resolve(results.data);
            }
        });
    });
}
function useCurrenciesReducer() {
    const PHY_CURRENCY_LIST_URL = `${BASE_URL}physical_currency_list/`;
    let [currencies, setCurrencies] = useState<any>([]);

    // Get currencies list
    useEffect(() => {
        async function createCurrencyList() {
            let response = await getCurrencies(PHY_CURRENCY_LIST_URL);
            setCurrencies(response);
        }
        createCurrencyList();
    }, []);

    return currencies;
}

function Converter() {
    let [current, changeCurrent] = useState('from');
    let currencies = useCurrenciesReducer();
    let fromCurrencyInput = useInput(0, changeCurrent, 'from');
    let toCurrencyInput = useInput(0, changeCurrent, 'to');
    let exchangeRate = useExchangeRate(1, 'USD', 'EUR');

    useEffect(() => {
        async function updateConversion() {
            if (current === 'from') {
                let newValue = (fromCurrencyInput.value * exchangeRate.rate).toFixed(FLOAT_PRECISION);
                toCurrencyInput.setValue(parseFloat(newValue));
            } else {
                let newValue = (toCurrencyInput.value / exchangeRate.rate).toFixed(FLOAT_PRECISION);
                fromCurrencyInput.setValue(parseFloat(newValue));
            }
        }
        updateConversion();
    }, [
        exchangeRate.rate,
        fromCurrencyInput,
        fromCurrencyInput.value, 
        toCurrencyInput,
        toCurrencyInput.value,
        current
    ]);

    interface Currencies {
        'currency name': string,
        'currency code': string
    };

    let xaxis: ApexXAxis = {
        type: 'datetime',
        axisTicks: {
            color: '#000'
        }
    };
    let chart: ApexChart = {
        foreColor: "#fff",
        fontFamily: 'Poppins',
    }

    // Graph
    let graphOptions = {
        series: [{
            data: exchangeRate.dailyRate
        }],
        options: {
            chart,
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis,
            tooltip: {
                x: {
                format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
                }
            },
        }, 
    };

    return (
        <div className="exchanger">
            <div className="converter">
                <div className="result">
                    <div className="from-text">
                        {fromCurrencyInput.value} {exchangeRate.fromName} equals
                    </div>
                    <div className="to-text">
                        {toCurrencyInput.value} {exchangeRate.toName}
                    </div>
                </div>
                <div className="currency-container from-currency-container">
                    <input
                        className='currency-value from-currency-input'
                        type="number"
                        placeholder=''
                        value={fromCurrencyInput.value}
                        onChange={fromCurrencyInput.onChange}
                    />
                    <Select
                        className="currency from-currency"
                        options={currencies}
                        defaultValue={{'currency code': 'USD', 'currency name': 'United States Dollar'}}
                        onChange={exchangeRate.setFromCurrency}
                        getOptionLabel={(option: Currencies) => option['currency name']}
                        getOptionValue={(option: Currencies) => option['currency code']}
                    />
                </div>
                <div className="currency-container to-currency-container">
                    <input
                        className='currency-value to-currency-input'
                        type="number"
                        placeholder=''
                        value={toCurrencyInput.value}
                        onChange={toCurrencyInput.onChange}
                    />
                    <Select
                        className="currency to-currency"
                        options={currencies}
                        defaultValue={{'currency code': 'EUR', 'currency name': 'Euro'}}
                        onChange={exchangeRate.setToCurrency}
                        getOptionLabel={(option: Currencies) => option['currency name']}
                        getOptionValue={(option: Currencies) => option['currency code']}
                    />
                </div>
            </div>
            <div className="exchange-history">
                <ReactApexChart
                    className="history-chart"
                    series={graphOptions.series}
                    options={graphOptions.options}
                    type="area"
                    height={300}
                />
            </div>
        </div>
    );
}

export default Converter;