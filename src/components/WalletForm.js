import React from 'react';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { handleChange } = this;
    const { value } = this.props;
    return (
      <section>
        <h1>Despesas</h1>
        <form>
          <label htmlFor="value">
            Email:
            <input
              id="value"
              name="value"
              labelText="Valor:"
              type="number"
              value={ value }
              handleChange={ handleChange }
              placeholder="Digite o Valor"
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              labelText="Descrição:"
              type="text"
              value={ value }
              handleChange={ handleChange }
              placeholder="Digite a Descrição"
            />
          </label>
        </form>
      </section>
    );
  }
}

const { string, number, oneOfType } = PropTypes;
WalletForm.propTypes = {
  value: oneOfType([
    number,
    string,
  ]).isRequired,
};

export default WalletForm;
