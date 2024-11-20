import React, { useCallback, useState } from "react";

const UISearchbar = ({ items, onSearch }) => {
    return (
        <div> 
            <input 
                type="text"
                placeholder="Search any fruit you want"
                onChange={(e) => onSearch(e.target.value)}
            />
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

// Parent component
const Searchbar = () => {
    const [query, setQuery] = useState("");
    const items = ["Aman", "Ankush", "Sahil", "Sharma", "Mohit", "Mishra", "Dev"];
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    const onSearch = useCallback((enteredText) => {
        setQuery(enteredText);
    }, []);

    return (
        <div>
            <UISearchbar items={filteredItems} onSearch={onSearch} />
        </div>
    );
};

export default Searchbar;