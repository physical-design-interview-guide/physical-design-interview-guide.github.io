---
title: "How do you decide which scenarios/corners to use for PnR vs. Signoff?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p>The selection involves a trade-off between PnR
runtime/effort and signoff accuracy/coverage.</p>

<p class="MsoNormal" style="margin-left: 21.95pt; mso-list: l0 level1 lfo1; tab-stops: list 21.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Signoff:</b> Aims for comprehensive coverage
of all conditions the chip might experience. It typically includes:<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Multiple
PVT Corners:</b> Extremes of Process (SS, FF, SF, FS), Voltage (min, max), and
Temperature (min, max), plus typical (TT).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Multiple
RC Corners:</b> Worst/Best RC combinations (RCworst, RCbest, Cworst, Cbest,
potentially crosstalk corners).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Multiple
Modes:</b> Functional modes, test modes (Scan Shift, Scan Capture, BIST),
potentially low-power modes.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Combined
Scenarios:</b> A large set of scenarios combining PVT, RC, and Modes (e.g.,
SSG_LVT_low_temp_max_volt_rcworst_func_mode). The exact number can range from
tens to hundreds depending on the design complexity and requirements.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 21.95pt; mso-list: l0 level1 lfo1; tab-stops: list 21.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>PnR (Placement &amp; Route):</b> Aims for
efficient optimization while providing good correlation to signoff. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fewer
PVT Corners:</b> Often limited to worst-case setup (e.g.,
SSG_low_volt_high_temp) and worst-case hold (e.g., FFG_high_volt_low_temp)
corners, plus maybe a typical corner. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fewer
RC Corners:</b> Typically restricted to RCworst for setup optimization and
RCbest for hold fixing during relevant stages.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.95pt; mso-list: l0 level2 lfo1; tab-stops: list 57.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Goal:</b>
The selected PnR scenarios should ideally encompass the conditions that are
most likely to limit performance (setup) or cause hold failures. The choice is
based on: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.95pt; mso-list: l0 level3 lfo1; tab-stops: list 93.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Past
experience and data showing which corners are typically timing-limiting for
that technology/design style.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.95pt; mso-list: l0 level3 lfo1; tab-stops: list 93.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Analysis
of library behavior across corners.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.95pt; mso-list: l0 level3 lfo1; tab-stops: list 93.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Project
requirements (e.g., if a specific test mode is performance-critical).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.95pt; mso-list: l0 level3 lfo1; tab-stops: list 93.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Tool
capabilities (Multi-Mode Multi-Corner - MMMC PnR allows handling more scenarios
concurrently, but still fewer than signoff).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -32.05pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>