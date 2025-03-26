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

function addClassToElements() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (['code', 'img', 'a', 'p', 'table', 'tr', 'td', 'th'].includes(node.tagName)) {
        node.properties = {
          ...node.properties,
          className: ['markdown', ...(node.properties.className || [])]
        };
      }
    });
  };
}

const _mapProps = (props) => ({
  ...props,
  remarkPlugins: [
    gfm,  // !! This doesn't work with old browsers
    remarkMath
  ],
  rehypePlugins: [
    rehypeKatex,
    htmlSuperscript,
    addClassToElements,
    rehypeRaw
  ],

});

const Markdown = (props) => <ReactMarkdown {..._mapProps(props)} />;

export default Markdown;