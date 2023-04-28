import css from './Statistics.module.css'

export const Statistics = ({title, data}) => {
    return (
        <section className={css.statistics}>
            {title !== undefined && (
                <h2 className={css.title}>{title}</h2>
            )}
            <ul className={css.statList}>
                {data.map((e) => {
                    return (
                        <li key={e.id} className={`${css.item} ${css[e.label.substring(1)]}`}>
                            <span className={css.label}>{e.label}</span>
                            <span className={css.percentage}>{e.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}