---
title: "What is useful skew? How can it be used to fix setup violations? Command for useful skew?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Useful
Skew: </b><span style="text-indent: -18pt;">The deliberate introduction of a controlled amount of clock skew
between specific launch and capture flops to help meet timing requirements
(either setup or hold). Instead of minimizing skew everywhere (the default CTS
goal), useful skew leverages available timing margin from one path to fix a
violation on another.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fixing
Setup with Useful Skew:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Equation:</b>
Setup Slack ≈ (Clock Period + <b>Skew</b>) - Data Path Delay - Uncertainty -
Lib Setup. Increasing positive skew directly increases setup slack.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Caution:</b>
Adding useful skew borrows margin. You must ensure that adding this skew
doesn't cause: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Hold
violations on the <i>same</i> path (as positive skew hurts hold).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->Setup
violations on <i>other</i> paths connected to the launch or capture flops<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Command
for Useful Skew:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->setOptMode
-usefulSkew true<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->setAnalysisMode
-usefulSkew true<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>