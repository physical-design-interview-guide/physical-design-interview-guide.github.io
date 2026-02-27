---
title: "How are TEST mode & FUNC mode defined and constrained?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Defining Modes:</b><span style="text-indent: -18pt;"> Different operating modes
are : Functional mode - FUNC and test </span><span style="text-indent: -18pt;">&nbsp;</span><span style="text-indent: -18pt;">Modes: Scan Shift, Scan Capture, BIST</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Defined in MCMM setup with <b>create_constraint_mode</b>
command and given separate SDC of each mode.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Separate SDC Files:</b> Each SDC file
contains the appropriate set_case_analysis settings, relevant clock definitions
(test clocks might differ from functional clocks), and potentially different
timing exceptions or I/O delays specific to that mode.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Mode-Specific Constraints within one SDC:</b>
Less commonly, complex logic within a single SDC file might be used to apply
constraints conditionally, but separate SDCs or set_case_analysis are standard.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 17.85pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Checking
Simultaneously (MMMC):</b> <o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 53.85pt; mso-add-space: auto; mso-list: l1 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Signoff:</b> YES. Signoff STA <i>must</i>
verify timing across all critical functional and test modes defined for the
chip. tool runs analysis for numerous scenarios, each combining a specific mode
(FUNC, TEST_SHIFT, TEST_CAPTURE, etc.) with a specific PVT and RC corner.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>PnR:</b>
PnR typically focuses primarily on optimizing for the main <b>FUNC mode(s)</b>.
<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 89.85pt; mso-list: l1 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><span style="mso-spacerun: yes;">&nbsp;</span>Key <b>TEST modes</b> (like Scan Capture, if
performance-limited by test clocks) might be <i>enabled</i> for timing analysis
during PnR optimization (optDesign, route_opt), but often with lower
optimization effort compared to FUNC mode.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 89.85pt; mso-list: l1 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Modes
like Scan Shift, if run at a slow frequency, might only have basic checks run
or might be deferred entirely to signoff STA, assuming the slow clock speed
makes timing easy to meet.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 89.85pt; mso-list: l1 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->The
decision of which modes to actively optimize during PnR depends on project
methodology, tool capabilities (MMMC PnR support), runtime constraints, and
whether test modes are known to be timing-critical.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>