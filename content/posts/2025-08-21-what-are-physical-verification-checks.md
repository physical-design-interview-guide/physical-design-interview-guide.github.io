---
title: "What are Physical Verification checks?"
date: 2025-08-21
draft: false
categories: ["Physical-Verification"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">DRC (Design Rule Check):</b><span style="text-indent: -18pt;"> Verifies that
the layout geometry adheres to the manufacturing constraints (design rules)
specified by the foundry for the target technology node. This includes checks
for minimum width, spacing, area, enclosure, overlap, etc., for all layers
(metal, poly, diffusion, vias, etc.). Ensures the layout can be physically
manufactured with acceptable yield.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>LVS (Layout Versus Schematic):</b> Compares GDS(Layout)
vs schematic(Netlist). It verifies that the layout correctly implements the
intended logic in netlist. It checks, device types, and device parameters (like
transistor W/L). Checks for shorts, opens, incorrect connections, missing/extra
devices, and parameter mismatches.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Antenna Check (Plasma Induced Damage Check):</b>
Verifies compliance with antenna rules, which limit the ratio of connected
metal area (acting as an antenna collecting charge during plasma etching) to
the gate area of connected transistors. Prevents gate oxide damage during
manufacturing.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>ERC (Electrical Rule Check):</b> Checks for
electrical issues in the layout that might not be caught by LVS or DRC but
could cause functional problems or reliability issues. Examples include: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Floating wells or substrates (potential latch-up
risk).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Floating gates.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Shorted power and ground nets (though often
caught by LVS too).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Nets connected only to gate pins without
drivers.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Incorrect power/ground connections for specific
cells.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Density Checks:</b> Ensures the density of
features (metal, poly, diffusion) across the chip falls within specified
minimum and maximum limits per window size. This is crucial for uniform results
during manufacturing processes like Chemical-Mechanical Polishing (CMP) and etching.
Dummy fill patterns are often added to meet density rules.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>DFM Checks (Design for Manufacturability: </b>Examples
include redundant via insertion, Dummy Metal fill, recommended rule checks
beyond the mandatory DRCs.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>PERC: </b>ESD and multiple power domain
related checks.<o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>