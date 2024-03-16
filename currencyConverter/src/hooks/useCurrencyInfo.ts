import { useState, useEffect } from "react";

function useCurrencyInfo(currency: string) {
    const [data, setData] = useState<Object | null>({}); // Define the type of state

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => {
                // Handle errors here
                console.error("Error fetching currency data:", error);
            });

            console.log(data);
            
    }, [currency]); 

    return data; // Return the fetched data
}

export default useCurrencyInfo;