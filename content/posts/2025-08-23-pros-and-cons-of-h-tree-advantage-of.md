---
title: "Pros and cons of H-tree? Advantage of using both buffers and inverters?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">H-Tree:</b></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Advantages:</b>
<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Zero
Skew (Ideal):</b> Theoretically capable of achieving zero skew if sinks are
perfectly distributed and the tree is perfectly balanced.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Symmetric
Structure:</b> Predictable and regular routing pattern.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Disadvantages:</b>
<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Impractical
for Real Designs:</b> Assumes uniform sink distribution, which rarely occurs.
Blockages and routing obstacles disrupt the ideal structure.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>High
Insertion Delay:</b> Can lead to long paths from the root to sinks.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Resource
Intensive:</b> Can consume significant routing area, especially on preferred
layers.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Large
Central Driver:</b> Often requires a very large buffer at the root, consuming
significant power and area.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Less
Flexible:</b> Rigid structure makes it hard to adapt to local density
variations or timing requirements.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Advantage
of Using Both Buffers and Inverters:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Flexibility:</b>
Provides the CTS tool with more options for delay balancing and phase control.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Finer
Delay Tuning:</b> Inverters typically have slightly lower delay than
equivalent-drive buffers (since a buffer is ~2 inverters). Using inverters
allows for finer granularity in delay insertion.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Area/Power
Optimization:</b> A pair of inverters might consume less area/power than a
single equivalent buffer. The tool can choose the most efficient option based
on availability and design constraints.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>