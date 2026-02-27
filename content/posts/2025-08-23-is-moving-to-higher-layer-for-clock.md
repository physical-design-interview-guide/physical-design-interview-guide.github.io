---
title: "Is moving to a higher layer for clock always helpful in reducing delay?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><span style="text-indent: -17.85pt;">Moving to a higher layer is <b>not always helpful</b>
in reducing delay. It's a trade-off.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="line-height: normal; margin-left: 54.15pt; mso-add-space: auto; mso-list: l1 level2 lfo2; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Resistance (R):</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> Higher
layers have thicker wires, which <b>decreases resistance</b>. This part helps
reduce delay (R×C).<o:p></o:p></span></p>

<p class="MsoListParagraphCxSpLast" style="line-height: normal; margin-left: 54.15pt; mso-add-space: auto; mso-list: l1 level2 lfo2; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Capacitance (C):</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> While the
area capacitance to the layers below might decrease due to greater distance,
the <b>fringe and coupling capacitance can increase</b> because the wires are
taller and have more surface area on their sides.<o:p></o:p></span></p>

<p class="MsoNormal" style="line-height: normal; margin-left: 18.15pt; mso-list: l0 level1 lfo1; mso-margin-bottom-alt: auto; mso-margin-top-alt: auto; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;">Conclusion:</span></b><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-fareast-language: EN-IN; mso-font-kerning: 0pt; mso-ligatures: none;"> For very long nets, the benefit of lower
resistance dominates, and using higher layers is helpful. For shorter nets, the
increased capacitance can negate the benefit of lower resistance, potentially
even increasing the total delay.<o:p></o:p></span></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>