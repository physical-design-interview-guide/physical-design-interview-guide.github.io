---
title: "What are the checks after CTS?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="text-indent: -18pt;">1.<span style="font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Clock
Tree Reports:</b></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Skew
Report:</b> Verify that the achieved maximum skew (global and potentially per
skew group) meets the target specified in the CTS spec/constraints.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Latency
Report:</b> Check the minimum and maximum insertion delays. Ensure they are
within acceptable ranges or meet specific targets.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>DRC
Report (CTS Specific):</b> Check for violations of max_transition,
max_capacitance, max_fanout specifically on the clock tree buffers/inverters
and nets.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Duty
Cycle and MPW violatons.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-bidi-font-weight: bold; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Clock
tree power.<o:p></o:p></b></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level3 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-bidi-font-weight: bold; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>SI
and cross talk.<o:p></o:p></b></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">2.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Timing
Analysis (Post-CTS STA):</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">3.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Placement
Legality:</b> Verify that the newly inserted clock tree buffers/inverters are
legally placed (checkPlace, checkLegality). Sometimes aggressive placement
during CTS can cause overlaps.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">4.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Congestion:</b>
The addition of clock buffers and the routing of clock nets (even if only
estimated by trial route) can significantly increase congestion<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">5.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Clock
Tree Structure Verification:</b> and cts exceptions are proper.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">6.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Utilization/Area:</b>
Check the increase in cell count and utilization due to the added clock tree
cells.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">7.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Log
Files:</b> Review tool log files for any critical warnings or errors generated
during the CTS process.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l0 level2 lfo2; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Checks
After CTS: <a href="https://fr.scribd.com/presentation/637490970/Untitled" target="_blank">https://fr.scribd.com/presentation/637490970/Untitled</a><o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>