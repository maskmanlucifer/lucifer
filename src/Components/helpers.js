export const getSaturnIcon = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.88367 3.5837C11.7505 2.25381 13.2751 1.66291 13.8061 2.1939C14.3371 2.72489 13.7462 4.2495 12.4163 6.11635M12.4163 6.11635C11.6614 7.17607 10.6683 8.34607 9.5072 9.5072C8.34607 10.6683 7.17606 11.6614 6.11634 12.4163M12.4163 6.11635C12.6633 6.69467 12.8 7.3314 12.8 8C12.8 10.651 10.651 12.8 8 12.8C7.3314 12.8 6.69466 12.6633 6.11634 12.4163M3.5837 9.88367C2.2538 11.7505 1.66291 13.2751 2.19389 13.8061C2.72489 14.3371 4.2495 13.7462 6.11634 12.4163M11.3941 4.60589C10.5255 3.73726 9.32547 3.2 8 3.2C5.34903 3.2 3.2 5.34904 3.2 8C3.2 9.32547 3.73726 10.5255 4.60589 11.3941" stroke="#00BB83" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const getNowTextFromJson = (now) => {
    return <p className="now-item">{now.text}{now.url ? <a href={now.url} className="now-item-url" target="_blank" rel="noreferrer"> {now.urlText}.</a> : null}</p>
}