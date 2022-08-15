import React from 'react'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import Input from './Input'
import Radio from './Radio'
import Select from './Select'
import TextArea from './TextArea'

function FormControl(props) {
    const {control, ...rest}=props
    switch(control){
        case'input': return <Input {...rest}/>
        case'textarea': return <TextArea {...rest}/>
        case'select': return <Select {...rest}/>
        case'radio': return <Radio {...rest}/>
        case'checkbox': return <Checkbox {...rest}/>
        case'date': return <DatePicker {...rest}/>
        default: return null
    }
}

export default FormControl