---
title: "Where should clock gaters be placed (near sink or source)?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">If you place ICG near to source</b><span style="text-indent: -18pt;">, dynamic
power consumption will reduce. This is because most of the clock buffers are in
fanout of clock gater. These clock buffers will not toggle when clock gating is
enabled.</span></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->But
placing ICG near to source increases the uncommon paths. These uncommon paths
can behave differently, so during STA these need to be taken into account that
extra uncertainty.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>If you place ICG near to sink</b>, most of
the clock buffers are in common path. It is easy to met timing compared to
scenario-1. <o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->But at the same time dynamic power consumption
is increased.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 17.7pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Remember,
there is trade-off between power and timing.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 17.7pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Ideally,
Integrated Clock Gating (ICG) cells should be placed <b>physically close to the
group of flip-flops (sinks) they are gating</b>.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Improve CTS Balancing:</b> CTS tools balance
delay up to the <i>inputs</i> of the ICG cells. Placing the ICG close to the
sinks means the final, unbuffered gated clock segment is short and contributes
less variable delay, making overall skew balancing more predictable.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Reduce Enable Net Impact:</b> While the
enable signal net might become longer if the enable logic originates far away,
Placing the ICG far from sinks would create a very large, high-capacitance net
driven by the ICG output, which is undesirable.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>