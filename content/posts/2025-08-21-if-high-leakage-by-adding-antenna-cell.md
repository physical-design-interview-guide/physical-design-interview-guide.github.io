---
title: "If high leakage by adding Antenna cell, what to do? Can jogging to upper layers cause new antenna violations? How floating cell addition helps in antenna fixing any disadvantages of it?"
date: 2025-08-21
draft: false
categories: ["Physical-Verification"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">High Leakage from Antenna Cells:</b><span style="text-indent: -18pt;"> Antenna
cells typically contain protection diodes connected to the input pins. These
diodes, even when reverse-biased during normal operation, contribute a small
amount of junction leakage current. If many antenna cells are added throughout
the design, this cumulative leakage can become significant, especially in
low-power designs.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Use jogging to upper layer:</b> If resources
available, can be routed to upper layer to reduce antenna effect on lower
layer. Routing on upper layer may or may not cause new antenna violations
depending on what is cumulative metal area of upper layer.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Floating Cell Addition for Antenna Fixing?</b>
Adding a <b>floating</b> cell, with input connected to gate with antenna
violation and output floating can help in antenna violation by increasing gate
area.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.15pt; mso-add-space: auto;"><b>This can increase the load on the net and may impact the timing.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>