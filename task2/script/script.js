document.addEventListener('DOMContentLoaded', () => {

    const cards = [...document.querySelector('.row').children]

    const configureHeight = () => {

        cards.forEach(card => card.style.height = null)

        let itemsInRow = 0
        const width = window.innerWidth
        if (width >= 1200)
            itemsInRow = 4
        else if (width >= 992)
            itemsInRow =  3

        if (!itemsInRow)
            return

        const setHeight = cards => {
            let maxHeight = 0
            cards.map(card => {
                if (card.clientHeight > maxHeight)
                    maxHeight = card.clientHeight
            })
            cards.forEach(card => card.style.height = maxHeight + 'px')
        }

        let row = []
        cards.forEach(card => {
            row.push(card)
            if (row.length === itemsInRow) {
                setHeight(row)
                row = []
            }
        })
    }

    window.addEventListener('resize', configureHeight)

    configureHeight()

})