---
title: "What is DRC (Design Rule Check)? How to fix drcs if in huge numbers?"
date: 2025-08-21
draft: false
categories: ["Physical-Verification"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; font-size: 10pt; line-height: 107%; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">DRC
(Design Rule Check):</b><span style="text-indent: -18pt;"> checks if the physical layout is as per foundry rules,
ensure it can be manufactured reliably with acceptable yield.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level2 lfo3; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Types
of Rules:</b> Include minimum width, minimum spacing (intra-layer and
inter-layer), minimum area, via enclosure, overlap requirements, antenna rules
(often checked separately but fundamentally DRCs), density rules, and many
complex conditional rules (e.g., end-of-line spacing, notch spacing).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level2 lfo3; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fixing
DRCs:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Spacing
Violations:</b> Increase the space between the violating shapes (e.g., move
wires further apart).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Width/Area
Violations:</b> Increase the width or area of the violating shape.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Enclosure/Overlap
Violations:</b> Adjust the size or position of shapes to meet via enclosure or
layer overlap requirements.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Manual
Fixing:</b> If handful of DRCs, can be fixed manually within PNR tools.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Automated
Fixing:</b> If too many drcs, can use eco_route -fix_drc. Tool can re route and
try to fix drcs.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.15pt; mso-add-space: auto; mso-list: l2 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Fixing thousands of DRCs requires a systematic
approach: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l0 level3 lfo4; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Categorize
Errors:</b> Use the DRC tool's reporting features to group violations by rule
type and layer.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l0 level3 lfo4; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Prioritize:</b>
Focus on systematic errors first which can be implemented by script or
automated way.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l0 level3 lfo4; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Scripting:</b>
Write scripts (Tcl, Skill) to automate fixes for repetitive, predictable
violations.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level2 lfo3; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Tools
Used:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Signoff
PV Tools:</b> Industry standards are Siemens Calibre, Cadence Pegasus, Synopsys
IC Validator. These are used for final signoff verification.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level3 lfo3; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>PnR
Tools:</b> Cadence Innovus and Synopsys ICC2/Fusion Compiler have integrated
DRC engines (often leveraging the signoff engines) for checking and fixing
during place and route.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level2 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->DRC
in VLSI: <a href="https://www.techsimplifiedtv.in/2023/01/design-rule-check-in-vlsi.html" target="_blank">https://www.techsimplifiedtv.in/2023/01/design-rule-check-in-vlsi.html</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>