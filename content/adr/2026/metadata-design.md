---
title: "metadata design"
date: 2026-02-22T16:46:53+03:00
lastmod: 2026-02-22T16:46:53+03:00

status: complete
category: technical
---
# **Intro**

When designing how to organize this digital garden, I needed to solve a fundamental tension: how do I make writing frictionless for myself while keeping navigation intuitive for readers?

I found excellent guidance—both positive and cautionary—in Maxwell Forbes' essay ["In Praise and Critique of Digital Gardens."](https://maxwellforbes.com/blog/praise-critique-digital-gardens/) Forbes highlights several issues with conventional digital gardens, particularly around navigation and tagging practices. His critiques became source material for how I should design my metadata framework to avoid the same pitfalls.

## **The Problems Forbes Identifies**

Forbes makes three key claims about digital garden dysfunction:

Problem 1: Gardens become swamps

The blessing of digital gardens—low friction to authorship—becomes its curse: gardens are overgrown. Because all stages of developing posts are given equal treatment, there are too many of them to figure out what's worth looking at as a reader.Even if you can technically filter by polished posts, you have to (a) figure out the website’s conceptual framework enough to understand that you need to do this, and (b) figure out the author’s homegrown terminology for what “finished” is, (c) figure out how to apply this filter, if possible. The garden becomes a swamp.

Problem 2: Tags are visual clutter

As a reader, I not only don't care that someone puts programming, reflection, naval-gazing categories on their blog post, but it even distracts me as I always wonder… why?

Problem 3: Tags create friction for writers

Since I came up with tags, it now adds micro friction to my writing if an essay falls in multiple tags, or doesn't fall into any tag, or if I start suspecting the tags are actually a hierarchy... Tags don't exist. Topics don't exist.

These are legitimate concerns. Here's how I've addressed each one.

## **My Solution: Objective Tags, Minimal Friction**

On Writer Friction (Problem 3\)

Forbes is right that obsessive tagging becomes a strenuous addition to writing—the opposite of what digital gardens should do. Less is more.

I use as few tags as possible, but enough to serve my needs. The key: I avoid subjective topic tags (blockchain, tech, neocolonialism) that leave me wondering which tag fits. Instead, I use pre-defined objective tags that require minimal decision-making.

All pieces get automatic metadata:

* Upload date (when first published)  
* Last intentionally updated (most recent substantial change)  
* Format: `12.01.24 – 12.29.25` (upload date – last update)

Non-fiction gets ONE category tag based on their conclusion:

* Social  
* Economic  
* Political  
* Technical

I assign these based on the piece's core argument, not its content or references. This eliminates the "multiple tag" dilemma. Take the example of an essay titled *"The Economics of AI Agents."* Is it Economic or Technical? If the essay is about how AI lowers the cost of labor → Economic. If the essay is about how LLM tokens function → Technical.

Fiction gets ONE type tag:

* Short story  
* Screenplay  
* Poetry

Special category:

* ADR (Architecture Decision Record) – Explains technical or design choices for this website

On Visual Clutter (Problem 2\)

I've experienced the issue with distracting tags cluttering article openings. My solution: visible and invisible tags.

Visible tags provide context readers need:

* Upload/update dates  
* Writing status: Note (rough thought), Draft (writing in progress), Complete (finished & reliable), Archived (outdated)

Invisible tags are for organization and filtering:

* All the category and type tags listed above  
* Available in the central index filter but not shown on article pages

On Garden Swamps (Problem 1\)

Here's where I respectfully disagree with Forbes—but only partially.

Yes, having a library of unfinished work can be inconvenient for readers seeking exhaustive information. But the whole point of a digital garden is continuous public learning—not just for the writer, but for the reader as well.

A rough thought might spark an idea that takes you down a completely different path than the one I'm following. This could result in conflicting final products, and that's exactly what we need: a pool of knowledge contributing to the eventual revelation of truth.

You don't actually need to filter by finished posts. The issues Forbes lists in Problem 1 are solvable with better UI design:

Solution 1: Clear terminology  
 I use simple, bracketed labels that require no interpretation: Note (rough thought), Draft (writing in progress), Complete (finished & reliable), Archived (outdated).

Solution 2: Prominent filtering  
 The central index, where most readers enter, includes an obvious filtering tool so you can show only the status levels you want.

## **Epistemic Statuses: The Second Layer**

Tags tell you what stage a piece is in. Epistemic statuses tell you how confident I am in its claims and how much work went into it.

I've adapted this checklist from the Effective Altruism Forum's guide on "Valuable Information to List in an Epistemic Status":

- [ ] Do I have any biases or conflicts of interest? (Including whether my background makes me more likely to reach this conclusion)  
- [ ] What's the main reason I believe my conclusion? (Data, logical reasoning, personal experience, expert consultation?)  
- [ ] Do I have relevant qualifications?  
- [ ] How much effort did I invest in: (a) researching the post, and (b) making claims precise?  
- [ ] If I received feedback, from how many people, what type, and what was their broad response?

Together, tags and epistemic statuses give you the context to decide how seriously to take any piece on this site, and they give me a systematic way to organize without analysis paralysis.

