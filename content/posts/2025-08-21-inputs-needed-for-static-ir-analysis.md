---
title: "Inputs Needed for Static IR Analysis"
date: 2025-08-21
draft: false
categories: ["Signal-Integrity"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Physical Design Database (DEF):</b><span style="text-indent: -18pt;"> Contains
the placed locations of all cells and the layout of the power grid</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Parasitic Resistance (RC Extraction or SPEF):</b>
Accurate resistance values for all segments of the PDN (metal wires and vias).
This usually comes from an RC extraction tool run on the power grid layout
(e.g., from Quantus/StarRC). Sometimes derived from LEF/tech files for early
estimates.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Library Power Information (</b>.lib<b>):</b>
Specifies the average leakage power (or current) consumed by each standard cell
and macro.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Average Switching Activity:</b> Information
about the average toggle rate or switching probability of the cells in the
design. This can be: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->A global default activity factor (e.g., 10-20%
toggle rate) - less accurate.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Statistical averages derived from synthesis or
simulation.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Cell-based average power calculated from
libraries and potentially state probability information.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Source Locations:</b> Coordinates and
voltage values of the main power pads/bumps/sources connected to the PDN.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>(Optional) Technology Files/each cell current
characteristics defined:</b> For EM limits and material properties if EM
analysis is run concurrently.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>