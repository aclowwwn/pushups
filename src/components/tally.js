import PropTypes from "prop-types"
import React from "react"
import Challenger from "./Challenger"

const office = [
    {
        name: 'Andi',
        tally: 28
    },
    {
        name: 'Azar',
        tally: 1
    },
    {
        name: 'Gabriel',
        tally: 10
    },
    {
        name: 'Taz',
        tally: 19
    },
    {
        name: 'Waseem',
        tally: 4
    },
    {
        name: 'Muhammed',
        tally: 17
    },
    {
        name: 'Sagar',
        tally: 8
    },
]

const best = (a, b) => {
    return b.tally - a.tally
}

class Tally extends React.Component {
    constructor (props) {
        super(props)

        this.state = { office }
    }

    renderChallenger(challenger) {
        return <Challenger
            name={challenger.name}
            tally={challenger.tally}
            onClick={(this.onClick.bind(this))}
        />
    }

    onClick(name) {
        const { office } = this.state
        const index = office.findIndex(chlg => chlg.name === name)
        const challenger = office[index]
        const newOffice = [
            ...office.slice(0, index),
            Object.assign({}, challenger, { tally: ++challenger.tally }),
            ...office.slice(index + 1)
        ]

        this.setState({ office: newOffice })
    }

    render() {
        const office = this.state.office.sort(best)

        return <div style={styles.challenger}>
            {office.map(this.renderChallenger.bind(this))}
        </div>
    }
}

const styles = {
    challenger: {
    }
}

Tally.propTypes = {
  siteTitle: PropTypes.string,
}

Tally.defaultProps = {
  siteTitle: ``,
}

export default Tally
