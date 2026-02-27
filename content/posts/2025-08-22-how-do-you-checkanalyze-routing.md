---
title: "How do you check/analyze routing congestion?"
date: 2025-08-22
draft: false
categories: ["Routing"]
description: ""
---

<p>We can analyse Congestion hotspot at different stage:</p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l2 level2 lfo2; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->eGR
hotspot at preCTS or post-CTS opt - the step just before routing<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->NR-GR hotspot before detail routing<o:p></o:p></p>

<p class="MsoNormal" style="text-indent: 36.0pt;">After detail routing we check for
DRCs and Shorts.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Congestion
Maps:</b> Similar to placement congestion analysis, PnR tools generate visual
congestion maps based on eGR or NR-GR<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Overflow
Reports:</b> Tools provide reports listing GCells with overflow (demand &gt;
supply) and quantifying the overflow percentage or the number of overflowing
tracks. This helps pinpoint the most problematic areas.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Layer-Specific
Analysis:</b> 3D view of congestion map in Innovus allows to check per layer
congestion.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Identify
Causes:</b> Correlate congestion hotspots with design like, bad placement, pin
Access, blockages, high density etc.<o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>