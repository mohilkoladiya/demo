import React from 'react'
import Input from './input'
import Radiobutton from './Radiobutton'
import Select from './Select'
import Textarea from './Textarea'
import Datepicker from './Datepicker'
import Map from './Map'
import Checkboxgroup from './Checkboxgroup'
import Country from './Country'
import State from './State'

export default function Formikcontrol(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest} />
        case 'radio': return <Radiobutton {...rest} />
        case 'date': return <Datepicker {...rest} />
        case 'checkbox': return <Checkboxgroup {...rest} />
        case 'country': return <Country {...rest} />
        case 'state': return <State {...rest} />
        case 'map': return <Map {...rest} />
        default: return null
    }
}
