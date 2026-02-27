---
title: "If two nets of the same layer and length, but one has double width, which has more delay and why?"
date: 2025-08-22
draft: false
categories: ["Routing"]
description: ""
---

<p>The net with <b>double width</b> will generally have <b>less
delay</b>.</p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Reasoning
(RC Delay):</b> Wire delay is primarily determined by the product of its
resistance (R) and capacitance (C).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Resistance
(R):</b> Resistance is inversely proportional to the cross-sectional area of
the wire. For a fixed thickness (T), resistance is inversely proportional to
width (W). R <span style="font-family: &quot;Cambria Math&quot;,serif; mso-bidi-font-family: &quot;Cambria Math&quot;;">∝</span> 1 / (W * T). Doubling the width (W -&gt; 2W)
approximately <i>halves</i> the resistance (R -&gt; R/2).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Capacitance
(C):</b> Capacitance has components to ground/substrate (Area Capacitance,
Fringe Capacitance) and coupling capacitance to neighbors. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><i>Ground
Capacitance:</i> Roughly proportional to width (W). Doubling width (W -&gt; 2W)
might <i>almost double</i> this component.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l0 level3 lfo1; tab-stops: list 90.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><i>Coupling
Capacitance:</i> it can be lateral and vertical coupling. Vertical coupling
increases with width and lateral coupling depends on thickness. <o:p></o:p></p>

<p class="MsoNormal">Scaling Impact: <a href="https://www.vlsisystemdesign.com/kunal58625/php/scaling.php" target="_blank">https://www.vlsisystemdesign.com/kunal58625/php/scaling.php</a><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p></o:p></span></p>