---
title: "What is a via pillar? What is need of it?"
date: 2025-08-22
draft: false
categories: ["Routing", "Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Via
Pillar:</b><span style="text-indent: -18pt;"> A structure used in advanced process nodes (like FinFET nodes) to
create a lower-resistance vertical connection between metal layers compared to
traditional single vias or via arrays. It typically consists of:</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Stacked,
short metal segments ("fingers") on intermediate metal layers,
aligned vertically.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->These
segments are connected by vias above and below, essentially forming a
"pillar" of alternating via and short metal bar segments running
vertically through multiple layers.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Why
Use It?</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Usually
used in Power planning and secondary PG routing. Can be used in clock and
signal or on critical cells pin connections.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Generally,
this feature is used in restricted ways and the via pillar is usually attached
to the library pin—everywhere that cell is used it will have a via pillar,
typically on the output<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Reduce
Via Resistance: </b>A via pillar provides multiple parallel paths for current
between the top and bottom connection points, significantly reducing the
overall effective vertical Resistance.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Improve
Electromigration (EM) Robustness:</b> By distributing the current across
multiple paths within the pillar structure, the current density in any single
via or metal segment is reduced, improving reliability against electromigration
failures.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Issues
that cause poor insertion of via pillar:<o:p></o:p></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.15pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Track alignment issue/ PG stripe
overlapping/Insufficient Margin Area<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.15pt; mso-add-space: auto;"><o:p>&nbsp;</o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://community.cadence.com/cadence_blogs_8/b/breakfast-bytes/posts/tsmc-n7">https://community.cadence.com/cadence_blogs_8/b/breakfast-bytes/posts/tsmc-n7</a><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span class="MsoHyperlink"><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; text-decoration: none; text-underline: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span></span><!--[endif]-->Via
Pillar Overview: <a href="https://eternallearning.github.io/via-pillar/" target="_blank">https://eternallearning.github.io/via-pillar/</a><span class="MsoHyperlink"> <o:p></o:p></span></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="http://archive.sigda.org/ispd/slides/2020/ispd20_via_pillar_placement.pdf">http://archive.sigda.org/ispd/slides/2020/ispd20_via_pillar_placement.pdf</a><o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>