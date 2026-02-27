---
title: "How do we do power recovery (other than VT swapping)?"
date: 2025-08-20
draft: false
categories: ["Placement", "Power-Plan"]
description: ""
---

<p></p><p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list -17.7pt 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Cell
Sizing / (Downsizing):</b> Replace cells on non-critical timing paths with
smaller drive-strength variants (e.g., X4 -&gt; X2 -&gt; X1).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list -17.7pt 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Removing
unnecessary buf/inverters:</b> If added on short nets, may not be really
required and can be deleted.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list -17.7pt 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Leakage
Optimization Modes:</b> PnR/Optimization tools often have specific modes or
commands (setOptMode -powerEffort high, optimize_power)<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list -17.7pt 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Clock
Gating Enhancement:</b> While primarily done during synthesis/CTS, post-route
optimization might identify further opportunities for clock gating refinements
or sizing of clock gating cells themselves, assuming it doesn't impact timing.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list -17.7pt 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Multi-Bit
Cell Merging:</b> Replacing multiple single-bit flops/latches with equivalent
multi-bit cells can sometimes reduce overall leakage and dynamic power,
although this is more of a synthesis/placement strategy than a post-route
recovery technique.<o:p></o:p></p><br /><p></p>