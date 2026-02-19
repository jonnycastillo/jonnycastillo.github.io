module.exports = {
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
      './themes/**/*.html',
    ],
    css: ['./themes/isabella/static/bootstrap-5/css/bootstrap.min.css'],
    output: './themes/isabella/static/bootstrap-5/css/',
    safelist: {
      standard: [
        /^dark/,
        /^light/,
        /^show/,
        /^collapse/,
        /^collapsing/,
        /^navbar/,
        /^modal/,
        /^tooltip/,
        /^bs-/,
      ]
    }
  }