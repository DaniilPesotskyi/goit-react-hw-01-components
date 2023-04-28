import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((e) => {
                    return (
                        <tr className={css.item} key={e.id}>
                            <td className={css.type}>{e.type}</td>
                            <td className={css.amount}>{e.amount}</td>
                            <td className={css.currency}>{e.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}