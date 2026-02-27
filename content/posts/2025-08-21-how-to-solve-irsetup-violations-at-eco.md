---
title: "How to solve IR/setup violations at the ECO stage?"
date: 2025-08-21
draft: false
categories: ["ECO"]
description: ""
---

<p><b>Understanding the Interaction:</b></p>

<ul style="margin-top: 0cm;" type="circle">
 <li class="MsoNormal" style="mso-list: l0 level1 lfo1; tab-stops: list 36.0pt;"><b>IR
     Drop -&gt; Setup Violation:</b> Voltage drop (IR drop) at a cell reduces
     its effective supply voltage, making it slower. This increased cell delay
     can directly cause or worsen a setup violation.<o:p></o:p></li>
 <li class="MsoNormal" style="mso-list: l0 level1 lfo1; tab-stops: list 36.0pt;"><b>Setup
     Fix -&gt; IR Drop:</b> Some setup fixes, like upsizing cells or swapping
     to lower Vt, increase the current draw (both peak and average) of those
     cells. This can worsen IR drop in the local region if the power grid is
     already marginal.<o:p></o:p></li>
</ul>

<ul style="margin-top: 0cm;" type="circle">
 <li class="MsoNormal" style="mso-list: l0 level1 lfo2; tab-stops: list 36.0pt;"><b>Correlate:</b>
     Check if the cells in the failing setup paths are also located in regions
     with high IR drop. This helps determine if IR drop is a primary
     contributor to the setup violation.<o:p></o:p></li>
</ul>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>