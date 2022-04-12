# colemak_org

The Colemak Community Web Pages
===============================

Web pages for [www.colemak.org][cmkorg]
---------------------------------------

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

TODO/WIP for [www.colemak.org][cmkorg]
--------------------------------------
A "☑" before text, a question or a section means it and all of it's sub-points (unless otherwise noted with a "❌️") are already present on [www.colemak.org][cmkorg], while a "❌️" means that it isn't on the site yet (unless otherwise noted with a "☑").

FAQ: LAYOUT LEARNING
--------------------

- ☑ "Which Colemak is better, Classical/Vanilla or Curl/DH?"
  - ❌️ The Curl-DH mod reduces lateral (inwards) travel for the index fingers, and helps the common HE bigram.

- ☑ "Is Colemak-DH the same as...?"
  - ❌️ "...DHm/DHk, the DH mod for ANSI/ISO vs matrix/ortho keyboards, or...?"

- ❌️ "Why is Z in the middle of the board on Angle-ANSI? Would DH work without that pesky confusing Angle mod?"
  - "Would using one ortho board and another ANSI Angle-modded board make it more confusing?"

FAQ: LAYOUT DESIGN
------------------
- ☑ "Isn't Workman/Norman/Whatever better than Colemak? Its documentation says so!"
  - Please don't trust any layout maker's own words. ❌️ There really are a lot of fairly clueless people, and even nutcases make layouts.

- ☑ "I want to tweak Colemak a little to suit my needs!"
  - ☑ Same-finger bigrams is a crucial factor in layout design! You may not notice them at first though.
    - ❌️ Some say that a SFB% of, say, 0.2% for one bigram – 1 in is so little that you won't notice it.
	
- ☑ "Wouldn't it be better to swap R and S on Colemak? It's so hard to learn!"
  - In the [Colemak Design FAQ][cmkfaq] Shai Coleman answers the R-S exchange question like this:
    - It allows for W to stay in the same place. It's more important to keep the potentially destructive Ctrl+W shortcut.
      - ❌️ (Close Window under MS Windows)
  - ❌️ There are some more answers [here](https://www.reddit.com/r/Colemak/comments/hnfk6e/is_there_a_good_reason_for_the_placement_of_r_and/)

- ❌️ "How can I get a layout up and running? I downloaded this installer..."
  - On Windows there are four main ways: MSKLC, [AHK][ahkcom], [EPKL][bigbag] and Registry/[SharpKeys][sharpkeysgit]. All have their strengths and weaknesses.
  - On Linux and MacOS, XKB and [KMonad][kmonadgit] (and the mostly deprecated [xmodmap][xmodmapwiki]). Differences.
  - Hardware implementation. Programmable board and QUICKIE.

❌️ FAQ: LAYOUT DESIGN ANALYSIS
---------------------------
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

❌️ FAQ: PRACTICAL LAYOUT QUESTIONS
-------------------------------
- "How can I train my fingers to get better at typing for instance `you`, then?"
  - At the [Big Bag Training page][bigbagtrain] there are tips for training hard n-grams. Try a list of words containing 'ou uo yo oy uy yu'!
  - If you have a programmable keyboard you could make a chord for hard n-grams. E.g., press 'yu' at the same time for 'you'.

- Where can I learn to type better and faster with a layout?
  - There are many options and people are different.
  - The best advice is to enjoy the experience!
  - See the [Big Bag Training page][bigbagtrain] for answers.
