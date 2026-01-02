---
title: "typography constitution"
date: 2025-12-31T19:52:37+03:00

status: complete

category: social   # social/political/economic/tech
---

# **Preamble**

This document serves as the living typographical constitution for [denismwangangi.com](http://denismwangangi.com). It was originally drafted during the site’s development phase to serve as the primary rulebook for all typographic decisions. This is to ensure quality and consistency, translating to a simple and efficient development process. Readers should utilise this as a point of reference for navigation or even as a typography guide for their own works. The primary resource for this document is Mathew Butterick’s *Practical Typography*. Additional inspiration is drawn from [Gwern.net](http://Gwern.net) and Wes Anderson’s feature films.

Implementation of the above on Hugo is accomplished via CSS3.

#  **The page (macro layout)**

## Page Margins

For desktop screens, the left and right margins are set to auto.  
For mobile screens, the left and right margins are 1.5 rem each.

## Central Column

For desktop screens, the central column has a maximum width of 1000px.  
For mobile screens, the central column is obtained by subtracting the left and right margins from the total viewport width.

## Leading

The leading will be 130% of the point size

## Paragraph Spacing

Paragraphs will be spaced using a margin bottom equal to the point size.

Heading spacing  
The top heading spacing will be equal to 200% of the point size, except for headings in the side column.  
The bottom heading spacing will be equal to 150% of the point size, except for headings in the side column.

# **Typeface Composition**

Please note that the typefaces listed are temporary and will be replaced by professional fonts in due course. Changes to this & other documents are documented in the logs page.

## Body

The body text uses the Charter font, as it is a traditional serif font that is very readable and suitable for this use case.

Headings  
Section headings utilise Cooper Hewitt font, a contemporary serif font that provides contrast to the body text.  
Article headings will utilise the same body text font, though with different text formatting.

## Code quotation

For code quotations, this site utilises the Fira Code font, a popular monospaced font, to ensure the legibility of the compressed syntax in code. 

## Mathematical formulas

Formulas are rendered using Computer Modern, the standard typeface of LaTeX. This visual shift signals to the reader that they are entering a mode of precise, abstract reasoning.

## Sidenotes

Sidenotes, located in the left column, utilise the Cooper Hewitt font.

## Fallbacks

Body \- Georgia, Merriweather, Times New Roman.  
Article headings \- Arial Narrow, Helvetica Neue, Helvetica, Arial.  
Code quotations \- Cascadia Code, Source Code Pro, Courier New, Monaco.

# **Scaling and Sizing**

## Base Scale

The base scale serves as the “root note” for the website’s entire harmonic structure.

* Desktop: The base font size is 24px. This large size was chosen to mimic the clarity of cinema title cards and to reduce eye strain during long-form reading.  
* Mobile: The base font size shifts to  16px on viewports narrower than 1024px to accommodate limited screen real estate while maintaining legibility.  
* Line height: The line height is 130% of the font size on desktop; on screens narrower than 1024px, the line height is 145% of the font size to enhance legibility.

## Modular Scale

This site utilises a **Perfect Fifth (1.5)** modular scale. This ratio was selected to create a dramatic, high-contrast hierarchy.

* Sub-headings: Same as body text. (More on headings here)  
* Article headings: 1.5x Base (36px Desktop / 24px Mobile)  
* Page titles: 2.25x Base (54px Desktop / 36px Mobile)

## Responsive Behaviour

The site utilises a Composite Detection Strategy that filters input mechanisms through viewport dimensions.

The Algorithm: A device is assigned the Mobile Scale (16px) if and only if:

1. Input Condition: The primary pointer is coarse (Touch).  
2. AND Dimension Condition: The viewport width is below 1024px.

# **Text Formatting**

## Alignment

Paragraphs on this website are left-aligned.  
Sidenotes, located in the left column,  are right-aligned.

## Hyphenation

For headings, hyphenation is off to prevent awkward breaks in the text.  
For body text, hyphenation is set to auto to prevent large spaces on the right-hand side.

Line length  
Line length, the site aims for an average of 45–90 characters (2–3 alphabets) regardless of screen size.

## Emphasis

For gentle emphasis, italic is used.  
For stronger emphasis, bold text is used.

## Metadata

Italics are also applied to meta-information, specifically: timestamps (published/updated) and article abstracts.

# **Navigation and Interactivity**

Hyperlinks are treated as integral components of the sentence structure rather than intrusive UI elements. They adhere to a philosophy of "typographic continuity," ensuring they are discoverable without disrupting the visual rhythm.

## Internal links

*  Styling: Internal links are rendered as regular body text, distinguished by a subtle, small circle icon (like a degree symbol °) placed immediately following the anchor text. This icon replaces the traditional heavy underline and provides an inconspicuous visual cue.  
* Icon Color: The icon's color changes based on the site's theme to ensure it remains a subtle accent:  
    \- Light Mode: Millennial Pink (\#F7CAC9).  
   \- Dark Mode: Mustard Yellow (\#FED766) 


  
External links

Links departing the domain are denoted by a superscript icon mirroring the destination source (e.g., a tiny arrow or globe), placed immediately following the anchor text. This visual cue alerts the reader to a context switch without cluttering the prose with heavy styling.

## Hover states

To provide tactile feedback, a high-contrast background highlight is applied on hover for both internal and external links.

* Light Mode: \#F7CAC9 (Millennial Pink) @ 50% Opacity.  
* Dark Mode: \#FED766 (Mustard Yellow) @ 50% Opacity.

## Visited states

All links remain uniform, regardless of the user's history.

## Sidenotes

Sidenotes, located in the left column, have a light font face.

# **Popovers**

Hovering (in desktop) or clicking (in mobile) over a qualified link summons a "mini-window" overlay. This viewport renders the linked content (or its abstract) directly atop the current page, granting immediate context without displacing the reader's position.

## Window controls

The pop-up is designed not as a static tooltip, but as a fully functional operating system window.

* Desktop Interaction: The window behaves like a desktop application. It can be moved (dragged via the header), pinned (toggled via the 📌 icon to persist while scrolling), minimised (docked to the bottom-right via the `_` icon), and closed (via the `x` icon). Content within the window is fully scrollable.  
* Mobile Interaction: Due to viewport constraints, mobile pop-ups are modal and feature only the Close (`x`) button.

## Recursion and Nested Context

Pop-ups are recursive; links inside a pop-up can spawn *child* pop-ups (a pop-up within a pop-up).  
To prevent infinite regression or visual clutter, a control icon (👁️) in the window header allows the user to disable this recursive behaviour, rendering links inside the window as standard navigation targets.

(Sidenote: For a breakdown of the underlying architecture, including the Backlink ID system and Transclusion logic, see the [Technical Implementation Notes](https://www.google.com/search?q=/logs/technical-implementation%23popups).)

# **Block Elements**

## Unordered lists

Unordered lists represent items with no sequential dependency.

* Marker: Strictly limited to the solid circular disc (`•`).  
* Nesting: Nested levels retain the disc marker but increase indentation by `2rem` per level.

## Ordered lists

Ordered lists represent sequential instructions or hierarchical ranking. To maintain the document's technical nature, the site rejects standard "alphanumeric" nesting (1, a, i) in favour of Decimal Numbering (Legal Style).

* Numbering Pattern:  
  * Level 1: `1.`  
  * Level 2: `1.1.`  
  * Level 3: `1.1.1.`  
* Implementation: Utilises CSS counters (`counter-reset`, `counter-increment`) to automatically generate the parent-child prefix string.  
* Styling: The numbers are rendered in the body font variant (Charter) but may be bolded to create a visual anchor.

## Definition lists

Used for the Glossary and Technical Specifications.

* Structure:  
  * Term (`<dt>`): Bold, Flush Left.  
  * Definition (`<dd>`): Indented `2rem`, positioned on the line immediately following the term.

## 

## Blockquotes

Blockquotes indicate extended excerpts. They must be visually distinct but typographically consistent with the document's voice.

* Font Style: Normal (Roman). The site explicitly rejects the convention of italicising blockquotes to maximise readability.  
* Size Scaling: 90% of the Base Font Size.  
* Line Height: Tightened to 1.4 (down from the standard 1.5/1.6) to compensate for the shorter line length and smaller point size.  
* Visual Container:  
  * Border: 4px solid Left Border.  
  * Padding: `1.5rem` left padding to separate text from the border.  
  * Colour Logic:  
    * Light Mode: Millennial Pink (`#F7CAC9`).  
    * Dark Mode: Mustard Yellow (`#FED766`).

## Inline quotation

Leverages the browser's default-generated content (\<q\>) to insert context-aware smart quotes.

Citations  
Position: Block display, right-aligned relative to the quote.  
Prefix: Em-dash (`—`).  
Typography: Small Caps (`font-variant: small-caps`).

## Inline code

Inline code snippets represent technical variables or commands woven directly into the narrative flow.

To distinguish these snippets from the surrounding Charter serif, they are encased in a subtle "capsule."

* Background: A 10% opacity grey wash (`rgba(150, 150, 150, 0.1)`) provides just enough contrast to define the boundaries of the code without creating a jarring "highlighter" effect.  
* Softening: A `3px` border radius is applied to the corners, harmonising the harsh geometry of the monospace font with the organic curves of the body text.

## Code blocks

Code blocks are "windows" into the logic that powers the concepts being discussed. They are treated as distinct documents embedded within the main article.  
The site utilises the Rosé Pine family, a pastel-based syntax highlighting system.

* Light Mode: Rosé Pine Dawn – A warm, low-contrast palette reminiscent of sunrise, harmonising with the site's paper-like background.  
* Dark Mode: Rosé Pine (Main) – A muted, charcoal-based palette that reduces eye strain without resorting to pure black.

## Mathematical formulas

Mathematics is treated as a separate language with its own typographic traditions.

* Inline Math: Rendered flush with the text baseline to maintain flow.  
* Display Math: Complex equations are given "stage presence." They are centred in the column and framed by `2rem` of vertical whitespace, treating the equation not just as text, but as a figure demanding focused study.

# 

# **Colour and Theme**

## Light mode

Concept: Designed to mimic the warmth of a high-quality novel.

Background: Cream (`#FDFBF7`). This off-white shade prevents the "snow blindness" effect of pure `#FFFFFF` on modern high-brightness displays.

Text: Soft Charcoal (`#111111`). A deep grey that provides high contrast without the harshness of pure black.

## Dark mode

Concept: Designed to mimic a blueprint or the deep ocean of *The Life Aquatic*, turning the page into a chalkboard.  
Background: Zissou Slate (`#556F7A`). A rich, teal-grey that maintains character even in low light.  
Text: Cream (`#FDFBF7`). The same colour as the light mode background is repurposed here as text, creating a "chalk on slate" effect that is softer on the eyes than pure white.

## Accents

To avoid visual chaos, the saturated "Wes Anderson" colours are strictly limited to interactive or semantic elements. They act as the "props" in the scene, not the walls.

* Millennial Pink (\#F7CAC9): Used in Light Mode for blockquote borders, hover states, and secondary buttons.  
* Mustard Yellow (\#FED766): Used in Dark Mode for the same purposes as Millennial Pink (to ensure contrast against the slate background).  
* Zissou Red (\#FF0000): Reserved exclusively for system errors or critical alerts.  
* Cyan (\#5BC0EB): Used primarily on the Landing Page "Poster" layout; restricted elsewhere to avoid reading fatigue.

## Contrast and Accessibility

All body text must meet or exceed the WCAG AA standard (minimum 4.5:1 contrast ratio).

Verification:

* Light Mode (Charcoal on Cream): 18:1 Ratio (Passes AAA).  
* Dark Mode (Cream on Slate): 5.2:1 Ratio (Passes AA).  
* Landing page (Charcoal on Cyan): 18:1 Ratio (Passes AAA).




