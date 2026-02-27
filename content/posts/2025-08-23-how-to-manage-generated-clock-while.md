---
title: "How to manage generated clock while building CTS?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -17.85pt;">Correct SDC Definition:</b><span style="text-indent: -17.85pt;"> Correctly define the generated clock in the SDC
file, specifying its source pin (master clock) and the division/multiplication
logic</span></p>

<p class="MsoListParagraphCxSpMiddle" style="line-height: normal; margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo1; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Automatic Tool Handling:</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> The CTS tool reads the SDC and understands the
relationship between the master clock and the generated clock.<o:p></o:p></span></p>

<p class="MsoListParagraphCxSpMiddle" style="line-height: normal; margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo1; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Balancing:</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> When
balancing, the tool traces the generated clock's path back to its source on the
master clock's tree. It then balances the latency from the clock source all the
way to the sinks of both the master and generated clocks, ensuring they are
properly aligned according to their defined relationship.<o:p></o:p></span></p>

<p class="MsoListParagraphCxSpLast" style="line-height: normal; margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo1; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Exception Handling:</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> You can define generated clocks as part of a
separate skew group or mark them as dont_touch if you want to exclude them from
the primary clock tree build and handle them with a custom structure.<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>