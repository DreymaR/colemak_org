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
