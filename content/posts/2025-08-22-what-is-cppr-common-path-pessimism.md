---
title: "What is CPPR (Common Path Pessimism Removal)? How is crosstalk considered in it for setup and hold?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">OCV analysis (like AOCV/POCV or simple derating)
applies different delay values for 'early' (fast) and 'late' (slow) conditions.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->For a setup check, the launch clock path uses
late delays, and the capture clock path uses early delays. For a hold check,
it's reversed. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->However, both clock paths often share a common
segment starting from the clock root before diverging. Applying both early and
late derates simultaneously to this <i>same physical common path</i> introduces
artificial pessimism because the common path cannot physically be both fast and
slow at the exact same instant.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Solution (CPPR): STA tool calculates delay
difference of</b> this common path by applying late and early derate. And this
delay difference is credited in slack. Called CPPR. It helps in relaxing timing
removing unnecessary pessimism.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Crosstalk Consideration in CPPR:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Crosstalk Impact on Paths:</b> Crosstalk
delay/noise <i>is</i> considered separately during the main timing calculation
for both the data path and the clock paths (launch and capture) <i>before</i>
CPPR is applied. Crosstalk can add delay (hurting setup, helping hold) or speed
up signals (helping setup, hurting hold) depending on the relative switching
directions of victim and aggressor nets.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Interaction:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt;"><b>For Setup Analysis:</b><br />
Crosstalk can add extra delay, and STA tools often double-count it on both
launch and capture paths.<br />
This leads to an overly pessimistic result (sometimes assuming CRPR = 0).<br />
<br />
<b>For Hold Analysis:</b><br />
Since hold checks happen on the same clock edge, the crosstalk effect is
identical for both launch and capture paths.<br />
This allows the extra pessimism to be removed, giving a more accurate result.<br style="mso-special-character: line-break;" />
<!--[if !supportLineBreakNewLine]--><br style="mso-special-character: line-break;" />
<!--[endif]--><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->CPPR
Overview: <a href="https://vlsi.pro/common-path-clock-reconvergence-pessimism-removal/" target="_blank">https://vlsi.pro/common-path-clock-reconvergence-pessimism-removal/</a><o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>