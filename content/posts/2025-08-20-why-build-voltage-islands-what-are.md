---
title: "Why build voltage islands? What are the requirements for low power design?"
date: 2025-08-20
draft: false
categories: ["Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">Voltage islands (or power domains operating at
different voltage levels) are created primarily to reduce overall power
consumption (both dynamic and static).</span></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l2 level2 lfo1; tab-stops: list 39.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Dynamic
Power Reduction:</b> Pdynamic​<span style="font-family: &quot;Cambria Math&quot;,serif; mso-bidi-font-family: &quot;Cambria Math&quot;;">∝</span>Vdd2​. By operating
non-performance-critical blocks (islands) at a lower supply voltage (e.g.,
0.7V) compared to performance-critical blocks (e.g., 0.9V), the dynamic power
consumption of the low-voltage blocks is significantly reduced.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l2 level2 lfo1; tab-stops: list 39.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Static
Power Reduction:</b> Pstatic​<span style="font-family: &quot;Cambria Math&quot;,serif; mso-bidi-font-family: &quot;Cambria Math&quot;;">∝</span>Vdd​×Ileakage​. Lowering Vdd
directly reduces static power. Additionally, leakage current (Ileakage​) itself
often decreases at lower voltages.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l3 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Requirements for Low Power Design (Techniques
&amp; Special Cells):</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l3 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Domains:</b> The design must be
partitioned logically into different power domains based on voltage
requirements or shut-down capability (defined using create_power_domain in
UPF).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l3 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Voltage Areas:</b> Corresponding physical
regions defined in the floorplan to contain cells belonging to specific power
domains.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l3 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Isolation Cells:</b> Placed at the boundary
where a signal crosses from a power domain that <i>can be switched off</i> to a
domain that remains ON (or is at a different voltage). Provides steady output
to destination domain when first gates shutoff.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l3 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Level Shifters:</b> Required when a signal
crosses between two domains operating at <i>different</i> voltage levels (e.g.,
0.7V domain driving a 0.9V domain, or vice-versa). <o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l3 level3 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Types:</b> Low-to-High (L-&gt;H), High-to-Low
(H-&gt;L), Bi-directional.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 53.95pt; mso-add-space: auto; mso-list: l0 level1 lfo4; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Retention Registers/Flops:</b> Used in power
domains that are switched OFF (power gated) but need to retain their state
(e.g., configuration registers, FSM state registers) so the block can quickly
resume operation upon power-up without full re-initialization. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Purpose:</b> Store the flop's value in a
low-leakage "shadow latch" (powered by an always-on supply) just
before the main power is cut, and restore the value when power returns.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Control:</b> Require SAVE and RESTORE control
signals, typically from a PMU.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l1 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Switches (Switch Cells):</b> Transistor
networks (usually header - PMOS switches connecting to VDD, or footer - NMOS
switches connecting to VSS, or both) used to physically connect or disconnect
the power supply rails of a switchable power domain from the main power grid. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Purpose:</b> Enable power gating (PSO) by
cutting power to idle blocks.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 93.8pt; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Control:</b> Controlled by enable signals
from a PMU. Often implemented as a network or "daisy chain" of switch
cells for robustness.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 57.8pt; mso-list: l1 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Always-On Cells/Buffering:</b> Logic or nets
that need to remain active even when parts of the design are powered down
(e.g., isolation control signals, retention control) <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l2 level2 lfo1; tab-stops: list 39.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Low
Power Implementation Techniques: <a href="https://www.ednasia.com/low-power-implementation-techniques-for-asic-physical-design/" target="_blank">https://www.ednasia.com/low-power-implementation-techniques-for-asic-physical-design/</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 39.8pt; mso-list: l2 level2 lfo1; tab-stops: list 39.8pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->UPF
Special Cells: <a href="https://www.techsimplifiedtv.in/2024/07/special-standard-cells-in-upf-ep-3.html" target="_blank">https://www.techsimplifiedtv.in/2024/07/special-standard-cells-in-upf-ep-3.html</a><o:p></o:p></p>