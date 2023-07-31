---
theme: ./
---

# Slidev Xebia Theme Starter

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer bg-gray text-white hover:bg-opacity-80">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: code
---

# Code highlighting

Use highlighted code snippets.

```ts {all|1-5|6-}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: two-cols-header
---

# All layouts

A lot of layouts are available:

::left::

Xebia themed:

- default
- cover
- end
- intro
- quote
- section
- two-cols-header

::right:: 

Other Slidev layouts (no Xebia theme):

- center
- fact
- full
- iframe-left / iframe-right / iframe
- image-left / image-right / image
- statement
- two-cols

---
layout: default
---

# Layout `default`

This is the fallback when layout is not specified.

---
layout: cover
---

# Layout `cover`

If not specified, this will be used for the first slide.

---
layout: end
---

# Layout `end`

Used to end the presentation.

---
layout: intro
---

# Layout `intro`

Can be used for personal introduction.

---
layout: quote
---

# Layout `quote`

Add a famous quote.

---
layout: section
---

# Layout `section`

To separate a set of slides.

---
layout: two-cols-header
---

# Layout `two-cols-header`

For two column layouts with a text as header.

::left::

Left column.

::right::

Right column.

---
layout: center
class: "text-center"
---

# Learn more about Slidev

[Documentation](https://sli.dev) / [GitHub repo](https://github.com/slidevjs/slidev)
