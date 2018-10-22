import React from 'react';

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  h3: 'header',
  pre: 'code',
  img: 'image'
};

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
  del: 'strikeThrough'
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class')
          },
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            );
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>;
          case 'quote':
            return <blockquote>{children}</blockquote>;
          case 'header':
            return <h3 className={obj.data.get('className')}> {children}</h3>;
          case 'image':
            const src = obj.data.get('src');
            return <img {...obj.attributes} src={src} />;
          default:
            return;
        }
      }
    }
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>;
          case 'italic':
            return <em>{children}</em>;
          case 'underline':
            return <u>{children}</u>;
          case 'strikeThrough':
            return <del>{children}</del>;
          default:
            return;
        }
      }
    }
  }
];

export default rules;
