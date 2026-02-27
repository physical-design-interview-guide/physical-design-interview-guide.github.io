---
title: "What are the things needed to be taken from sub-blocks to the main block? How do you take logical information of sub-blocks?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Logical View (Timing Model - </b><span style="text-indent: -18pt;">.lib</span><b style="text-indent: -18pt;"> or </b><span style="text-indent: -18pt;">.db</span><b style="text-indent: -18pt;">):</b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Provides the timing characteristics of the
sub-block's input/output pins (setup/hold times, clock-to-output delays,
internal path delays)<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Defines cell functions (if it's a soft macro
with standard cells) or overall block function.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 85.9pt; mso-list: l0 level2 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Needed
for top-level STA and synthesis (if the sub-block is a soft/firm macro).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 49.9pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Physical View (Abstract Layout Model - LEF):</b>
<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 85.9pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->.lef file of Hard Macro or soft macro/sub
blocks.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Defines
the physical footprint (width, height), pin locations, pin layers, metal
blockages (OBS layers) within the sub-block.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 49.9pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Constraint View (SDC partial/interface):</b> <o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Interface
timing constraints for the sub-block's pins (e.g., specific false paths or
multicycle paths internal to the IP that the top level should be aware of, or
constraints on its I/O pins).<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->UPF
and GDS for merging at last to get complete top-level GDS.<o:p></o:p></p>