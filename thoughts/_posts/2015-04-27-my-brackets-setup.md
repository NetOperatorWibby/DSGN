---
layout:   post-thought
title:    "My Brackets Setup"
date:     2015-04-27
category: post
---

As a longtime [Notepad++](http://www.notepad-plus-plus.org) user in my PC days, I have found [Brackets](http://brackets.io) to be a suitable replacement for editing and viewing code...I would even call it an upgrade. I was screensharing with a remote co-worker today and he kept asking me what I use for several plugins, so I thought I would whip up a quick blog post to share with everyone.

You can search for these plugins (and install!) within Brackets itself by bringing up the Extension Manager and copy/pasting the titles below.



<div class="divider">
  <span class="divider__shape-01"></span>
  <span class="divider__shape-02"></span>
  <span class="divider__shape-03"></span>
  <span class="divider__shape-04"></span>
</div>



### [Autosave Files on Window Blur](https://github.com/martypenner/brackets-autosave-files-on-window-blur)
* Autosave all open files when switching applications, in the style of PHPStorm/WebStorm.

I still hit `Cmd + S` (sometimes) even though I don't need to. You're going to look at your browser right after you edit code anyway, so why waste (a) precious second(s) tapping keys?



### [Beautify](https://github.com/drewhamlett/brackets-beautify)
* Format JavaScript, HTML, and CSS files.



### [Brackets CSS Color Preview](https://github.com/cmgddd/Brackets-css-color-preview)
* Preview the colors within CSS files.



### Brackets File Tree
* Visual display of the tree of files and folders.



### [Brackets Sass](https://github.com/jasonsanjose/brackets-sass)
* Compiles Sass (sass/scss) files when changed. Updates styles during Live Preview. Experimental support for Quick Edit.

<!--/ ad /-->

**NOTE:** [Joshua Miller](https://twitter.com/Josh_AM) informed me of this plugin and I must say, it's a hell of a lot better than trying to remember Terminal commands. Getting this setup was a little tricky, so ~~I'll make a post detailing the process later~~ I wrote a [post](/thoughts/post/how-to-use-brackets-sass) explaining how to use it! Apparently, this is a hot topic because I *still* get at least 20 hits a week on that post alone.

Crazy.



### [Brackets UI Theming Enable](https://github.com/notasz/brackets-uitheming)
* A simple extension to allow native Brackets themes to theme any available UI elements.

Recently, I have become interested in customizing my setup even more than just the code window. This plugin allows you to override the Brackets UI with your own brand of awesome.



### [Code Folding](https://github.com/thehogfather/brackets-code-folding)
* Brackets extension that provides simple code folding for files edited in brackets. Supports brace folding, tag folding, indent folding and multi-line comment folding.

As of release 1.3 (Brackets notified me of an update as I began writing this post), code folding is integrated by default. Sweet! This plugin will continue to exist for Bracket versions below 1.3.



### [Dracula](https://github.com/NetOperatorWibby/DraculaBrackets)
* A theme of terrible evil, for your coding pleasure, bwahahahahahaaa-cough-haaaa. Oh yeah, you will need to install the Brackets UI Theming Enable plugin too, for the full Dracula experience.

This one is by your's truly! I love the Dracula theme, but the [original Brackets theme](https://github.com/Jacse/themes-for-brackets) I was using wasn't 100% to my liking, so I fixed some things and optimized a lot of other things.



### [Indent Guides](https://github.com/lkcampbell/brackets-indent-guides)
* Show indent guides in the code editor.

I modify this in my preferences file to show as dotted lines. Just looks cleaner IMO, than the default solid line. Note that after you install this plugin and restart Brackets, you will have to enable Indent Guides via the `View` menu. To make the guides dotted, go to the `Debug` menu and select `Open Preferences File`. Add this line to that file and it will update immediately:

```json
"brackets-indent-guides.guideStyle": "dotted"
```



### [Indentator](https://github.com/ahuth/brackets-indentator)
* Re-indent a document using your current indentation settings.



### [Interactive Linter](https://github.com/MiguelCastillo/Brackets-InteractiveLinter)
* Interactive linting for Brackets.

I use [JSHint](http://jshint.com) usually, but when I remember I have this plugin, I use this!



### [Markdown Preview](https://github.com/gruehle/MarkdownPreview)
* Live preview of markdown documents

I used to have keep a separate app for viewing and editing Markdown files, but that immediately seemed silly once I learned the existence of this plugin.



### [Open .gitignore](https://github.com/danielmahon/brackets-opengitignore)
* This extension will try to find and open the .gitignore file which Brackets hides by default.

For those times when you need to ignore files and folders, but can't be bothered to show hidden files in the filesystem.



### [Paste and Indent](https://github.com/ahuth/brackets-paste-and-indent)
* Automatically apply the correct indentation to pasted text.



### [Right Click Extended](https://github.com/jbardnz/RightClickExtended)
* Adds Cut, Copy, and Paste options to the right click menu - now with multi-language support.

I really don't understand why this isn't in Brackets by default.



### [SVG Preview](https://github.com/peterflynn/svg-preview)
* Live preview SVG files in an inline panel while you edit them. Click in SVG to jump to corresponding code.

I find this plugin incredibly helpful, especially as I start using SVGs more. You can optimize by hand and see if you mess something up.



### [Tabs - Custom Working](https://github.com/DH3ALEJANDRO/custom-work-for-brackets)
* Adds toolbar it include buttons show/hide with tabs of active documents on the top of the editor.



### [Trailingspaces](https://github.com/scientech-com-ua/brackets-trailingspaces)
* Extension which visualizes trailing whitespaces.

I fucking hate trailing spaces. They look terrible! Stop leaving that crap in your code.



### [Unused Files](https://github.com/Dammmien/brackets-unused-files)
* Find unused files in your web project.

When I refactor components and optimize code in my browser and OS projects, I tend to leave behind files that are now wasting space. This plugin will help you streamline resources.



<div class="divider">
  <span class="divider__shape-01"></span>
  <span class="divider__shape-02"></span>
  <span class="divider__shape-03"></span>
  <span class="divider__shape-04"></span>
</div>



And there you have it! I will keep this post updated as I change my setup. Here's a screenshot of it, where you can see some of the plugins mentioned, in action:

<figure>
  ![](/images/thoughts/2015-04-27/01.png)
  <figcaption>Aww yiss, kinda like Inception, right?</figcaption>
</figure>

P.S. I figured it might even be useful to see my Preferences File. My directories not showing up before my files irritated me to no end before realizing I could enable that functionality. I also do *not* like tags closing automatically, and that is something else you can configure. Anyhoo, here it is:

```json
{
  "me.drewh.jsbeautify.on_save": false,
  "themes.theme": "dsgn.dracula-theme",
  "sortDirectoriesFirst": true,
  "scientech-com-ua.brackets-trailingspaces.checked": true,
  "closeTags": {
    "whenOpening": false,
    "whenClosing": true,
    "indentTags": []
  },
  "useTabChar": false,
  "spaceUnits": 2,
  "tabSize": 2,
  "linting.collapsed": true,
  "brackets-indent-guides.enabled": true,
  "brackets-paste-and-indent.enabled": true,
  "brackets-indent-guides.guideStyle": "dotted",
  "styleActiveLine": true,
  "brackets-css-color-preview.enabled": true,
  "fonts.fontFamily": "\"SourceCodePro-Medium\", ＭＳ ゴシック, 'MS Gothic', monospace",
  "fonts.fontSize": "12px",
  "markdown-preview.useGFM": true
}
```