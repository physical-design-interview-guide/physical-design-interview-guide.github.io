---
title: "What is the difference between cworst/rcworst and C / RC corners? Why do we need to consider different RC corners?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Traditional
Corners (Simplified View - often just called C corners initially): </b><span style="text-indent: -18pt;">Used for
short nets where resistance can be ignored or very less.</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Cworst
(Maximum Capacitance, Cmax):</b> Models process variations that maximize
interconnect capacitance (e.g., wider wires, thicker metal, smaller spacing,
higher dielectric constant). Often assumes minimum resistance for these
conditions (though not always explicitly linked). Used primarily for <i>setup
timing analysis</i> (longest path delay). <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Cbest
(Minimum Capacitance, Cmin):</b> Models process variations that minimize
interconnect capacitance (e.g., narrower wires, thinner metal, larger spacing,
lower dielectric constant). Often assumes maximum resistance. Used primarily
for <i>hold timing analysis</i> (shortest path delay).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>RC
Corners (More Detailed View):</b> These corners consider the interplay between
R and C more explicitly, especially the impact on crosstalk and longer nets
where resistance also dominates.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>RCworst
(Maximum Delay Corner):</b> Models conditions maximizing the overall RC
product, leading to the <i>slowest signal propagation</i>. This often involves
thinner wires (higher R) and potentially adjusted capacitance values (sometimes
minimum Cg - ground capacitance, minimum Cc - coupling capacitance, although
specifics vary by foundry). Used for <i>setup timing analysis</i>.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>RCbest
(Minimum Delay Corner):</b> Models conditions minimizing the overall RC
product, leading to the <i>fastest signal propagation</i>. This often involves
wider wires (lower R) and adjusted capacitance. Used for <i>hold timing
analysis</i>. Xtalk corner.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>(XTALK
Corners - sometimes separate):</b> Foundries may provide additional corners
specifically optimized for worst-case crosstalk analysis, often focusing on
maximizing coupling capacitance (Cc) relative to ground capacitance (Cg) or
total C. E.g., a corner maximizing Cc might be used for noise analysis or
delta-delay calculations in STA. RCbest itself is sometimes referred to as an
XTALK corner because minimum R and potentially higher Cc can lead to faster
aggressor signals causing more noise.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><a href="https://www.vlsi-expert.com/2013/04/parasitic-interconnect-corner-rc-corner.html?m=1">https://www.vlsi-expert.com/2013/04/parasitic-interconnect-corner-rc-corner.html?m=1</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -36.0pt;"><o:p>&nbsp;</o:p></p>