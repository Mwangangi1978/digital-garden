---
title: "ABOUT THIS WEBSITE"
date: 2026-01-01T15:21:27+03:00          # publication date
lastmod: 2026-01-01T15:21:27+03:00      # intentional update
status: draft

---

# beginning

For a considerable chunk of my short adult life, I've viewed personal websites as just an online location to splat your resume onto for potential employers, investors, and the rare LinkedIn suitor. This might be because I am heavily invested in the tech community where not having a portfolio website is kind of a red flag. No, no, no, a pink-beige-ish flag, maybe. I've used other platforms to share my thoughts: Substack for written pieces, and a high school stint with Google Blogs that was, frankly speaking, not very enjoyable. So I've always kept the professional and personal separate.

But a recent experience changed that.

It was mid-November 2025, and I was in distress in the High Dependency ward that reeked of bleach and latex. I had a very heavy white blanket, and I was looking up at the ceiling, squinting hard to avoid the harsh lighting that was making my headache worse. To my right was a heart monitor that couldn't seem to stop beeping as the red alarm on top of the slightly vintage machine blinked.

My heart rate was rising rapidly, and I couldn't seem to fill my lungs with any air. I was struggling to breathe. I wanted to use my hands to scoop the oxygen from the air and shove it down my trachea, but we all know that's not how it works.

Soon, I was panicking. Everything the nurses said seemed to be in [Penguinese](https://pingu.fandom.com/wiki/Penguinese), and I wanted to respond with "Noot Noot," but I knew it was just my head playing tricks on me. At that moment, I started thinking this was the end of the road for me. I thought about all the happy times I'd had. The people I said I would reply to, but who had been ghosted in my inbox for months. What colour the lining of my casket would be (I hoped it was a soft pink).{{<sidenote>}}Penguinese (also known as Pinguish) is a fictional language spoken by the characters in [Pingu](https://pingu.fandom.com/wiki/Pingu_(TV_series)). It is uninterpretable to the audience leaving the dialogue up to the viewers imagination.{{</sidenote>}}


As I was slowly approaching the event horizon of unconsciousness, I thought about how people would remember me.

The people who knew me—family, friends, my barber who I've had since I was 8—maybe they would remember me fondly. But what about those who didn't know me? Maybe they would look at my socials, only to hit a dead end since nearly all of them are private. Maybe they would check my LinkedIn and think, "Hmm, this guy was decent, but I don't really know what he was like as a person. What he believed in. Or whether he was team Jeremiah or team Conrad." ( I think all 3 main characters should stay very far away from each other.)

Maybe they'd find the link to my Substack and discover it unavailable because Substack shut down during the Great AI Depression of 2032, and my personal website is just a detailed LinkedIn profile.

Well, I'm sure you're wondering: Denis, surely the seven minutes you had before kicking the bucket were up? Sincerely, I don't know how long it took, but the great news is I woke up a few hours later, and I was fine. (I guess I'd been a tad dramatic.)

Once I woke up, I pondered on that moment. The realisation that my digital presence wouldn't tell the full story of who I was, not really. And I decided I would rebuild my website into a digital garden: somewhere that would not only highlight my academic or professional life but also my views as a person, my short stories, ADHD-fueled research on topics like who came up with the idea of pardoning a few turkeys and then massacring their relatives as a way to give thanks (I was watching Free Birds when I thought of this).

During my recovery from GBS, I decided to make it my personal goal to work on this.

And no, I am not going to use React—especially with the recent vulnerabilities and the simple fact that I wanted something that would last long after my time here. I was very inspired by the simplicity and practicality of Gwern.net, so I decided to find an alternative. And like many other individuals in our free-thinking world, I decided to consult a professional.

"Hey Grok…"

I'm just kidding. Actually, no—

"Gemini, I need help with…"

I'm not giving you my juicy prompt (though I did ask Chat GPT to generate one for Gemini). The results were helpful, and Gemini recommended a simple, lightweight, and extremely fast framework for static websites: Hugo. With further investigation, I discovered it was the perfect fit for my use case. Read more about the technical implementation of this site in the development section.

So what's the purpose of this site? I want it to be a reflection of myself—a second brain and, hopefully one day, a Library of Alexandria featuring my thoughts , my adventures , my passions, and those of my generation. Perhaps I'm afraid of forgetting or maybe I'm looking forward to rediscovering all . Hopefully when I'm 80 years old and in a retirement home I'll re-read all of this and shout, "Wawaweewa, it’s a very nice\!"

# design philosophy

## Wes Anderson

If you are familiar with [Wes Anderson](https://en.wikipedia.org/wiki/Wes_Anderson) and didn't immediately spot his influence on the landing page, then I have done a good job of creatively stealing from him.

My introduction to Anderson was [The Grand Budapest Hotel](https://youtu.be/1Fg5iWmQjwk?si=FR_6fVvTLn2a7uns)—essentially a story about the act of storytelling itself. I was struck by the dreaminess of the production; it didn't feel like a story happening now, but rather a recollection. This was evident in the way Zero narrated his life, painting it with the bias and saturation we all apply when remembering our 'glory days.'

The set design and cinematography cement this feeling. His films have a distinct surrealness; the colours pop in a way reality rarely permits. His signature use of symmetry, centreing shots with obsessive precision, forces a first-person perspective that pulls you directly into his world. It feels like a lucid dream.  


{{< figure src="/images/wesanderson.jpg" caption="Wes Anderson, illustrated by [Jiaping Chen](https://jiapingchendesign.com/Wes-Anderson)" >}}

Why let this influence my digital garden? Two reasons.

First, his 'remember this' approach to filmmaking is exactly what I want to achieve here: Recollection.  
Second, Anderson respects the viewer's eye. He rarely relies on hidden surprises; he presents information clearly, front and centre. This is the hardest thing to do in design: letting people know exactly what they need to know, right when they need to know it, without losing their attention.

The specific elements I have adopted:

* The Palette: Prominent, exaggerated colours (used sparingly as highlight colors to preserve readability).  
* The Tableau: An emphasis on presenting the message with absolute clarity.

## Gwern.net

Many in the tech community are familiar with Gwern Branwen and his eponymous website, [Gwen.net](http://Gwern.net). For the uninitiated, Gwern is an anonymous American researcher widely respected for his exhaustive analysis of artificial intelligence and his prescient predictions regarding the rise of LLMs long before they entered the public lexicon.

While Wes Anderson provides the aesthetic of this site, Gwern provides the architecture. Gwern.net is a masterclass in documentation. It appears, at first glance, to be a simple directory of text files. But beneath that deceptive simplicity lies a rigorously engineered system designed for one thing: frictionless learning.

His implementation of 'hover-popups'—where hovering over a link displays a summary or the linked content itself—allows readers to dive deep without ever leaving the page. His use of tagging and bidirectional backlinks creates a 'web' of knowledge rather than a linear stream. It is a site that respects the reader's time by delivering information clearly, efficiently, and contextually.

{{< figure src="/images/gwern.png" caption="Gwern Branwen's website [Gwern.net](https://gwern.net/)" >}}


The structural pillars I have adapted from [Gwern.net](http://Gwern.net):

* Wiki-Style Layout: A familiar, text-first structure that prioritises readability over flash.  
* Hover Pop-ups: A commitment to providing context immediately, without forcing the user to open a dozen new tabs.  
* Radical Documentation: The belief that the process of building the site is just as valuable as the content itself.

If Wes Anderson teaches us how to see, Gwern teaches us how to know.

## Butterick’s Practical Typography

During the design phase of this website, I spent much of my time learning typography, mostly through [Matthew Butterick's Practical Typography.](https://practicaltypography.com/)

Why does typography matter enough to warrant this deep dive? Let me show you.

Exhibit A:  
>Because I had dropped out and didn't have to take the normal classes, I decided to take a calligraphy class to learn how to do this. I learned about serif and sans serif typefaces, about varying the amount of space between different letter combinations, about what makes great typography great. It was beautiful, historical, artistically subtle in a way that science can't capture, and I found it fascinating.
>
>None of this had even a hope of any practical application in my life. But 10 years later, when we were designing the first Macintosh computer, it all came back to me. And we designed it all into the Mac. It was the first computer with beautiful typography. If I had never dropped in on that single course in college, the Mac would have never had multiple typefaces or proportionally spaced fonts. And since Windows just copied the Mac, it's likely that no personal computer would have them. If I had never dropped out, I would have never dropped in on this calligraphy class, and personal computers might not have the wonderful typography that they do.  
<cite>—Steve Jobs, Stanford Commencement Speech, 2005<cite>


Jobs' calligraphy class changed computing forever. But if you think typography is just about aesthetics and doesn't really matter in practical terms, let me take you back to November 2000.

Exhibit B: [The Butterfly Ballot](https://en.wikipedia.org/wiki/2000_United_States_presidential_election_recount_in_Florida)

It had been 19 days since the election, and a winner still hadn't been declared. The culprit? A ballot design flaw in Palm Beach County, Florida. The "butterfly ballot" had punch spaces misaligned with the rows of candidate names, causing some voters to accidentally vote for the wrong candidate. George W. Bush was declared the winner of Florida—and ultimately the presidency—by a 537-vote margin. The [Palm Beach Post](https://edition.cnn.com/2001/ALLPOLITICS/03/11/palmbeach.recount/) later determined that the ballot design cost Al Gore the election.

Typography matters. By a lot.  
  
That's why I've tried my best to hold this website to the same typographical standards as any professionally published material. My goal is to enhance your reading experience—improving attention span and comfort while preventing the subtle biases that poor typography can introduce.

I learned most of what I know from [Butterick's Practical Typography](https://practicaltypography.com/), and I strongly encourage you to read it if you want to improve the quality of your documents. The book has been the single most important resource in designing this webpage, and you'll notice I've "borrowed" generously from the page layout of his web-based book. (Imitation is the sincerest form of flattery, right?)

One small criticism: the book doesn't delve deeply into distinguishing good fonts from bad ones. It jumps straight to recommending professional fonts—which is right, of course—but I'm certain not all professional fonts are created equal. Some are deceptive. I was left craving more guidance on that front. Still, what Butterick does provide is invaluable, and I'm grateful for it.


{{< figure src="/images/butterick.webp" caption="[Matthew Butterick's Practical Typography](https://practicaltypography.com/)" >}}


## Typography Constitution

The visual syntax of this website is not a matter of chance; it is strictly governed by the Typographic Constitution. This living document codifies the laws of the digital garden—from the 24px base scale to the specific hex codes of the Zissou Slate—ensuring that design decisions remain durable, consistent, and intentional.

## Digital Garden vs Digital Stream

A few months ago, I decided to quit Substack. Initially, I loved it—everyone was sharing so much, and I too jumped onto the orange wagon. For a brief moment, I had fun, but soon the novelty wore off. Something felt missing. I listened to my gut and left the Substack community behind, initially blaming the ‘pretentious intellectualism culture’ that I, too, had begun to get drawn into.

But as I researched for this section, I discovered the real reason: I was trying to garden in a stream.

### The Rabbit Hole

My research sent me down a fascinating path. I started with [Maggie Appleton's A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history#a-brief-history-of-digital-gardens), which led me to [Mike Caufield's essay The Garden and the Stream: A Technopastoral](https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/), which ultimately brought me to Vannevar Bush's 1945 essay As We May Think. Each link opened new connections, new insights—I was experiencing a digital garden in action while learning about digital gardens.

The dictionary definitions of "digital garden" and "digital stream" don't capture their essence. To understand them, you need to see how they work in practice.

### The Digital Garden: A Web of Knowledge

To understand what a digital garden is, let's borrow from Vannevar Bush's vision of the memex, a theoretical machine for organising human knowledge:  

>The owner of the memex, let us say, is interested in the origin and properties of the bow and arrow. Specifically he is studying why the short Turkish bow was apparently superior to the English long bow in the skirmishes of the Crusades. He has dozens of possibly pertinent books and articles in his memex.  
>First, he runs through an encyclopedia, finds an interesting but sketchy article, leaves it projected. Next, in  history, he finds another pertinent item and ties the two together. Thus he goes, building a trail of many items. Occasionally, he inserts a comment of his own, either linking it into the main trail or joining it by a side trail to a particular item. When it becomes evident that the elastic properties of available materials had a great deal to do with the bow, he branches off on a side trail which takes him through textbooks on elasticity and tables of physical constants. He inserts a page of longhand analysis of his own. Thus he builds a trail of his interest through the maze of materials available to him.
<cite>—Vannevar Bush, As We May Think, 1945<cite>

Notice what's happening here: information is connected spatially, not chronologically. The researcher builds trails, creates branches, links related ideas across time and topic. There's no single path through the material—each visitor can explore the web differently. The content grows richer as more connections are made. A good example of a digital garden is Wikipedia, where articles link to related articles, creating an interconnected web of knowledge that anyone can traverse in their own unique way.

### The Digital Stream: A Single-File Narrative

Now imagine a different scenario. You're scrolling through your Substack feed, and you see a post titled "Why Turkish Bows Dominated Medieval Warfare." You read it, maybe leave a comment, then scroll on.

The next day, the algorithm shows you another post: "The Physics of Archery: A Deep Dive." You read this too, but the author doesn't reference yesterday's post—they might not even know it exists. The posts float past you in reverse chronological order, governed by when they were published and what the algorithm thinks you'll engage with.

A week later, you want to revisit that Turkish bow post, but it's buried under dozens of new articles. The comments you left are frozen in time, attached to that specific moment. If you want to build on these ideas in your own writing, you start from scratch with a new post that enters the stream, time-stamped and alone.

This is the digital stream. It presents us with a single, time-ordered narrative with our own experience at the centre. As your experience gets imbued into the stream, context collapses—to understand any post, you need to reconstruct when and why it was written. The stream becomes your context.

Think of your TikTok For You page, your Twitter feed, your Instagram stories. The content is primarily governed by chronology, location, and algorithmic curation based on engagement. Links are used not to build knowledge webs but to provide receipts—to back up arguments rather than challenge them or synthesise new understanding. The stream flows in one direction: forward, always forward.

### The Fundamental Difference

The digital garden is a library of interconnected, often conflicting information that grows into something bigger than any single narrative. There's no prescribed path through the space—everyone curates their own journey. Your work connects to another's not to agree or disagree, but to iterate and contribute to the collective pool of knowledge.

The stream, by contrast, is performative and isolated. Each post exists as a discrete unit, timestamped and context-dependent. The flow is unidirectional. Yesterday's insights become today's buried posts.

### Why the Stream Matters (And Where It Falls Short)

The stream is still vitally important. A space for people to express themselves and share their immediate thoughts has been essential to modern discourse and democracy. I'm not demonising the stream.

But I do recognise its limitations. Vannevar Bush cited this in the same paper:

Mendel's concept of the laws of genetics was lost to the world for a generation because his publication did not reach the few who were capable of grasping and extending it. 

This sort of catastrophe is undoubtedly being repeated all about us as truly significant attainments become lost in the mass of the inconsequential.

The internet is increasingly viewed as a place to promote our ideas—mostly to people already in our stream—rather than a place to extend our collective knowledge. On Substack, I found myself reading articles that reinforced particular narratives, all flowing in the same direction. I was consuming, not connecting.

That's why I left.

### Why I Chose a Digital Garden

A digital garden offers several advantages I discovered through Maggie Appleton's research:

1. No final version \- Gardens grow. Anything published can and should be reviewed, revised, and expanded upon. Unlike the stream where posts are time-stamped monuments, gardens are living documents.  
2. Learning in public \- On many blogs, research and thinking happen in private, then get published as polished final products—increasing the pressure for perfection. In a garden, you share what you learn as you learn it, giving readers insight into your thinking process. You plant seeds, tend them, let them grow.  
3. Room for imperfection with mutual respect. Readers understand that not everything is finished. Writers include epistemic status indicators showing how developed an idea is and how much effort was invested. This creates a culture of collaborative learning rather than performative expertise.  
4. Ownership and control. I have full control over my content. If a platform sinks, my garden doesn't capsize with it. I can add features unrestricted by platform limitations, experiment with design, and evolve the space as I evolve.  
5. Reinforced learning. When creating associations between articles, I find myself revisiting old pieces to link them to new content. This creates reinforced learning—I'm not just writing, I'm connecting, reconsidering, deepening understanding.

  
Finally, Bush included a vision that resonates deeply with me:

There is a new profession of trailblazers, those who find delight in the task of establishing useful trails through the enormous mass of the common record. The inheritance from the master becomes not only his additions to the world's record but, for his disciples, the entire scaffolding by which they were erected.  
—Vannevar Bush, As We May Think, 1945

I want to be part of these trailblazers. Not just adding to the stream of content flowing past, but contributing meaningfully to humanity's knowledge base—building trails that others can follow, extend, and branch off from in unexpected directions.

That's why this site exists as a garden, not a stream. 

You'll see plenty of my personal opinions here, but I aim to provide context for my perspective through epistemic disclosure and footnotes. 

# writing

## What I Write

I aspire to collect, document, and learn about as many topics as I can. My writing isn't confined to tech, economics, or philosophy—though those do feature prominently. Instead, it spans wherever curiosity leads me.

My writing is influenced by my environment, interesting things I find on the internet and in books, problems I think should be looked into, and gaps in my own knowledge or skills that I want to address. These influences manifest in different forms: works of fiction like short stories (most common), screenplays, and poems, as well as non-fiction pieces including quick notes, essays, book reviews, and literature reviews.

## Publication Process

One of the reasons I built this website as a digital garden was to learn in public. I envision this page as an online notebook where I can jot down my thoughts as they develop. You'll find pieces at various stages of completion—some rough, some unfinished, occasionally radical—simply because I'm at the very start of exploring that topic.

But here's the thing: you can follow along as I do more research and extend what's already here. I believe you'll gain insight into my thought process by watching me publish as I go, rather than waiting until all the research and critical thinking is complete.

Because I'm often writing on-the-fly, pushback and feedback are welcome through the anonymous feedback form.

To help you identify where each piece stands—how much research I've done and how confident I am in its conclusions—I use tags and epistemic statuses, which I explain below.

## Navigating My Writing

This digital garden is topology-based, meaning you can enter at any point and follow trails based on your own interests and understanding. If you need a starting point, visit the central index on the blog page.

I employ two systems to organize and contextualize my work: tags and epistemic statuses.

### Tags

Tags help both of us—me to organize, you to filter. I use two types:

Visible tags (shown on each article):

* Upload date – When the piece was first published  
* Last intentionally updated – When I last made substantial changes  
* Writing status: Note (rough thought), Draft (writing in progress), Complete (finished & reliable), Archived (outdated)

Invisible tags (hidden on article pages but available for filtering in the central index):

* Category tags: Social, Economic, Political, Technical  
* Fiction type: Short story, Screenplay, Poetry  
* ADR (Architecture Decision Record) – Technical/design choices for this website

Most tags remain invisible to reduce visual clutter, but you can use them to filter articles in the central index. For more on my tagging philosophy, see "Designing Digital Garden Metadata."

### Epistemic Statuses

I was inspired to use epistemic statuses by Devon Zuegel, and I strongly recommend reading his article ["Epistemic Statuses Are Lazy, and That Is a Good Thing."](https://devonzuegel.com/epistemic-statuses-are-lazy-and-that-is-a-good-thing)

According to the Urban Dictionary:

The epistemic status is a short disclaimer at the top of a post that explains how confident the author is in the contents of the post, how much reputation the author is willing to stake on it, what sorts of tests the thesis has passed. It should give readers a sense of how seriously they should take the post.

Here are some examples from the [Effective Altruism Forum](https://forum.effectivealtruism.org/posts/bbtvDJtb6YwwWtJm7/epistemic-status-an-explainer-and-some-thoughts#Valuable_information_to_list_in_an_epistemic_status):

Epistemic status: personal observations, personal preferences extrapolated. Uses one small random sample and one hard data source, but all else is subjective.

Epistemic status/effort: I spent only around 5 hours on the work test and around 3 hours later on editing/adapting it, though I happened to have also spent a bunch of time thinking about somewhat related matters previously.

Use epistemic statuses to your advantage. If a piece has low status and I express low confidence, feel free to skip it or take it with appropriate skepticism.

*Note: I do not add epistemic statuses to works of fiction and Architecture Decision Records.*

