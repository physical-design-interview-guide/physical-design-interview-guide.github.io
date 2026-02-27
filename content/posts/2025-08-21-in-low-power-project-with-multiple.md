---
title: "In a low power project with multiple corners (e.g., low_svs, turbo), how do you choose the appropriate timing corner for each step?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">In a low-power project with specific operating
performance points (OPPs) like:</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->"low_svs" (Low Standard Voltage Swing,
likely a power-saving mode) <o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->"turbo" (a high-performance mode,
likely at a higher voltage), <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Setup Analysis:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>low_svs Mode:</b> Analyze setup at the <i>slowest
process corner (SS/SSG)</i> combined with <i>VddL</i> and <i>worst-case
temperature</i> (often high temp for CMOS). This is SSG_VddL_HighTemp_RCworst.
This represents the slowest the logic will be in low power mode.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>turbo Mode:</b> Analyze setup at the <i>slowest
process corner (SS/SSG)</i> combined with <i>VddH</i> and <i>worst-case
temperature</i>. This is SSG_VddH_HighTemp_RCworst. This is the absolute
performance bottleneck.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Hold Analysis:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>low_svs Mode:</b> Analyze hold at the <i>fastest
process corner (FF/FFG)</i> combined with <i>VddL</i> and <i>best-case
temperature</i> (often low temp). This is FFG_VddL_LowTemp_RCbest. Data paths
are fastest here.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>turbo Mode:</b> Analyze hold at the <i>fastest
process corner (FFG)</i> combined with <i>VddH</i> and <i>best-case temperature</i>.
This is FFG_VddH_LowTemp_RCbest.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Analysis:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Static (Leakage) Power:</b> Worst case
leakage is usually at the <i>fastest process corner (FF/FFG)</i> with <i>highest
voltage (VddH)</i> and <i>highest temperature</i>, for cells active in that
state. Also analyze at typical and low power states.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Dynamic Power:</b> Typically analyzed under <i>typical
process (TT)</i> and nominal/turbo voltage (VddH) with realistic switching
activity for each mode (turbo mode will likely have higher activity). <o:p></o:p></p>