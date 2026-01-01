import React, { useEffect } from "react";
import { updateTransaction } from "../features/transactionReducer";

type TransListItemProps = {
    tx: {
        id: string;
        merchant: string;
        amount: number;
        currency?: string;
        date: string;
        category: string;
    };
};

function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatAmount(amount: number, currency = "USD") {
    return amount.toLocaleString(undefined, { style: "currency", currency });
}

const TransListItem: React.FC<TransListItemProps> = ({ tx }) => {
    const [displayDetails, setDisplayDetails] = React.useState<string | null>(null);
    const [category, setCategory] = React.useState<string>("");

    useEffect(() => {
        if (tx) {
            setCategory(tx.category);
        }
    }, [tx]);

    const onTransactionClick = (e: React.MouseEvent, tx: TransListItemProps['tx']) => {
        e.stopPropagation();
        setDisplayDetails(tx.id);
    }

    const closeDetails = () => {
        setDisplayDetails(null);
    };

    const saveDetails = () => {
        const data = { ...tx, category };
        updateTransaction(data);
        closeDetails();
    };

    return (
        <li
            role="button"
            className="listItem flex flex-col bg-white rounded-lg shadow-sm px-[6px] py-[10px]"
        >
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={(e) => onTransactionClick(e, tx)}
            >
                <div className="flex flex-col">
                    <span className="text-[13px] font-semibold">{tx.merchant}</span>
                    <span className="text-[12px] text-gray-700">{formatDate(tx.date)}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div className="text-[13px]">{formatAmount(tx.amount, tx.currency || "USD")}</div>
                    <div className="text-[11px] text-gray-600">{category}</div>
                </div>
            </div>
            <div
                role="region"
                aria-hidden={displayDetails ? "false" : "true"}
                className={
                    "transition-all duration-200 ease-out mt-2 border-t border-gray-200 " +
                    (displayDetails ? "flex-col justify-between" : "hidden")
                }
            >
                <label>
                    Description: {tx.merchant}
                </label>
                <label>
                    Category:
                    {/* TODO: make this reusable component */}
                    <input
                        name="trans-cat"
                        defaultValue={category}
                        className="border border-blue-500 m-2 text-gray-500"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </label>
                <div className="mt-2 flex justify-end gap-2">
                    <button onClick={closeDetails} className="">Cancel</button>
                    <button onClick={saveDetails}>Save</button>
                </div>
            </div>
        </li>
    );
};

export default TransListItem;
