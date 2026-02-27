---
title: "What is IR drop (Static/Dynamic)? Why consider it?"
date: 2025-08-21
draft: false
categories: ["Signal-Integrity"]
description: ""
---

<p><span style="font-family: Symbol; text-indent: -18pt;">·<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">For power analysis, each cell's power
dissipation has been characterized in the library (.lib) file. For leakage
power, the EDA tool simply adds up the leakage power of each cell. (Note:
Leakage power is usually state dependent) For dynamic power, the EDA tool
either estimates net capacitance before P&amp;R or calculates net capacitance
after P&amp;R. The designer has to provide the toggle rate. This can be based
on educated guess, experience, simulation, or emulation.</span></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>IR Drop:</b> it's the reduction in voltage
level along the power (VDD) and ground (VSS) distribution network (PDN) due to
the resistance (R) of the metal wires/vias and the current (I) flowing through
them (Vdrop​=I×R). This means the voltage actually delivered to a standard cell
or macro's power pins is lower than the ideal supply voltage at the source
(pads/bumps).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Static IR Drop:</b> The <i>average</i>
voltage drop across the PDN over time, calculated using the <i>average</i>
current drawn by the design components (primarily due to leakage current and
average switching activity). It uses the total power dissipation to calculate a
constant current draw. This current is then multiplied by the equivalent
resistance of the power network to arrive at the voltage drop<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Iavg
= leakage current + avg switching current.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Avg
switching current can be calculated based on vectorless or with given switching
activity or vectors.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Dynamic IR Drop (Voltage Droop):</b> The <i>transient</i>
or <i>peak</i> voltage drop that occurs due to sudden, high peak current
demands caused by many cells switching simultaneously (e.g., right after a
clock edge). This instantaneous drop can be significantly larger than the
static drop and is highly dependent on switching activity patterns and
decoupling capacitance effectiveness.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>No
two cells can experience same supply voltage, due to placement, nearby
activities thus each std cells have it’s unique dynamic voltage footprint.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Cycle
to cylcle dynamic voltage variation depends on overall change in peak current,
Change in toggle rate of local cells.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Symbol; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Symbol; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Symbol;"><span style="mso-list: Ignore;">·<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Why Consider IR Drop?</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Performance
Impact:</b> Reduced voltage at a cell's power pins increases its delay (cells
slow down). This can lead to setup violations and limit the maximum operating
frequency of the chip.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Noise
Margin Reduction:</b> Lower supply voltage reduces the noise margin of logic
gates, making them more susceptible to functional failures due to crosstalk or
other noise sources.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Hold
Violations:</b> Uneven IR drop across the chip can create local voltage
differences that effectively alter clock skew or data path delays in unexpected
ways, potentially causing hold violations.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Functional
Failure:</b> In severe cases, the voltage drop might be large enough that cells
fail to operate correctly or sequential elements lose their state (especially
critical in low-voltage designs).<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>