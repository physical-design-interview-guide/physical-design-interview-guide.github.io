---
title: "How do you plan the die size and estimate the chip area?"
date: 2025-08-20
draft: false
categories: ["Floorplan"]
description: ""
---

<p>&nbsp;<span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Gather
Inputs:</b></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Gate Count:</b> Number of standard logic
gates from synthesis (excluding memories/macros).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Memory/Macro Area:</b> Total area required
for all hard macros, RAMs, ROMs, IP blocks (obtained from their datasheets or
abstracts).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>IO Count:</b> Number of Input/Output
pads/bumps required.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Technology Information:</b> Gate density
(gates/mm²) for the target standard cell library, standard cell height,
required IO pad dimensions/pitch.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Target Utilization:</b> The desired
percentage of the core area that will be occupied by standard cells and macros
after placement.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Overhead Estimation:</b> Percentage allowance
for Clock Tree Synthesis (CTS) buffers/inverters, routing overhead, ECO margin,
physical cell placement (decap, filler), etc. (e.g., add 10-20% to gate count).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l4 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Calculate
Core Area:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Standard Cell Area:</b> (Gate Count + Gate
Count * Overhead%) / Gate Density<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Total Core Logic Area:</b> Standard Cell Area
+ Memory/Macro Area<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Estimated Core Area:</b> Total Core Logic
Area / Target Utilization<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l4 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Calculate
IO Area / Peripheral Area:</b> Determine the area required for the IO pads
based on their count and dimensions/pitch. This depends on whether the design
is pad-limited or core-limited. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level2 lfo5; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Pad-Limited:</b> The number and size of IO
pads dictate the minimum perimeter and thus the minimum die size. The core must
fit within this boundary.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level2 lfo5; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Core-Limited:</b> The calculated core area
dictates the die size, and the IO pads must fit around this core.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l4 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Estimate
Die Size:</b> Combine the core area and peripheral/IO area. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l3 level2 lfo6; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->For a core-limited design, the die area is
roughly the core area plus the surrounding IO area/channels.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l3 level2 lfo6; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->For a pad-limited design, calculate the minimum
dimensions required by the pads and ensure the estimated core area fits inside.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l4 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Consider
Aspect Ratio:</b> Decide on the desired Height/Width ratio for the die (often
close to 1.0 for square, but can vary based on packaging or system
constraints). Calculate the die dimensions (Height, Width) based on the
estimated Die Area and Aspect Ratio: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l4 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">1.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Die
Area = Width * Height<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l4 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">2.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Aspect
Ratio (AR) = Height / Width<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l4 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">3.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Height
= sqrt(Die Area * AR)<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l4 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">4.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Width
= sqrt(Die Area / AR)</p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l4 level1 lfo2; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Floorplan
Initialization: <a href="https://openroad.readthedocs.io/en/latest/main/src/ifp/README.html" target="_blank">https://openroad.readthedocs.io/en/latest/main/src/ifp/README.html</a><o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>