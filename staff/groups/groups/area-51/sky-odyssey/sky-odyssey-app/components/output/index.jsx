function Output({ rows, onRowsRender }) {

    return <section className="active output">

        <div className="output__container">

            <section className="output__header header">
                <h2 className="header__title">HEADER RESULTS</h2>

            </section>

            <section className="output__main main">

                {rows instanceof Array && <ul className="main__list list">
                    {
                        rows.map(row => 
                            onRowsRender(row)
                        )
                    }
                </ul>}

            </section>

        </div>

    </section>
}

