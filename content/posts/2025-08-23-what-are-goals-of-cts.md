---
title: "What are the goals of CTS?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p></p><p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Minimize
Clock Skew</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Meet
Insertion Delay Targets</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Achieve
Target Transition Times (Slew):</b> Ensure the clock signal edges are sharp
(fast transitions) throughout the network to guarantee reliable clocking of
sequential elements and minimize sensitivity to noise. Meet max_transition DRC
constraints.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">1.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Too
tight trans causes more bufs/inv and increases area, power and latency.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">2.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Loose
trans can cause more leakage, sensitive to noise and increased delay.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Meet
Other DRCs:</b> like max_capacitance and max_fanout<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Minimize
Power Consumption:</b> Build the clock tree with optimum power possible.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Maintain
Signal Integrity and Routability:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>No timing violations.</b></p><p></p>