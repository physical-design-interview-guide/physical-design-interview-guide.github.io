---
title: "How to ensure clock tree quality?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Meeting
Skew Targets:</b><span style="text-indent: -18pt;"> Verify achieved skew (global and local/group) against
specified targets using CTS reports (report_clock_timing).</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Meeting
Latency Targets:</b> Check min/max insertion delays against requirements.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Meeting
DRCs:</b> Ensure no max_transition, max_capacitance, or max_fanout violations<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Duty
Cycle Preservation:</b> Check for duty cycle distortion. Ensure <b>minimum
pulse width</b> requirements are met.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Balanced
Structure:</b> Visually inspect the tree or use tool reports to check for
reasonably balanced branches. Global skew gives idea on how overall CTS is
balanced.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Use appropriate clock buffers (balanced, low
variation).<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Apply NDRs (Non-Default Rules like shielding,
double spacing) during clock routing to minimize crosstalk susceptibility.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Power
Efficiency:</b> Check the number and size of inserted clock buffers/inverters.
Ensure the tool performed power optimization if enabled.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Routability:</b>
Analyze post-CTS congestion maps.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>