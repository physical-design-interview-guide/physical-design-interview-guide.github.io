---
title: "Command to balance two clock trees? Command to check latency?  Command to do useful skew?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Balance Two Clock Trees:</b></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Innovus:</b> create_skew_group -name
&lt;group_name&gt; -clocks {&lt;clock1&gt; &lt;clock2&gt;}<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l0 level1 lfo1; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>ICC2:</b> set_clock_balance_points can be
used to define common points for balancing.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Check Latency:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l2 level1 lfo2; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Innovus/ICC2:</b> The command
report_clock_timing -type latency is used.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Do Useful Skew:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l3 level1 lfo3; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Innovus:</b> Enabled by default during
ccopt_design. Can be controlled with setUsefulSkewMode.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l3 level1 lfo3; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>ICC2:</b> clock_opt has options to enable
useful skew,<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>