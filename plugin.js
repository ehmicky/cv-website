module.exports = {
  onPostBuild({ utils: { status: { show } } }) {
    show({ summary: `Test [this](https://netlify.com)

One

Two
Three

Four
Five

***

* * *

- - -

- one
- two

+ one
+ two

* one
* two

1. one
  1.1 two
2. three

one
===
two
---

# one
## two

[this](https://netlify.com)
[this](https://netlify.com "title")
[this](link)
[link]: https://netlify.com "title"
![this](https://netlify.com)

https://netlify.com
<https://netlify.com>

:joy:

*a*
_a_
**a**
__a__
~~a~~

> one

\`one\`
\`\`\`one\`\`\`

| one | two |
|-----|-----|
| one | two |

- [ ] one
- [x] two

` })
  }
}
