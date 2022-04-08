# colemak_org
# The Colemak Community Web Pages
## Web pages for [www.colemak.org][cmkorg]

[This repo][cmkgit] holds a GitHub web page for the user-controlled colemak.org domain.

The official Colemak site run by Colemak's creator Shai Coleman is at [colemak.com][cmkcom].

For now, the colemak.org pages will mostly be a short intro to the Colemak keyboard layout and a link page to various Colemak-related online resources.

For more info on mods, typing enhancements and learning, please see the [DreymaR's Big Bag of Keyboard Tricks][bigbag] pages.

This repo is maintained by [@DreymaR][@dreym] and [@abrickinthehallway][@abith], with the permission and cooperation of Shai Coleman.


[cmkgit]:	https://github.com/DreymaR/colemak_org (The GitHub address of this site)
[kmonadgit]:	https://github.com/kmonad/kmonad (The GitHub address for KMonad)
[sharpkeysgit]:	https://github.com/randyrants/sharpkeys (The GitHub address for SharpKeys)

[cmkorg]:	https://www.colemak.org (colemak.org - this site)

[cmkcom]:	https://www.colemak.com (The official colemak.com site)
[ahkcom]:	https://www.autohotkey.com/ (The official AutoHotKey site)

[cmkfaq]:	https://colemak.com/Design_FAQ (Link to the design FAQ on the official Colemak site)
[xmodmapwiki]: 	https://wiki.archlinux.org/title/Xmodmap (Arch Wiki page for Xmodmap)
[bigbag]:	https://dreymar.colemak.org (DreymaR's Big Bag of Keyboard Tricks)
[bigbagtrain]:	https://dreymar.colemak.org/training.html (Training page of DreymaR's Big Bag)
[extend]:	https://dreymar.colemak.org/layers-extend.html (Extend page of DreymaR's Big Bag site)
		 
[@dreym]:	https://github.com/DreymaR (DreymaR @ GitHub)
[@abith]:	https://github.com/abrickinthehallway (abrickinthehallway @ GitHub)

---

## FAQ: LAYOUT LEARNING

### ☑ "Should I learn Colemak? Is it worth it?"
- Yes. Well, you asked. On a page dedicated to Colemak...  ¯\(°_o)/¯
- Longer answer: If your only concern is speed then maybe not. You can get fast with most layouts, likely including the one you're using now.
- "Your fingers will thank you" goes the slogan. Colemak is very comfortable and once you've learnt it properly you'll nearly certainly enjoy it a lot.
- While learning though, it can be unpleasant at times. So be warned if you're an impatient type. There are different ways of learning, if you wish.
- If you're worried about having to use QWERTY on other computers, that's usually not a big problem. You can get by, and you can even maintain both.
- Consider that you'll probably type a lot in your lifetime. Learning a better way of doing that should easily be worth the while.
- In sum, nearly everyone we've heard from who gave it a dedicated attempt have ended up saying that learning an improved layout is worth it.

### ☑ "What about Vim, or other programs that use shortcuts?"
- For the majority of users, that's not a problem. Many worry beforehand, but we haven't heard anyone with a little experience complain.
- In Vim and most other programs, most of the shortcuts are by letter. The Yank command in Vim is on the <kbd>Y</kbd> key no matter where that is.
- Commands/shortcuts that are positional will take a little more getting used to. Some remap them, but many prefer not to after a while.
- There are other navigation ways than HJKL in Vim, and they may just be better overall. [Extend][extend] is a good example – it even stays with you outside Vim!

### ☑ "Which Colemak is better, Classical/Vanilla or Curl/DH?"
- It's quite individual really! There are many users of both variants, among them people who have tried both.
- The Curl-DH mod reduces lateral (inwards) travel for the index fingers, and helps the common HE bigram.
- To determine what you like best, decide how you feel about inwards stretches to D (QWERTY G) and H.
- Then compare with the downwards *curl* to V and M. If you prefer those, consider Cmk-DH.
- Individual preference and typing style (e.g., float vs grounding) may affect the choice.
- Both variants are well suited for both row-staggered and matrix/ortho keyboards.
- People have achieved 220+ WPM typing test results on both variants (Viper and Sophie).

### ☑ "Is Colemak-DH the same as...?"
- "...DHm/DHk, the DH mod for ANSI/ISO vs matrix/ortho keyboards, or...?"
- There are many names and letters floating around, let's hopefully clear this up a bit.
- The DH mod for Colemak is the result of SteveP's Mod-DH project from 2014. As its name says, it moves the D and H keys.
- It's a _Curl_ mod: It lets the home row curl down like the natural curve of fingers on a hand instead of stretching inwards.
- To be precise, 'Mod-DH' is the _project_. The 'Curl-DH' or just 'DH' _mod_ is the result. 'Colemak-DH' is the resulting _layout_.
- On a row-staggered board (any standard keyboard has a 1/4–1/2u row stagger), DH is accompanied by an _Angle_ mod.
- The geometrically descriptive name for Colemak-DH is therefore Colemak-CurlAngle or Cmk-CA.
- There is only one standard variant of Cmk-DH now, although a few have been tried out. It's the same as the original from 2014.
- Standard Cmk-DH has M on the home row and is thus also named Cmk-DHm. There's also a Cmk-DHk, the former standard (2017–2020).
- A common misconception is that the 'm' in DHm stands for 'matrix' as in matrix/ortho boards. This is wrong. I should know; I made that abbreviation.
- Some use Colemak-CurlAngle plus further Wide and Sym mods, which makes Colemak-CAWS. See [the Big Bag][bigbag].

### ☑ "Why is Z in the middle of the board on Angle-ANSI? Would DH work without that pesky confusing Angle mod?"
- "Would using one ortho board and another ANSI Angle-modded board make it more confusing?"

## FAQ: LAYOUT DESIGN

### ☑ "Which layouts are better than Colemak?"
  - Any answer depends a lot on modeling and scoring. Individual factors and preferences become important, as with vanilla vs DH.
  - Diminishing returns, infinite layout pool
  - More changes from QWERTY, more keys change hands, fewer shortcuts kept
  - Many layouts claiming superiority have more pinky movement! Also more pinky SFBs even with fewer total SFBs.
    - Colemak places the quite common `A` and `O` on pinkies, but has little pinky movement to the other rows.
  - Word of warning about implementation.

### ☑ "Isn't Workman/Norman/Whatever better than Colemak? Its documentation says so!"
  - Please don't trust any layout maker's own words. There really are a lot of fairly clueless people, and even nutcases make layouts.
  - Specifically, the Norman and Workman layout makers seem exceedingly proud of themselves and imnsho shouldn't be.
  - For one: Both these layouts have too high same-finger bigram (SFB) stats, and their fans downplay the problem.
  - Secondly, most users of these layouts that have studied layout design a little seem to be unhappy with their choice.
  - [Here's Ben Vallack talking about leaving Workman](https://www.youtube.com/watch?v=WVmJrZF9xwk&t=245s)

### ☑ "I want to tweak Colemak a little to suit my needs!"
  - Unless you are an experienced layout designer, consider that you probably don't know and understand enough to do it well.
  - On a properly optimized layout it's generally very hard to change even a small thing without breaking something more important.
  - You need to understand typing concepts such as grounding vs float, hand and finger balances, alternation vs rolls, lateral stretches etc.
  - You need to understand anatomical concepts such as finger strengths, interdependences and speeds, ulnar deviation etc.
  - Same-finger bigrams is a crucial factor in layout design! You may not notice them at first though.
    - Some say that a SFB% of, say, 0.2% for one bigram – 1 in is so little that you won't notice it.
  - Beyond simple SFBs you have roll direction and redirects, skip-grams and whatnot. Here be dragons!
  - Read the https://colemak.com/Design_FAQ and the accompanying https://colemak.com/Design first, to learn more.
  - "In the world of layout design there is no beginner's luck, only beginner's mistakes" ~ DreymaR, 2021

### ☑ "Wouldn't it be better to swap R and S on Colemak? It's so hard to learn!"
  - We get this one a lot from newcomers! You won't believe how common it is!
  - [Here's a funny video comment for you](https://www.youtube.com/watch?v=4qLkq6jYnJM)
  - See the "I want to tweak Colemak..." question above first.
  - Simply swapping R and S on Colemak is definitely not recommended! It leads to higher same-finger bigram frequency and other issues.
  - Ease of learning is a design property of Colemak, but should not be so at the cost of too much layout quality.
    - Funnily enough, other layouts move lots of keys between hands and swap them around. Their learners don't complain.
    - Colemak, on the other hand, has this one somewhat hard-to-learn key swap, and lots of learners complain since it's just that one.
  - If you make a change to Colemak that makes it worse, you're fixing a temporary problem with a permanently inferior solution!
  - In the [Colemak Design FAQ][cmkfaq] Shai Coleman answers the R-S exchange question like this:
    - It significantly reduces same-finger. This is especially important as it affects the ring finger which is the least dexterous finger.
      - (e.g. try typing WSWSWS fast on QWERTY)
    - It allows for W to stay in the same place. It's more important to keep the potentially destructive Ctrl+W shortcut.
      - (Close Window under MS Windows)
  - Since you care about initial learning, consider that hitting Ctrl+S (Save) by mistake is far less destructive than Ctrl+W (Close window).
  - RS occurs 0.40% of the time; common for a bigram. SR occurs 0.006% of the time. It's better to roll this bigram inwards than outwards.
  - The ST bigram too is better as it is in Colemak, and more common than TS.
  - There are some more answers [here](https://www.reddit.com/r/Colemak/comments/hnfk6e/is_there_a_good_reason_for_the_placement_of_r_and/)

### ☑ "Is mapping the CapsLock key to Backspace a part of the Colemak layout?"
  - When the Colemak layout was introduced, the layout was indeed bundled with this nifty trick.
  - However, treating layout components as modules works better. CapsLock key behavior should be treated separately from letter layout.
  - This is the case in Linux XKB for instance, where you can select what the CapsLock key does independently from your layout choice.
  - Furthermore, several tricks and tools have been added to your options since the birth of Colemak.
  - Consider using the Caps key as a powerful **[Extend layer modifier][extend]**!
  - With Extend, you'll keep both Back and CapsLock in handy locations. It's also easy to hit Ctrl+Back with Extend, and so much more.
  - In some implementations, the your Caps key can even be both Back on tap *and* the Extend mod on hold, as a Tap-or-Mod key.

### ☑ "How can I get a layout up and running? I downloaded this installer..."
  - On Windows there are four main ways: MSKLC, [AHK][ahkcom], [EPKL][bigbag] and Registry/[SharpKeys][sharpkeysgit]. All have their strengths and weaknesses.
  - On Linux and MacOS, XKB and [KMonad][kmonadgit] (and the mostly deprecated [xmodmap][xmodmapwiki]). Differences.
  - Hardware implementation. Programmable board and QUICKIE.

## FAQ: LAYOUT DESIGN ANALYSIS

- [English bigram frequencies from Norvig/Mayzner](https://blogs.sas.com/content/iml/files/2014/09/bigrams.txt)
  - Common bigrams in English:

    Bigram	|Sum	|Reverse|Sum	|Combined sum	|Ratio	|Comment
    ------	|---	|-------|---	|------------	|-----	|-------
    TH		|3.556%	|HT	|0.130%	|3.69%		|27	|TH and HE are the two most common bigrams
    HE		|3.075%	|EH	|0.026%	|3.10%		|118	|HE is also relevant to Colemak-DH
    ER		|2.048%	|RE	|1.854%	|3.90%		|1.1	|ER/RE is the most common bidirectional bigram
    OU		|0.870%	|UO	|0.011%	|0.88%		|79	|OU is also relevant to Colemak YOU

  - Relevant to a Colemak R-S swap:

    Bigram	|Sum	|Reverse|Sum	|Combined sum	|Ratio	|Comment
    ------	|---	|-------|---	|------------	|-----	|-------
    ST		|1.053%	|TS	|0.337%	|1.39%		|3.1	|ST/TS is in the top 20 English bigrams
    RS		|0.397%	|SR	|0.006%	|0.40%		|66	|RS is nicer to roll inwards
    TR		|0.426%	|RT	|0.362%	|0.79%		|1.2	|TR/RT vs RS/SR isn't so important here?
    SC		|0.155%	|CS	|0.023%	|0.18%		|6.7	|Colemak has SC/CS, WR/RW, SF/FS relevant SFBs
    WR		|0.031%	|RW	|0.013%	|0.04%		|2.4	|In sum, 0.24 relevant SFBs
    SF		|0.017%	|FS	|0.006%	|0.02%		|2.8	|Cmk total is 1.67% on the Colemakmods analyzer
    CR		|0.149%	|RC	|0.121%	|0.27%		|1.2	|R-S swapped Cmk has CR/RC, FR/RF, WS/SW SFBs
    FR		|0.213%	|RF	|0.032%	|0.25%		|6.6	|In sum, 0.58% relevant SFBs
    WS		|0.035%	|SW	|0.024%	|0.06%		|1.5	|That's a factor 2.4 over Cmk's

  - The most frequent Colemak SFBs:

    Bigram	|Sum	|Reverse|Sum	|Combined sum	|Ratio	|Comment
    ------	|---	|-------|---	|------------	|-----	|-------
    SC		|0.155%	|CS	|0.023%	|0.18%		|6.7	|E, KN UE SC Y. are the most common SFBs on Colemak
    UE		|0.147%	|EU	|0.031%	|0.18%		|4.7	|UE feels easier as an upper-to-middle-row SFB
    NK		|0.052%	|KN	|0.051%	|0.10%		|1.0	|NK/KN is easily alt-fingered with index-middle fingers
  
  - SteveP's SFB analysis using the colemakmods analyzer:
    <table>
	<tr><td>Colemak</td>			<td>1.669%</td></tr>
	<tr><td>Colemak (angle-cheat)</td>	<td>1.789%</td></tr>
	<tr><td>Colemak-RS</td>			<td>2.034%</td></tr>
	<tr><td>Colemak-RS (angle-cheat)</td>	<td>2.044%</td></tr>
    </table>

    - So the difference is bigger than 0.24% in this analysis
      - is that due to the difference between Norvig/Mayzner and the carpalx (which I use) datasets?
    - I've always thought that if people are determined to swap RS, then they should do a FL swap as well:
      <table>
	<tr><td>Colemak-RSFL</td>		<td>1.872%</td></tr>
	<tr><td>Colemak-RSFL (angle-cheat)</td>	<td>1.763% (Improves hand balance too!)</td></tr>
      </table>

## FAQ: PRACTICAL LAYOUT QUESTIONS

### ☑ "My right pinky gets tired! And typing `you` is uncomfortable! What's wrong?"
  - Many QWERTY typists hardly use their right hand pinky, as the rare semicolon sits in its home row position and some type P with their ring finger.
  - These typists may need to build up their finger strength a little to type well on Colemak. Pinky fu! &thinsp;🥋
  - There are layouts that deprioritize the pinkies more than Colemak. These generally aren't so good, however.
  - There are several highly optimized layouts that have a heavier pinky load than Colemak.
  - The `you` trigram in particular, isn't so great on Colemak. Trust me, most common n-grams are great. 👍
    - This one has a so-called `redirect`, which means that it changes direction (RL then LR). That's not so comfortable.
    - Furthermore, it uses both the weak pinky and the codependent ring finger. You just have to train it!

### ☑ "How can I train my fingers to get better at typing for instance `you`, then?"
  - At the [Big Bag Training page][bigbagtrain] there are tips for training hard n-grams. Try a list of words containing 'ou uo yo oy uy yu'!
  - If you have a programmable keyboard you could make a chord for hard n-grams. E.g., press 'yu' at the same time for 'you'.

### ☑ Where can I learn to type better and faster with a layout?
  - There are many options and people are different.
  - The best advice is to enjoy the experience!
  - See the [Big Bag Training page][bigbagtrain] for answers.
