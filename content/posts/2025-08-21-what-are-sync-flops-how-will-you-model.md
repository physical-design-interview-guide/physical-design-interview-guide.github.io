---
title: "What are sync flops ? How will you model them?  what all are setup and  hold check required?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="background: white; font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="background: white; text-indent: -18pt;">They are used when signal crosses asynchronous clock
domains.</span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">Sync Flop added between two flops operating on
asynchronous clocks to avoid metastability.<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">The main responsibility of a synchronizer is to allow
sufficient time such that any meta-sable output can settle down to a stable
value in the destination clock domain.<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">Generally 2 stage synchronizer is sufficient to remove all
likely meta-stability.<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">Sync flops operating on destination clock domain.<o:p></o:p></span></p>

<p class="MsoNormal"><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;"><o:p>&nbsp;</o:p></span></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEjy_hnE9pMDDyyL3ogOdbPe6uO7Cf3cdizMieGs65EHG7vefcTY9g9EzZVI-1ZW4kcS2lydMqmb2ZD7ic3mMX9mQnd4GEQXdGx0c8eblRxcdbDxi7OaMNyusq0Wo5duYgph1_cvmQRcY8sXHAhR95tJxllF8-CqiiNyiRU-_S45rhsjfTPPyXSe276GYlWd" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="289" data-original-width="703" height="132" src="https://blogger.googleusercontent.com/img/a/AVvXsEjy_hnE9pMDDyyL3ogOdbPe6uO7Cf3cdizMieGs65EHG7vefcTY9g9EzZVI-1ZW4kcS2lydMqmb2ZD7ic3mMX9mQnd4GEQXdGx0c8eblRxcdbDxi7OaMNyusq0Wo5duYgph1_cvmQRcY8sXHAhR95tJxllF8-CqiiNyiRU-_S45rhsjfTPPyXSe276GYlWd" width="320" /></a></div><br /><p></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;"><span style="mso-spacerun: yes;">&nbsp;</span>the first flip-flop
samples the asynchronous input signal into the destination clock domain.<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">Second stage waits for a full destination clock cycle to
permit any meta-stability on the stage-1 output signal to decay,<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;"><span style="mso-spacerun: yes;">&nbsp;</span>then the stage-1
signal is sampled by the same clock into a second stage flip-flop, with the
intended goal that the stage-2 signal is now a stable and valid signal
synchronized into the destination clock domain<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: 115%; margin-bottom: 0cm; margin-left: 18.0pt; margin-right: 0cm; margin-top: 0cm; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="background: white; font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-highlight: white;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><span style="background: white; mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-highlight: white;">Generally no combo logic is prefered in RTL between two
asynchronous flops.<o:p></o:p></span></p>

<p class="MsoNormal" style="margin-left: -32.05pt;"><span style="mso-spacerun: yes;">&nbsp;</span><o:p></o:p></p>