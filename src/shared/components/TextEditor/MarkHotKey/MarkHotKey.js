function MarkHotKey({ type, key, renderNode = false }) {
  return {
    onKeyDown(e, change, next) {
      if (!e.ctrlKey || e.key != key) return next();

      e.preventDefault();
      if (renderNode) {
        const node = change.value.blocks.some(block => block.type == type);
        change.setBlocks(node ? 'paragraph' : type);
        return true;
      }

      change.toggleMark(type);
      return true;
    }
  };
}

export default MarkHotKey;
