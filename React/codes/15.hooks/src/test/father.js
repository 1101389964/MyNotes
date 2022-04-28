import React from 'react'

export default function Father(props) {
  console.log(props);
  return props.children({name:'tqa', age:12});
}
