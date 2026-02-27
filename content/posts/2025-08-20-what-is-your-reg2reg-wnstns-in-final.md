---
title: "What is your Reg2Reg WNS/TNS in the final netlist? What if it's extremely high? What about ICG WNS?"
date: 2025-08-20
draft: false
categories: ["Pre-PnR"]
description: ""
---

<p>&nbsp;<span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Reg2Reg WNS/TNS:</b></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Acceptable:</b>
A small negative WNS (e.g., -50ps to -200ps for a multi-GHz design, perhaps
-10% to -20% of the clock period) might be considered acceptable as a starting
point for PnR. TNS should ideally be manageable.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Context:</b>
The acceptable value depends on how much improvement is expected from PnR
optimizations (better placement, buffering, useful skew, more accurate
parasitics).<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Extremely High Negative WNS/TNS:</b> If the
WNS is very large negative (e.g., approaching or exceeding the clock period) or
TNS is enormous: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Unrealistic
Constraints:</b> Clock frequency target is too high for the
technology/architecture. SDC constraints (I/O delays, exceptions) might be
incorrect or too tight.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Poor
RTL Quality:</b> Inefficient logic structure, very long combinational paths,
complex computations within a single cycle.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Incorrect
Libraries:</b> Using the wrong speed/Vt libraries for synthesis.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Synthesis
Tool Issues:</b> Incorrect settings, poor optimization effort.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Action:</b>
The issue must be investigated and addressed in synthesis (fixing constraints,
guiding the tool, requesting RTL changes)<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>ICG WNS (Integrated Clock Gating):</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Target:</b>
ICG setup timing (WNS) should ideally be <b>positive</b> or very close to zero
after synthesis. Clock gating checks are often harder to fix post-synthesis
compared to regular reg-to-reg paths.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.95pt; mso-list: l0 level2 lfo1; tab-stops: list 39.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Negative
ICG WNS:</b> If ICG setup WNS is significantly negative, it's a concern. It
implies the enable logic path is too slow. This should be prioritized for
fixing during synthesis, potentially by: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.95pt; mso-list: l0 level3 lfo1; tab-stops: list 75.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Optimizing
the enable logic path.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.95pt; mso-list: l0 level3 lfo1; tab-stops: list 75.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Adjusting
clock gating insertion strategy.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 75.95pt; mso-list: l0 level3 lfo1; tab-stops: list 75.95pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Using
faster cells for the enable logic or the ICG cell itself.</p>