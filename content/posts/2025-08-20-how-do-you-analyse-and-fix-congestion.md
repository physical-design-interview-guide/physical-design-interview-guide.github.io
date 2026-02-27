---
title: "How to Analyze and Fix Post-Placement Congestion?"
date: 2025-08-20
draft: false
categories: ["Placement"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Congestion Maps:</b><span style="text-indent: -18pt;"> Use the PnR tool's GUI
to visualize the congestion map generated after trial/global routing. Identify
hotspots (high overflow areas, usually color-coded red/orange). Check both
horizontal and vertical layer congestion.</span></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>reportCongestion - </b>list the most
congested regions.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt;"><b>Reasons could be - High Cell
Density</b> -<span style="mso-spacerun: yes;">&nbsp; </span><b>Macro Pin Areas</b> - <b>Narrow
Channels</b><span style="mso-spacerun: yes;">&nbsp; </span>- <b>Bad Floorplan </b>- <b>Specific
Logic:</b> Are certain types of logic (e.g., large muxes, data path logic)
concentrating connections in one area?<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.15pt; mso-add-space: auto; mso-list: l3 level1 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Fixing/Preventing Congestion:</b> <o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l3 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Update
Floorplan<o:p></o:p></b></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Placement
Blockages (Partial):</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Maximum
Utilization/Density Constraints</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Cell
Spreading/Padding:</b> <o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 90.15pt; mso-add-space: auto; mso-list: l3 level3 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]--><b>Cell Padding:</b> <o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l3 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Optimize Placement Settings:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level1 lfo5; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Congestion-Driven
Effort:</b> setPlaceMode –congEffort high). The tool will prioritize reducing
congestion, potentially at the expense of timing/wirelength initially.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level1 lfo5; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Guidance
(Bounds/Regions):</b> Use placement bounds (guides, regions)<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo2; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Congestion
Analysis/Fixing: <a href="https://vlsiweb.com/congestion-analysis/" target="_blank">https://vlsiweb.com/congestion-analysis/</a><o:p></o:p></p>