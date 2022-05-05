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
<br>

DISCLAIMER ABOUT THIS README
----------------------------

- This README.md file isn't really meant for the public. 
- The colemak_org repository exists for the purpose of hosting the colemak.org web page, so that's what you should look at. 
- Most of the below is WIP notes used for the web page. 
- You may find something that hasn't made it to the page yet, if you search. 
- Mostly, just go view the Colemak Community page at [www.colemak.org][cmkorg]. Now shoo!
<br>

FAQ: LAYOUT LEARNING
--------------------

### ☑ "Should I learn Colemak? Is it worth it?"
### ☑ "What about Vim, or other programs that use shortcuts?"
### ☑ "Which Colemak is better, Classical/Vanilla or Curl/DH?"
### ☑ "Is Colemak-DH the same as...?"
### ☑ "Why is Z in the middle of the board on Angle-ANSI? Would DH work without that pesky confusing Angle mod?"
<br>

FAQ: LAYOUT DESIGN
------------------

### ☑ "Isn't Workman/Norman/Whatever better than Colemak? Its documentation says so!"
### ☑ "Which layouts _are_ better than Colemak?"
### ☑ "I want to tweak Colemak a little to suit my needs!"
### ☑ "Wouldn't it be better to swap R and S on Colemak? It's so hard to learn!"
### ☑ "Is mapping the CapsLock key to Backspace a part of the Colemak layout?"
<br>

FAQ: PRACTICAL LAYOUT QUESTIONS [WIP]
-------------------------------------

### ☑ "My right pinky gets tired! And typing `you` is uncomfortable! What's wrong?"
### ☑ "How can I train my fingers to get better at typing for instance `you`, then?"
	- At the [Big Bag Training page][bigtrn] there are tips for training hard n-grams. Try a list of words containing 'ou uo yo oy uy yu'!
	- If you have a programmable keyboard you could make a chord for hard n-grams. E.g., press 'yu' at the same time for 'you'.

### ☐ Where can I learn to type better and faster with a layout?
	- There are many options and people are different.
	- The best advice is to enjoy the experience!
	- See the Big Bag Training page for answers.

### ☐ "How can I get a layout up and running? I downloaded this installer..."
	- On Windows there are four main ways: [MSKLC][bigklc], [AHK][ahkdotcom], [EPKL][epklgi] and [Registry/SharpKeys][sharpkeys]. All have their strengths and weaknesses.</li>
	- On Linux and MacOS, [XKB][xkbcmk] and [KMonad][kmonadgit] (as well as the mostly deprecated [XModMap][xmodmapwi]). Differences.</li>
	- Hardware implementation. Programmable boards and the [QUICKIE](https://dreymar.colemak.org/typing-tricks.html#usb2usb) QWERTY-In-Colemak-Out USB device.</li>
<br>

FAQ: LAYOUT DESIGN ANALYSIS [WIP]
---------------------------------

### ☑ "I want to tweak Colemak a little to suit my needs!"
	- Same-finger bigrams is a crucial factor in layout design! You may not notice them at first though.
		- Some say that a SFB% of, say, 0.2% for one bigram – 1 in is so little that you won't notice it.
	- Beyond simple SFBs you have roll direction and redirects, skip-grams and whatnot. Here be dragons!
	- "In the world of layout design there is no beginner's luck, only beginner's mistakes" ~ DreymaR, 2021

### ☐ English bigram frequencies from [Norvig/Mayzner](https://blogs.sas.com/content/iml/files/2014/09/bigrams.txt):
	  ##: Bigram	##: Reverse 	Sum  	Ratio | - Comment
	=======================================================================================================
	- Common bigrams in English:
		  --------------------------------
		  TH: 3.556%	HT: 0.130%  	3.69%	 27   | - TH and HE are the two most common bigrams
		  HE: 3.075%	EH: 0.026%  	3.10%	118   | - HE is also relevant to Colemak-DH
		  ER: 2.048%	RE: 1.854%  	3.90%	  1.1 | - ER/RE is the most common bidirectional bigram
		  OU: 0.870%	UO: 0.011%  	0.88%	 79   | - OU is also relevant to Colemak YOU
	- Relevant to a Colemak R-S swap:
		  --------------------------------
		  ST: 1.053%	TS: 0.337%  	1.39%	  3.1 | - ST/TS is in the top 20 English bigrams
		  RS: 0.397%	SR: 0.006%  	0.40%	 66   | - RS is nicer to roll inwards
		  TR: 0.426%	RT: 0.362%  	0.79%	  1.2 | - TR/RT vs RS/SR isn't so important here?
		  SC: 0.155%	CS: 0.023%  	0.18%	  6.7 | - Colemak has SC/CS, WR/RW, SF/FS relevant SFBs
		  WR: 0.031%	RW: 0.013%  	0.04%	  2.4 |     - In sum, 0.24% relevant SFBs
		  SF: 0.017%	FS: 0.006%  	0.02%	  2.8 |     - Cmk total is 1.67% on the Colemakmods analyzer
		  CR: 0.149%	RC: 0.121%  	0.27%	  1.2 | - R-S swapped Cmk has CR/RC, FR/RF, WS/SW SFBs
		  FR: 0.213%	RF: 0.032%  	0.25%	  6.6 |     - In sum, 0.58% relevant SFBs
		  WS: 0.035%	SW: 0.024%  	0.06%	  1.5 |     - That's a factor 2.4 over Cmk's
	- The most frequent Colemak SFBs:
		  --------------------------------
		  SC: 0.155%	CS: 0.023%  	0.18%	  6.7 | - E, KN UE SC Y. are the most common SFBs on Colemak
		  UE: 0.147%	EU: 0.031%  	0.18%	  4.7 | - UE feels easier as an upper-to-middle-row SFB
		  NK: 0.052%	KN: 0.051%  	0.10%	  1.0 | - NK/KN is easily alt-fingered with index-middle fingers

### ☐ SteveP's SFB analysis using the colemakmods analyzer:
	- SFB frequencies on the Colemakmods analyzer:
		Colemak                     	1.669%
		Colemak (angle-cheat)       	1.789%
		Colemak-RS                  	2.034%
		Colemak-RS (angle-cheat)    	2.044% 
		
	- So the difference is bigger than 0.24% in this analysis
	- is that due to the difference between Norvig/Mayzner and the carpalx (which I use) datasets?
	- I've always thought that if people are determined to swap RS, then they should do a FL swap as well:
		Colemak-RSFL                	1.872%
		Colemak-RSFL (angle-cheat)  	1.763% (Improves hand balance too!)


[cmkgit]:	https://github.com/DreymaR/colemak_org (The GitHub address of this site)
[cmkorg]:	https://www.colemak.org (colemak.org - this site)
[cmkcom]:	https://www.colemak.com (The official colemak.com site)
[bigbag]:	https://dreymar.colemak.org (DreymaR's Big Bag of Keyboard Tricks)
[epklgi]:	https://github.com/DreymaR/BigBagKbdTrixPKL (DreymaR's EPKL program for Windows)

[cmkdes]:	https://colemak.com/Design (Link to the design article on the official Colemak site)
[desfaq]:	https://colemak.com/Design_FAQ (Link to the design FAQ on the official Colemak site)
[bigtrn]:	https://dreymar.colemak.org/training.html (Training page of DreymaR's Big Bag)
[bigext]:	https://dreymar.colemak.org/layers-extend.html (Extend page of DreymaR's Big Bag site)
[bigklc]:	https://github.com/DreymaR/BigBagKbdTrixPKL/tree/master/Other/MSKLC (DreymaR on MSKLC layout installs)
[xkbcmk]:	https://forum.colemak.com/topic/1438-dreymars-big-bag-of-keyboard-tricks-linuxxkb-files-included/ (The XKB Big Bag Forum post)
[bigxkb]:	https://github.com/DreymaR/BigBagKbdTrixXKB (DreymaR's Big Bag for XKB at GitHub)

[kmonadgit]: 	https://github.com/kmonad/kmonad (The GitHub address for KMonad)
[sharpkeys]: 	https://github.com/randyrants/sharpkeys (The GitHub address for SharpKeys)
[xmodmapwi]: 	https://wiki.archlinux.org/title/Xmodmap (Arch Wiki page for Xmodmap)
[ahkdotcom]: 	https://www.autohotkey.com/ (The official AutoHotKey site)

[@dreym]: https://github.com/DreymaR (DreymaR @ GitHub)
[@abith]: https://github.com/abrickinthehallway (abrickinthehallway @ GitHub)
