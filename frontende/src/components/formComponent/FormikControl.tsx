import React from 'react'
import Input from './Input';
// import TextArea from './TextArea';
 import SelectField from './SelectField';
// import RadioButton from './RadioButton';
// import CheckboxGroup from './CheckboxGroup';
// import DatePicker from './DatePicker';

// type FormikControlProp = {

// }

function FormikControl(props: any) {
    const {control, ...rest} = props;
    switch(control){
        case 'input': return <Input {...rest} />
        // case 'textarea': return <TextArea {...rest} />
         case 'select': return <SelectField {...rest} />
        // case 'radio': return <RadioButton {...rest} />
        // case 'checkbox': return <CheckboxGroup {...rest} />
        // case 'date': return <DatePicker {...rest} />
            default: return null;
    }

}

export default FormikControl