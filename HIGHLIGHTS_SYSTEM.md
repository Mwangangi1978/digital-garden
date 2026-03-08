# Literary Highlights System - Complete Guide

## Overview

I've built you a **Literary Highlights** system that replaces your former "Library" section. It displays your current week's highlights at the bottom of your home page (spanning full width), with an automatic history page where previous weeks are archived.

## What Changed

### Removed from Home Page
- ❌ **Patterns section** (Ambient Co-presence)
- ❌ **Library section** (static text about books)

### Added to Home Page
- ✅ **Literary Highlights section** - Full width, at the bottom
  - Things you've read, watched, listened to, or looked at (art) this week
  - Supports: articles, videos, music, artwork
  - Links to highlights history

## How It Works

### 1. **Current Week Highlights** (Home Page)
Located at: `content/highlights/_index.md`

This file contains your **current week's highlights** in the front matter. Each highlight has:

```yaml
---
title: "Literary Highlights"
layout: "highlights"
week: "2026-W10"
week_start: "2026-03-08"
highlights:
  - title: "The Art of Doing Nothing"
    type: "article"
    link: "https://example.com/article"
    description: "A deep dive into intentional rest and digital minimalism"
    
  - title: "Watercolor Techniques"
    type: "video"
    video_id: "dQw4w9WgXcQ"
    description: "Professional demonstrates wet-on-wet technique"
    
  - title: "Lo-Fi Hip Hop Mix"
    type: "music"
    music_id: "2takcwFEeyY"
    description: "Perfect background soundtrack for creative work"
    
  - title: "Still Life Study"
    type: "artwork"
    image: "/watercolor/2026/3_3_2026_seagull.jpeg"
    description: "Watercolor study from this week's practice session"
---
```

### 2. **Highlight Types Supported**

#### **Article**
```yaml
- title: "Article Title"
  type: "article"
  link: "https://example.com/article"
  description: "Short description of why you found it interesting"
```
Displays as a clickable link with description.

#### **Video** (YouTube)
```yaml
- title: "Video Title"
  type: "video"
  video_id: "VIDEO_ID_FROM_YOUTUBE_URL"
  description: "Why you're highlighting this"
```
Displays embedded YouTube player (16:9 aspect ratio).
- To get video ID: Watch URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

#### **Music** (Spotify)
```yaml
- title: "Song/Album Title"
  type: "music"
  music_id: "SPOTIFY_TRACK_ID"
  description: "Why you're enjoying this"
```
Displays embedded Spotify player with full playback controls.
- To get Spotify ID: Open track → Share → Copy to clipboard → ID is the alphanumeric code

#### **Artwork** (Image)
```yaml
- title: "Artwork Title"
  type: "artwork"
  image: "/path/to/image.jpg"
  description: "Caption - dimensions, medium, notes, etc."
```
Displays image with caption below, perfect for your watercolor sketches.

### 3. **Highlights History Page**
Located at: `content/highlights/history.md`

This page automatically shows:
- **Current Week** section with a link back to home
- **Previous Weeks** placeholder (ready for archival)
- Responsive grid layout (adapts to screen size)

Visit: [`/highlights/history`](http://yoursite.com/highlights/history)

## How to Update Highlights (Each Week)

### **To Add/Update Current Week**

1. Open `content/highlights/_index.md`
2. Update the highlights array with your week's discoveries
3. Update the `week` field (e.g., `2026-W11`) and `week_start` date
4. Save and rebuild Hugo

### **To Archive a Week (Move to History)**

**Manual Process** (simple, takes 2 minutes):

1. **Backup current highlights** from `_index.md` front matter
2. **Create a new section** in a historical file OR update an archive structure
3. **Clear the highlights array** in `_index.md` and add new items

The layout automatically handles displaying historical weeks alongside current ones.

### **Automatic Archival Setup** (Optional Enhancement)

If you want **fully automatic** archival, we can set up:
- Weekly snapshots stored as data files
- A Hugo post-processing script
- Or a simple JSON-based archive system

For now, the manual approach gives you full control over what appears.

## File Structure

```
content/
  highlights/
    _index.md          ← Edit this each week with current highlights
    history.md         ← History page (auto-displays from _index)

layouts/
  highlights/
    single.html        ← Displays both current and history

static/css/
  highlights.css       ← All styling (full-width, responsive)

layouts/
  index.html           ← Updated to include highlights section
```

## Styling Features

### Home Page Highlights
- ✅ Full-width section spanning edge-to-edge
- ✅ Cards with hover effects
- ✅ Type badges for quick visual scanning
- ✅ Responsive on mobile (stacks vertically)
- ✅ Clean typography

### History Page
- ✅ Organized by week
- ✅ Responsive grid (auto-arranges on smaller screens)
- ✅ Each highlight displays its media (video, music, image)
- ✅ Browse and explore past discoveries

## Example Highlights (Already in Your File)

I've added 4 example highlights showing each type:

1. **Article** - with link
2. **Video** - with YouTube embed
3. **Music** - with Spotify embed
4. **Artwork** - with image and caption

You can copy these formats and replace with your own links/IDs.

## Pro Tips

### **Getting URLs/IDs**

**YouTube ID**: From URL `youtube.com/watch?v=**dQw4w9WgXcQ**`
```yaml
video_id: "dQw4w9WgXcQ"
```

**Spotify ID**: From shared URL `spotify.com/track/**2takcwFEeyY**`
```yaml
music_id: "2takcwFEeyY"
```

**Local Images**: Use paths relative to `static/`
```yaml
image: "/watercolor/2026/3_3_2026_seagull.jpeg"
```

### **Descriptions Best Practices**
- Keep 1-2 sentences max
- Explain *why* you found it interesting
- Context for viewers (e.g., "Study reference for color theory")

### **Weekly Workflow**
1. **Sunday Eve**: Review the week's discoveries
2. **Add highlights** to `_index.md`
3. **Update week number** and date
4. **Save & rebuild** - Hugo auto-generates everything

## Next Steps / Optional Automations

Want to enhance this further? Options:

1. **Auto-archive** - Script to move old highlights to timestamped files
2. **Randomize history** - Show random past highlight on home page
3. **Search history** - Add filtering to history page
4. **RSS feed** - Highlights as a separate RSS feed
5. **Social sync** - Pull from Twitter bookmarks, Spotify, etc. (requires backend)

## Troubleshooting

**Embeds not showing?**
- Check video_id/music_id format (no spaces)
- Verify image paths start with `/`

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Del)
- Run `hugo --minify` to rebuild CSS

**History page empty?**
- Manually update `history.md` front matter with dated highlights
- Or wait for me to set up auto-archival script

---

**That's it!** Your system is ready. Just edit the highlights array each week and Hugo handles the rest.
