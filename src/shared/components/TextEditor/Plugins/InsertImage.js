function InsertImage(change, src) {
  return {
    commands: {
      insertImage(change, src) {
        change.insertBlock({
          type: 'image',
          data: { src }
        });
      }
    }
  };
}

export default InsertImage;
