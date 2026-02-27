---
title: "What are inputs required to star CTS?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p></p><p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l3 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Placement Database:</b> The design database
after placement is complete, containing the locations of all standard cells
(including clock sinks like flip-flops and clock gates) and macros. – it covers
Timing lib. Tech lef, std cell lef, SDC etc.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l2 level1 lfo1; tab-stops: list 18.6pt 35.25pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>CTS
Specification File </b>.ctstch<b>, </b>.cts_spec<b>, </b>This file (or
equivalent tool settings) provides detailed instructions for building the clock
tree: <o:p></o:p></p>

<ul style="margin-top: 0cm;" type="circle">
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Target Skew:</b>
     Maximum acceptable skew between sinks in the same clock domain or skew
     group.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Target Max/Min Latency:</b>
     Desired range for insertion delay.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Target Max Transition:</b>
     Maximum allowed transition time for clock nets.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Buffer/Inverter List:</b>
     Specifies the list of buffers and inverters the tool is allowed to use for
     building the tree (often restricts to specific drive strengths or balanced
     cells).<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>DRC Constraints:</b>
     Max capacitance, max fanout limits specifically for clock nets.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>NDR (Non-Default
     Rules):</b> Specifies special routing rules (e.g., double width, double
     spacing, shielding) to be used for clock nets to improve signal integrity
     and reliability.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Routing Layers:</b>
     Preferred top and bottom metal layers for clock routing.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Clock Tree Exceptions:</b>
     Defines pins to be treated specially: <o:p></o:p></li>
 <ul style="margin-top: 0cm;" type="circle">
  <li class="MsoNormal" style="mso-list: l0 level2 lfo4;">Stop/Sink Pins (Default):
      Normal clock endpoints to be balanced.<o:p></o:p></li>
  <li class="MsoNormal" style="mso-list: l0 level2 lfo4;">Exclude Pins: Excluded
      from skew/latency balancing but still receive the clock and DRV fixing
      (e.g., output ports, Multiplexer select pin )<o:p></o:p></li>
  <li class="MsoNormal" style="mso-list: l0 level2 lfo4;">Ignore Pins: Completely
      ignored by CTS balancing and DRC fixing (e.g., non-clock pins driven by
      clocks, test pins).<o:p></o:p></li>
  <li class="MsoNormal" style="mso-list: l0 level2 lfo4;">Float Pins: Similar to
      Exclude pins but allow specifying a pin delay range for balancing (used
      for macro models).<o:p></o:p></li>
  <li class="MsoNormal" style="mso-list: l0 level2 lfo4;">Non-stop pins: trace
      through the endpoints that are normally considered as endpoints of the
      clock tree. Ex, The clock pin of sequential cells driving generated clock
      are implicit non-stop pins. Clock pin of ICG.<o:p></o:p></li>
 </ul>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Skew Groups:</b>
     Defines groups of sinks that should be balanced together, potentially with
     different skew targets than other groups.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo4;"><b>Clock Tree Structure
     Hints:</b> May allow specifying preferred structures (e.g., H-tree for
     certain branches) or buffer placement constraints. Multi tap etc.<o:p></o:p></li>
</ul>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l2 level1 lfo2; tab-stops: list 18.6pt 35.25pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->CTS
Spec File Contents: <a href="https://ivlsi.com/cts-spec-file-vlsi-physical-design/" target="_blank">https://ivlsi.com/cts-spec-file-vlsi-physical-design/</a><o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo5; text-indent: -18.0pt;"><!--[if !supportLists]--><span class="MsoHyperlink"><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; text-decoration: none; text-underline: none;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span></span><!--[endif]-->CTS
Overview: <a href="https://www.scribd.com/document/698125285/CLOCK-TREE-SYNTHESIS" target="_blank">https://www.scribd.com/document/698125285/CLOCK-TREE-SYNTHESIS</a><span class="MsoHyperlink"><o:p></o:p></span></p>

<p class="MsoNormal"><span class="MsoHyperlink"><o:p><span style="text-decoration: none;">&nbsp;</span></o:p></span></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p><br /><p></p>