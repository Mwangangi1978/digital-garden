---
title: "TrialMe Attribution Dashboard"
date: 2025-03-18T09:00:00+03:00
lastmod: 2025-03-18T09:00:00+03:00
status: published
category: data
image: "/images/projects/trialme.webp"
image_contain: true
---

## Overview

[TrialMe](https://www.trialme.com) is a digital platform focused on medical research management and clinical trial patient recruitment. I designed and implemented the attribution infrastructure to provide a single, trustworthy view of where participant signups and conversions actually originate.

## Demo

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 24px 0;">
  <iframe src="https://www.loom.com/embed/aece82c01f75455ca735bfb5aef1c1f8" title="TrialMe attribution dashboard demo" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

## The problem

Marketing spend was going out across highly fragmented channels—including social media outreach, strategic partnerships, and in-person events. However, the tracking was disconnected. Without clean attribution mapping, we couldn't accurately measure channel performance, conversion rates, or specific user motivations, making it incredibly difficult to scale patient recruitment efficiently.

## What I did

- **Attribution Architecture:** Designed and implemented an automated "Attribution Loop" system to track participant motivations and tie offline event traffic directly to online conversions.
- **Custom QR & Link Generation:** Built a custom link and QR code generator for in-person events, allowing participants to access trial information while cleanly capturing the traffic source.
- **Product Strategy:** Authored the core Product Requirements Document (PRD), compiled comprehensive CRM comparison materials for the team, and managed tracking links and content variations across campaigns.
- **Data Capture:** Integrated GDPR-compliant Tally forms using webhooks and hidden fields to securely capture and route user data directly into our attribution analytics system.
- **Documentation:** Produced detailed video walkthroughs of the tracking dashboard to align the team on how to interpret the incoming data.

## Outcome

By closing the analytics loop, we shifted recruitment from guesswork to evidence-based strategy. The team could accurately measure specific channel performance, identify where high-quality signups were originating, and understand user drop-off points, laying the necessary groundwork for their future mobile app recruitment efforts.

## Stack

Squarespace, custom JavaScript tracking scripts, Tally (webhooks/hidden fields), CRM integrations, and custom link-software repositories.
