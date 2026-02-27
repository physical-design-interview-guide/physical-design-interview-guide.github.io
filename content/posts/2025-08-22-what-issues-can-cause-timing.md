---
title: "What issues can cause timing degradation during routing?"
date: 2025-08-22
draft: false
categories: ["Routing"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -17.85pt;">Increased
Wire Length (Detouring):</b><span style="text-indent: -17.85pt;"> Due to congestion or blockages, detailed router
can detour nets. eGR doesn’t detour to report max congestion. This results in
difference in earlied net length estimation causing more RC delay and cell
delay if more bufs added.</span></p>

<p class="MsoNoSpacing" style="line-height: 107%; margin-bottom: .0001pt; margin-bottom: 0cm; margin-left: 17.85pt; margin-right: 0cm; margin-top: 6.0pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Accurate
Parasitic Extraction (RC Extraction):</b> eGR may use tQrc which is fast but
less accurate. Detail routing mostly uses iQrc or QRC for extraction which is
more accurate resulting in timing degradation.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-bottom: 8.0pt; margin-left: 17.85pt; margin-right: 0cm; margin-top: 6.0pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Crosstalk Delay:</b> Coupling capacitance
between nets switching simultaneously can cause aggressor nets to slow down
victim nets (positive crosstalk delay), worsening setup timing. This effect is
only accurately calculated post-route.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-bottom: 8.0pt; margin-left: 17.85pt; margin-right: 0cm; margin-top: 6.0pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->​Some nets are not being optimized: Run
"reportIgnoredNets -outfile filename<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-bottom: 8.0pt; margin-left: 17.85pt; margin-right: 0cm; margin-top: 6.0pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Fixing Antenna detours net and adds load,
increasing delay.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-bottom: 8.0pt; margin-left: 17.85pt; margin-right: 0cm; margin-top: 6.0pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Metal Fill can add couple cap, increasing timing
violations.<o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>