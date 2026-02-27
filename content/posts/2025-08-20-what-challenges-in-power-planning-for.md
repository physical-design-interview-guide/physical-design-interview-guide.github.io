---
title: "What challenges in power planning for 7nm and advanced nodes?"
date: 2025-08-20
draft: false
categories: ["Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Increased Resistance:</b><span style="text-indent: -18pt;"> Interconnect wires
become thinner and taller (to try and mitigate R increase, but R still
dominates over C). Via resistance also increases dramatically. This makes the
power grid inherently more resistive, leading to higher IR drop (V=I×R).</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Lower Supply Voltage (Vdd):</b> Operating
voltages are significantly lower (e.g., &lt; 0.8V). This means the <i>allowable
noise margin</i> for IR drop (both static and dynamic) is much smaller (e.g.,
5-10% of Vdd is a smaller absolute voltage). Designs become extremely sensitive
to voltage variations.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Higher Current Density:</b> While voltage
decreases, the density of transistors increases significantly, leading to
higher overall current density (J) in the power grid, especially localized
hotspots. Risk of EM.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Dynamic IR Drop (Voltage Droop):</b> Faster
switching speeds and higher localized current demands exacerbate dynamic
voltage droop. Providing sufficient instantaneous current through the
high-resistance grid requires a very dense decap cell strategy and a robust
PDN.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Complexity of PDN Design:</b> Achieving the
required low resistance and meeting IR/EM targets often necessitates using more
metal layers for the power grid, wider straps, and significantly more vias,
consuming valuable routing resources needed for signals. Balancing power needs
with signal routability becomes harder.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->7nm
Challenges (includes power/interconnect): <a href="https://www.wipro.com/blogs/mohit-bansal/the-benefits-and-challenges-of-7nm-technology/" target="_blank">https://www.wipro.com/blogs/mohit-bansal/the-benefits-and-challenges-of-7nm-technology/</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Power
Issues at 7nm: <a href="https://semiengineering.com/power-issues-causing-more-respins-at-7nm-and-below/" target="_blank">https://semiengineering.com/power-issues-causing-more-respins-at-7nm-and-below/</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l1 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->7nm
Power Analysis: <a href="https://www.design-reuse.com/articles/55324/power-analysis-in-7nm-technology-node.html" target="_blank">https://www.design-reuse.com/articles/55324/power-analysis-in-7nm-technology-node.html</a><o:p></o:p></p>