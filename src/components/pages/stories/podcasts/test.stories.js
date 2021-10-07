import React, {useState, useRef, useEffect, useMemo} from 'react'

function Atest(){
  const [val, setVal ] = useState(0)
  const handleChange = (event) => {
      const numeric = +event.target.value.replace(/\D/g, '')
      setVal(`$ ${(numeric/100).toFixed(2)}`)
  }

  return <input key="hola" value={val} onChange={handleChange}/>
}

function Btest(){
  const updateCount = useRef(0)
  const [ en, setEn ] = useState(true)

  useEffect( () => {
    console.log(1, updateCount.current)
    updateCount.current += 1
  }, [en])

  useEffect( () => {
    console.log(2, updateCount.current)
    updateCount.current += 1
  }, [updateCount.current])

  return <button onClick={ () => setEn( (current) => !current )}/>
}

function Ctest(){

  const sum = (a,b) => { 
    console.log("voy" , a, b, a+b)
    return a + b
  };


  const sum1 = useMemo( () => sum(a,b), [a,b])

  return <button onClick={  )}/>
}


export default {
  title: 'Project/Tests/1',
};

const Template = args => <Btest {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  
};
