import React from 'react'

const LitraHinnatInput = ({ onChange, value }) => (
  <input className="form-control"
    placeholder="Litrahinta"
    onChange={onChange}
    type="number"
    min="0"
    step="0.001"
    value={value}/>
)

const LitraHinnatTable = ({ litrahinta }) => {

  const renderPrices = (litrahinta) => {
    return Array(100).fill()
      .map((_, i) => i + 1)
      .map(i => ({ litres: i.toFixed(2), price: (i * litrahinta).toFixed(2) }))
      .filter(obj => obj.price % 1 === 0 )
      .map((p, idx) => (
        <tr key={idx}>
          <td>{p.litres} l</td><td>{p.price} €</td>
        </tr>
      ))
  }

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Litroja</th><th>Hinta</th>
        </tr>
      </thead>
      <tbody>
        { !!litrahinta && renderPrices(litrahinta) }
      </tbody>
    </table>
  )
}

class LitraHinnat extends React.Component {
  storageKey = 'litrahinta'

  constructor(props) {
    super(props)
    this.state = { litrahinta: '' }
    this.onLitraHintaChange = this.onLitraHintaChange.bind(this)
  }

  componentDidMount() {
    const litrahinta = JSON.parse(localStorage.getItem(this.storageKey))
    if (litrahinta) this.setState({ litrahinta })
  }

  onLitraHintaChange(event) {
    const litrahinta = event.currentTarget.value
    this.setState(
      { litrahinta },
      () => localStorage.setItem(this.storageKey, JSON.stringify(litrahinta))
    )
  }

  render () {
    const { litrahinta } = this.state
    return (
      <div>
        <LitraHinnatInput onChange={ this.onLitraHintaChange } value={ litrahinta }/>
        <LitraHinnatTable litrahinta={ litrahinta }/>
      </div>
    )
  }
}

export { LitraHinnat }
