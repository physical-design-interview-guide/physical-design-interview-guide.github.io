---
title: "What are the different types of placement bounds/blockages?"
date: 2025-08-20
draft: false
categories: ["Floorplan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp; </span></span><span style="text-indent: -18pt;">Placement
blockage of type </span><b style="text-indent: -18pt;">"Hard</b><span style="text-indent: -18pt;">" means that placeDesign will not place
any cells in this area. Use this blockage type to totally restrict standard
cells from being placed here.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->A
placement blockage of type <b>"Soft"</b> means that placeDesign will
not place any cells in this region. However, placement legalization, timing
optimization, and clock tree synthesis (CTS) can place buffers/inverters in
this area. This blockage type is often used to block channels between macros.
It prevents the placer from placing standard cells in this area, thus avoiding
congestion problems. However, optimization is allowed to insert
buffers/inverters in these channels, which is useful when buffering long nets
and can improve timing and routability.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><span style="mso-spacerun: yes;">&nbsp;</span>Global placer - soft-blockage is seen by
global place as hard-blockage - but incremental placer does not move any
existing instance from soft blockage area, just no instances can be moved into
that area.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Detail
placer -<span style="mso-spacerun: yes;">&nbsp; </span>only allow buffers, invertors,
and clk-gate inside soft blockage. Any other complex cell instance will see a
soft-blockage as hard blockage. Exception are instances within regions covered
by soft-blockage also ignore the soft-blockage.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->A
placement blockage of type "<b>Partial</b>" (also referred to as
density screens) means that only a certain percentage of the specified area is
available for global placement. This partial area available to<span style="mso-spacerun: yes;">&nbsp; </span>global placement is specified when defining the
Partial blockage. So, a Partial blockage of 30% , i.e. 70% of the specified
area can be used for global placement, can be defined using the following
syntax:<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->createPlaceBlockage
-type partial -density 70 -box {776.711 756.060 1162.058 558.509}<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->The
30% blockage is of type "Soft"; that is, timing optimization and CTS
can use this area.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt;"><o:p>&nbsp;</o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Placement
Bounds: (Regions/Guides/Fences):</b> These define areas where specific groups
of cells <i>should</i> be placed. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Soft
Guide:</b> same as Guide, except no location is given. This provides a stronger
grouping for the instances under the same soft guide. The soft guide constraint
is not as restrictive as a fence or a region constraint, so some instances
might be placed further away if these have connections to other modules.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Guide:</b>
A soft constraint. The placer tries to place the assigned cells within the
guide but may place them outside if utilization is high or other constraints
conflict. Useful for influencing placement without strict boundaries.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Region:</b>
When a region is defined, it requires all the cells of the modules contained in
the defined region to be placed in the specified region area. If there is an
extra space in the region, other cells from other modules may be brought inside<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fence:</b>
A hard constraint. Cells assigned to a fence <i>must</i> be placed within that
boundary. No other cells will be placed inside fence.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt;"><o:p>&nbsp;</o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Partial
Blockage Impact:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Congestion
Relief:</b> Reduces the number of cells in a specific area, freeing up local
routing resources and mitigating congestion.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l0 level2 lfo1; tab-stops: list 57.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Density
Control:</b> Helps achieve more uniform density distribution, which is
beneficial for routability and manufacturability (CMP).<o:p></o:p></p>

<p class="MsoNormal"><b>Timing:</b> Can potentially worsen timing slightly if
cells that were optimally placed close together are forced further apart due to
the density restriction. However, by reducing congestion, it can also improve
timing by enabling shorter routing paths later.<o:p></o:p></p>