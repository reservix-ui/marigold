import React from 'react';
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const CodeBlock = props => {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)
  return (
    <Highlight {...defaultProps} code={props.children.props.children.trim()} language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
      theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const components = {
  table: props => {
    return <table style={{width: '100%'}} {...props}></table>
  },
  th: props => {
    return <th style={{backgroundColor:'#e3e3e3', padding: '8px'}} {...props}></th>
  },
  tr: props => {
    return <tr style={{padding: '8px'}} {...props}></tr>
  },
  td: props => {
    return <td style={{padding: '8px'}} {...props}></td>
  },
  pre: props => {
    return <CodeBlock {...props}/>
  }
}

export const wrapRootElement = ({element}) => {
  return (<MDXProvider components={components}>{element}</MDXProvider>)
}