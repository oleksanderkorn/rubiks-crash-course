# slidev-theme-xebia

A Xebia theme for [Slidev](https://github.com/slidevjs/slidev).

## Install

This is a private package which is not available on NPM. To install, first clone this repo to your machine.

```sh
git clone https://github.com/xebia/presentation-templates.git
# or use ssh
git clone git@github.com:xebia/presentation-templates.git
```

Then create a fresh install of Slidev:

```sh
npm init slidev@latest <presentation-name>
# installs under ./presentation-name
cd <presentation-name>
# install prism themes (used by Xebia theme)
npm install prism-themes
# copy theme
cp -r ../presentation-templates/slidev-theme-xebia .
```

Now, add the following frontmatter to your `slides.md`.

<pre><code>---
theme: <b>./slidev-theme-xebia</b>
---</code></pre>

If not running, start the presentation with:

```sh
npm run dev
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme supports the following layouts:

- default (fallback when layout is not specified)
- code (for code blocks)
- cover (start of preso)
- end (end of preso)
- intro (for personal introduction)
- quote
- section (for inbetween)
- two-cols-header (two columns with header)

## Customizing

### Defaults

In the `package.json` file, you'll find the defaults for the presentation under `"slidev"`.
You can override these via the frontmatter configuration.

### Code style

Change the CSS import in `styles/index.ts` to whatever Prism theme you like.
If needed, you can switch to the `shiki` highlighter, but you have to tweak it yourself.

## Contributing to this theme

You can run the standalone version of this theme.

- First do an `npm install` on this repo
- Then, run `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

When adding extra layouts, make sure the resulting assets are packaged in the build!
