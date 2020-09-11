import React, { useEffect, useState } from 'react'

const Jaril = ({ text, findAndReplace = false, tagName = false }) => {
  const [replaceText, setReplaceText] = useState(text)
  useEffect(() => {
    if (!findAndReplace) return
    const { findText, replaceText } = findAndReplace
    setReplaceText(text.replace(findText, replaceText))
  }, [findAndReplace])

  useEffect(() => {
    if (!tagName) return
    const { tag, string } = tagName
    setReplaceText(text.replace(string, `<${tag}>${string}</${tag}>`))
  }, [tagName])

  if (tagName) return <div dangerouslySetInnerHTML={{ __html: replaceText }} />
  return <div>{replaceText}</div>
}

export default Jaril
