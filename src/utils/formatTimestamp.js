/**
 * Converts a timestamp to hh/mm/ss dd/mm/yy format (24-hour)
 * @param {number|Date} timestamp - Unix timestamp (ms or seconds) or Date object
 * @returns {string} Formatted time string as "hh/mm/ss dd/mm/yy"
 */
export function formatTimestamp(timestamp) {
    // Convert to Date object if needed
    const date = timestamp instanceof Date 
        ? timestamp 
        : new Date(Number.isInteger(timestamp) && timestamp < 1000000000000 
            ? timestamp * 1000  // assume seconds, convert to ms
            : timestamp);
    
    // Extract time components
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    // Extract date components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);  // last 2 digits
    
    return `${hours}/${minutes}/${seconds} ${day}/${month}/${year}`;
}
