import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { visit } from 'unist-util-visit';

function htmlSuperscript() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const regex = /(\w)\^(\d+)/g;

      if (regex.test(node.value)) {
        parent.children.splice(index, 1, {
          type: 'raw',
          value: node.value.replace(regex, '$1<sup>$2</sup>')
        });
      }
    });
  };
}



const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [
    gfm, 
    remarkMath
  ],
  rehypePlugins: [
    rehypeKatex,
    htmlSuperscript,
    rehypeRaw
  ],

});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;