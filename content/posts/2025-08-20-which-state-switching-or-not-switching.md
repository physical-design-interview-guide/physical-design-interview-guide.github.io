---
title: "Which state (switching or not switching) consumes more power? Which VT leaks more (HVT vs LVT)?"
date: 2025-08-20
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Switching State:</b><span style="text-indent: -18pt;"> The </span><b style="text-indent: -18pt;">switching state</b><span style="text-indent: -18pt;">
consumes significantly more power in CMOS circuits. This is called </span><b style="text-indent: -18pt;">dynamic
power</b><span style="text-indent: -18pt;"> and has two main components:</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Switching Power:</b> Charging and discharging
load capacitances (Psw​=αCVdd2​f, where α is activity factor, C is load
capacitance, Vdd is supply voltage, f is frequency).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Short-Circuit Power:</b> For a brief moment
during switching, both PMOS and NMOS transistors can be partially ON, creating
a direct path from VDD to VSS.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->The <b>non-switching (static) state</b> consumes
very little power, primarily due to <b>leakage current</b> (subthreshold
leakage, gate leakage etc.), which becomes more significant at lower nodes.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>VT Leakage:</b> <b>LVT (Low Threshold
Voltage)</b> cells leak <b>more</b> than <b>HVT (High Threshold Voltage)</b>
cells. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Threshold Voltage (Vt):</b> The minimum gate
voltage required to turn a transistor ON.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>LVT:</b> Lower Vt means the transistor turns
on "easier" (faster switching) but also allows more current to leak
through even when it's supposed to be OFF (higher subthreshold leakage).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>HVT:</b> Higher Vt means the transistor
requires more voltage to turn on (slower switching) but has significantly lower
leakage current when OFF.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 0cm; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->(ULVT/SLVT/ELVT
are variations indicating Ultra/Super/Extremely Low Vt, with progressively
higher leakage and speed).<o:p></o:p></p>