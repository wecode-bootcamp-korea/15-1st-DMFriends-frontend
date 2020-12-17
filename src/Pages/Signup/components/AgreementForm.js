import React from "react";

class AgreementForm extends React.Component {
  render() {
    const { policy, checked, onClick } = this.props;
    return (
      <li>
        <input type="checkbox" id={policy.name} checked={checked} onClick={onClick} />
        <label htmlFor={policy.name}>
          <span></span>
          {policy.title}
        </label>
      </li>
    );
  }
}

export default AgreementForm;
