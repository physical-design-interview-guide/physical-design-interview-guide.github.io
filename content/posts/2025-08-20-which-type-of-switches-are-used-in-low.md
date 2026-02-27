---
title: "Which type of switches are used in low power domains?"
date: 2025-08-20
draft: false
categories: ["Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Header Switches:</b><span style="text-indent: -18pt;"> Use </span><b style="text-indent: -18pt;">PMOS</b><span style="text-indent: -18pt;">
transistors placed between the main VDD grid (always-on supply) and the
switchable VDD rail of the power domain (VDD_SW). The PMOS gate is controlled
by the sleep/enable signal. When OFF (sleep signal asserted), they disconnect
the domain from VDD.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Footer Switches:</b> Use <b>NMOS</b>
transistors placed between the switchable VSS rail (VSS_SW) of the power domain
and the main VSS grid (always-on ground). The NMOS gate is controlled by the
sleep/enable signal. When OFF, they disconnect the domain from VSS.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Combined Header/Footer:</b> Some designs
might use both header and footer switches for more robust power cut-off,
although this adds complexity and area.<o:p></o:p></p>