import React from "react";

class AgreementForm extends React.Component {
  render() {
    const { policy, defaultChecked, onClick } = this.props;
    console.log(this.props);
    return (
      <li>
        <input type="checkbox" id={policy.id} defaultChecked={defaultChecked} onClick={onClick} />
        <label for={policy.id}>
          <span></span>
          {policy.title}
        </label>
      </li>
    );
  }
}

export default AgreementForm;
