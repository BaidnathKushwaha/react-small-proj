import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_7KufFSiCFHs5IRYjSvTGPMGAeJPxP9VN47m9FglX&base_currency=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.data)) // FIX 1: Access 'res.data', not 'res[currency]'
            .catch((error) => console.error("Error fetching currency data:", error)); // FIX 2: Handle errors
    }, [currency]);

    return data;
}

export default useCurrencyInfo;