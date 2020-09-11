import React, { useEffect, useState } from 'react'

const Jaril = ({ text, findAndReplace = false, tagName = false }) => {
  const [replaceText, setReplaceText] = useState(text)

  useEffect(() => {
    return setReplaceText('')
  }, [text])

  useEffect(() => {
    const { find, replace } = findAndReplace
    setReplaceText(text.replace(find, replace))
  }, [findAndReplace, text])

  useEffect(() => {
    const { tag, string } = tagName
    setReplaceText(text.replace(string, `<${tag}>${string}</${tag}>`))
  }, [tagName, text])

  if (tagName) return <div dangerouslySetInnerHTML={{ __html: replaceText }} />
  return <div>{replaceText}</div>
}

export default Jaril
