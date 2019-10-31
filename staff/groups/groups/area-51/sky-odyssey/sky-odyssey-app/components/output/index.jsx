function Output({ rows, onRowsRender }) {

    return <section className="active output">

            
                {rows instanceof Array && <ul className="main__list list">
                    {
                        rows.map(row => 
                            onRowsRender(row)
                        )
                    }
                </ul>}

      
    </section>
}

