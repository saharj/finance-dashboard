// import { type FC } from "react";
import { useSelector } from 'react-redux'
// import { useAppSelector, useAppDispatch } from '../store/hooks';
import type { RootState } from "../store/store";
import Tile from '../components/Tile';
import TransListItem from '../components/TransListItem';

// interface TransactionsProps {
//     limit?: number; // how many items to show inside the tile
//     onSelect?: (txId: string) => void; // called when a row is clicked
// }

const TransactionsTile = ({ //: FC<TransactionsProps> = ({
    limit = 5,
    // onSelect
}) => {
    const transactionsList = useSelector((state: RootState) => state.transactionsReducer);
    const list = transactionsList.slice(0, limit);

    const transactionsCard =
        <section
            className="flex flex-col p-3 gap-2"
            aria-label="Recent transactions"
        >
            <header className="flex justify-between items-baseline">
                <h3 className="text-base">Recent transactions</h3>
                {/* <button onClick={() => {}}>View all</button> */}
            </header>

            <ul className="p-none gap-[6px] list-none m-0 grid">
                {list.map((tx) => (
                    <TransListItem key={tx.id} tx={tx} />
                ))}
            </ul>
        </section>

    // TODO: implement onClick so that user can view details of a transaction and edit it
    return (
        <>
            <h2 className="text-lg">Transactions</h2>
            <Tile title="Transactions">{transactionsCard}</Tile>
        </>
    );
};

export default TransactionsTile;
