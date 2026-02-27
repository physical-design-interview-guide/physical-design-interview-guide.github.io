---
title: "What if cells are low drive strength and no space for decaps to fix IR?"
date: 2025-08-21
draft: false
categories: ["Signal-Integrity"]
description: ""
---

<p>We have dynamic IR issue where specific location; cells are
already low drive strength and no space to add decaps. We can still reduce IR
by following ways:</p>

<p class="MsoListParagraphCxSpFirst" style="mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Improve PDN: add extra stripes or vias in that
region if possible.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Change in switching window: Analyze the
switching activity. If many cells (even low-drive ones) in the area switch
simultaneously causing the droop, try to introduce small timing delays on
non-critical paths feeding into this region to slightly spread out the
switching events over time. This reduces the peak current demand at any single
instant.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">VT
Swapping (Higher Vt):</b> if there are some LVT cells contributing to the
switching current in the region, swapping them to higher Vt (SVT/HVT)<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Re-evaluate
Floorplan/Placement:<o:p></o:p></b></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>