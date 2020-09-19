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

  return <div dangerouslySetInnerHTML={{ __html: replaceText }} />
}

export const useManipulator = (Obj = {}) => {
  const { text, search, tag = null } = Obj
  if (text === '' || !text) return 'Text is missing'
  const filterText = text.search(search)
  const searchLen = text.substring(filterText, filterText + search.length)
  return {
    offset: filterText,
    searchText: searchLen,
    limit: search.length,
    renderString: tag
      ? text.replace(search, `<${tag}>${search}</${tag}>`)
      : text
  }
}

export default Jaril
