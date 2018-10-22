import { Value } from 'slate';

const InitialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'hello'
              }
            ]
          }
        ]
      }
    ]
  }
});

export default InitialValue;
