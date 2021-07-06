let bookInfo = {
  bookName: "高级程序设计4",
  chap: {
    id: 23,
    content: [
      {
        about: "JSON",
      },
    ],
  },
  err: {
    err1: null,
    err2: undefined,
  },
};
const bookStr = JSON.stringify(bookInfo);

console.log(JSON.stringify(bookInfo));

const bookObj = JSON.parse(bookStr);

console.log(bookObj);
