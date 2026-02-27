---
title: "How do you decide if the final netlist is good to go for PnR?"
date: 2025-08-20
draft: false
categories: ["Pre-PnR"]
description: ""
---

<p>&nbsp;<span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Clean Sanity Checks:</b><span style="text-indent: -18pt;"> The netlist must
pass all critical sanity checks:</span></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l0 level1 lfo2; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->No
fatal errors in check_design / check_netlist (no multi-driven nets, no floating
inputs on critical paths, correct connectivity).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l0 level1 lfo2; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->No
unresolved references (check_library passes, all cells have lib/lef).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l0 level1 lfo2; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->No
critical errors in check_timing (all clocks defined, critical paths
constrained, no unconstrained registers intended to be clocked). Minor
unconstrained paths might be acceptable if understood and deemed non-critical
or intended false paths.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Timing QOR:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l3 level1 lfo3; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Reasonable
WNS/TNS:</b> The Worst Negative Slack (WNS) and Total Negative Slack (TNS)
reported by synthesis STA should be within acceptable limits for the target
clock frequency. Very large negative slack (e.g., &gt;&gt; 1 clock cycle) might
indicate fundamental issues (unrealistic constraints, poor RTL, wrong target
library) that PnR cannot fix. Small negative slack (-10% to -20% of the clock
period, depending on the design/node) is often acceptable, as PnR tools have
more powerful optimization engines and accurate parasitic information.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.0pt; mso-list: l3 level1 lfo3; tab-stops: list 36.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>No
Excessive DRV Violations:</b> While PnR primarily fixes DRVs (Design Rule
Violations like max_transition, max_capacitance), the number and severity
reported by synthesis should not be excessively high, as this might indicate
poor library choices or constraint issues.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Area QOR:</b> The synthesized cell area
should be reasonably close to initial estimates or targets. A massively
larger-than-expected area might indicate synthesis issues or unrealistic
constraints.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l2 level1 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>LEC Clean:</b><o:p></o:p></p>

<p class="MsoNormal"><b>Power QOR (If applicable):</b> If power analysis was run
during synthesis, the estimated static and dynamic power should be within
acceptable bounds.<o:p></o:p></p>