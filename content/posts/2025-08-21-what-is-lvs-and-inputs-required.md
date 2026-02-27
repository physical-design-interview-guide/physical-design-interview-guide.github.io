---
title: "What is LVS and Inputs required? Difference between schematic and layout views? Is it a functional check?"
date: 2025-08-21
draft: false
categories: ["Physical-Verification"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">LVS (Layout Versus Schematic):</b><span style="text-indent: -18pt;"> A critical
physical verification process that compares the electrical circuit extracted
from the physical layout database (e.g., GDSII, OASIS) against the intended
circuit described by the source schematic netlist (e.g., SPICE or Verilog
netlist).</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Inputs:</b> <o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Layout
Database:</b> The physical layout design file (GDSII, OASIS)<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Source
Netlist:</b> The "golden" netlist representing the intended circuit
schematic (e.g., SPICE netlist for custom designs, Verilog netlist for digital
designs).<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Rule
Deck:</b> Provided by the foundry, this file tells the LVS tool how to identify
devices (transistors, resistors, capacitors, diodes) from the layout layers,
how to determine connectivity, and how to extract parameters (like W/L for
transistors).<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Configuration/Setup
Files:</b> Files to control the LVS run, specify top cells, map power/ground
names, define device properties to compare, set tolerances, etc.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-list: l1 level1 lfo2; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Schematic
View vs. Layout View (in LVS context):</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Schematic
View:</b> Circuit from Golden netlist.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Layout
View:</b> Refers to the circuit extracted by the LVS tool <i>from the physical
layout geometry</i>, GDS/OASIS<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>LVS
Comparison:</b> The core LVS process compares the extracted layout netlist
(components, parameters, connectivity) against the source schematic netlist.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l0 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Is it a Functional Check?</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 72.15pt; mso-add-space: auto; mso-list: l0 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>No, it doesn’t check functionality of design.
LVS is primarily a <i>structural</i> check.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->It
verifies that the <i>structure</i> implemented in the layout (which devices
exist, how they are connected, their parameters) matches the intended structure
from the schematic.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->It
does <i>not</i> verify if the design performs the intended logical function
(e.g., it won't tell you if your adder design actually adds correctly).
Functional verification is done through simulation (RTL, gate-level) or formal
verification (like LEC - Logic Equivalence Checking for digital designs).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.15pt; mso-list: l2 level3 lfo1; tab-stops: list 90.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]-->However,
LVS is crucial for ensuring functionality because errors it catches (like
shorts, opens, wrong connections, wrong device sizes) would almost certainly
cause functional failures.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>