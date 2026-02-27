---
title: "How do you instruct your tools to resolve post-clock violations? What role does “useful skew” play in these scenarios?"
date: 2025-08-21
draft: false
categories: ["General-Concepts", "CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Enable Post-CTS/Post-Route Optimization:</b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Innovus: optDesign -postCTS (after CTS),
optDesign -postRoute (after routing). These commands invoke timing-driven
optimization engines.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->ICC2: clock_opt -stage cts_optimize (after CTS
build), route_opt (performs routing and optimization iteratively).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Specify Effort Levels:</b> Increase the
optimization effort. <o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Innovus: setOptMode -effort high|extreme<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->ICC2: Options within place_opt, clock_opt,
route_opt to control effort (e.g., -effort high).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>SI-Aware Optimization:</b> Ensure Signal
Integrity (crosstalk) aware optimization is enabled if SI violations are
contributing to timing issues. <o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Innovus: setOptMode -crosstalkAware true<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->ICC2: set_si_options -delta_delay true -glitch
true; route_opt -xtalk_driven<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto;"><o:p>&nbsp;</o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Role of "Useful Skew":</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Setup
Violation Fixing:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l2 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->If a
path is failing setup, the tool might intentionally delay the capture clock
path or speed up the launch clock path. Increasing the skew to help setup.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Hold
Violation Fixing:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l2 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->If a
path is failing hold, the tool might intentionally <b>delay the launch clock
path</b> or <b>speed up the capture clock path</b> effectively increasing hold
slack.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Innovus: setUsefulSkewMode<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->setOptMode -usefulSkew true<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Mechanism:</b> The tool achieves useful skew
by selectively adding/removing buffers or resizing existing clock buffers on
specific branches of the clock tree to achieve the desired delay difference
between the launch and capture clock pins of critical paths.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://www.design-reuse.com/articles/57091/timing-optimization-technique-using-useful-skew-in-5nm-technology-node.html" target="_blank">https://www.design-reuse.com/articles/57091/timing-optimization-technique-using-useful-skew-in-5nm-technology-node.html</a>
<o:p></o:p></p>