import React from "react";

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

    return (
        <li
            role="button"
            className="flex flex-col bg-white rounded-lg shadow-sm px-[6px] py-[10px]"
            onClick={() => setDisplayDetails(displayDetails ? null : tx.id)}
        >
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-[13px] font-semibold">{tx.merchant}</span>
                    <span className="text-[12px] text-gray-700">{formatDate(tx.date)}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div className="text-[13px]">{formatAmount(tx.amount, tx.currency || "USD")}</div>
                    <div className="text-[11px] text-gray-600">{tx.category}</div>
                </div>
            </div>
            <div className={displayDetails ? "flex" : "hidden"}>New content</div>
        </li>
    );
};

export default TransListItem;
