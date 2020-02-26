import PropTypes from "prop-types"
import React from "react"
export class Challenger extends React.Component {
    renderTally () {
        const { tally } = this.props
        let diver = Math.floor(tally/5), moder = tally%5, tallyString = []

        for (let i = 1; i <= diver; i++) {
            tallyString.push(FULL_TALLY)
        }

        for (let j = 0; j < moder; j++) {
            tallyString.push(TALLY)
        }

        return tallyString
    }

    onClick(name) {
        this.props.onClick(name)
    }

    render() {
        const { name } = this.props 

        return <div style={styles.challenger}>
            <div style={styles.name} onDoubleClick={this.onClick.bind(this, name)}>{name}</div>
            <div style={styles.tallies}> {this.renderTally()} </div>
        </div>
    }
}

const styles = {
    challenger: {
        display: 'flex',
        paddingBottom: 25
    },
    name: {
        fontFamily: 'fantasy',
        userSelect: 'none',
        fontSize: 50,
        cursor: 'pointer',
        marginRight: 60
    },
    tallies: {
        display: 'flex',
        height: 55,
        width: '100%'
    },
    tally: {
        fontFamily: 'fantasy',
        fontSize: 60
    },
    fullTally: {
        textDecoration: 'line-through',
        fontFamily: 'fantasy',
        fontSize: 60,
        marginRight: 10

    }
}

const FULL_TALLY = <p style={styles.fullTally}>IIII</p>
const TALLY = <p style={styles.tally}>I</p>

Challenger.propTypes = {
  siteTitle: PropTypes.string,
}

Challenger.defaultProps = {
  siteTitle: ``,
}

export default Challenger
