import React from 'react'
import './FormField.css'
import 'bulma/css/bulma.css'

const FormField = props => {
    return (
            <div className="container">
                <div className="field">
                    <label className="label">{props.label}</label>
                    <div className="control">
                        <input className="input" type={props.type} placeholder={props.placeholder} />
                    </div>
                </div>
            </div>
    )
}

export default FormField

