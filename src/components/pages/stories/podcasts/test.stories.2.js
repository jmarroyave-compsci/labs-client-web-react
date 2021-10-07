import React, {useState} from 'react'

function Atest(){
  const [val, setVal ] = useState(null)
  const handleChange = (event) => {
      const numeric = +event.target.value.replace(/\D/g, '')
      setVal(`$ ${(numeric/100).toFixed(2)}`)
  }

  return <input value={val} onChange={handleChange}/>
}



export default {
  title: 'Project/Tests/1',
};

const Template = args => <Atest {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  
};
