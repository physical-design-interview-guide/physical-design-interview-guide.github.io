---
title: "Can we see negative setup and hold values in the library? Why? What is the impact?"
date: 2025-08-20
draft: false
categories: ["General-Concepts"]
description: ""
---

<p>Yes, it is possible and quite common to see negative setup
and hold times specified in standard cell timing libraries (.lib).</p>

<p class="MsoNormal" style="margin-left: 54.3pt; mso-list: l0 level2 lfo1; tab-stops: list 54.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->There
are internal delays along the clock path and data path <i>within</i> the cell,
from the input pins to the internal latch. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.3pt; mso-list: l0 level3 lfo1; tab-stops: list 90.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Negative
Setup:</b> If the internal clock path delay is <i>significantly longer</i> than
the internal data path delay <i>plus</i> the internal latch's intrinsic setup
time, the data pin (D) can actually change <i>after</i> the active clock edge
at the clock pin (CK) and still be captured correctly. <o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 90.3pt; mso-add-space: auto; mso-list: l0 level3 lfo1; tab-stops: list 90.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Think
of it as internal extra added skew that is helping setup violation.</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.3pt; mso-list: l0 level3 lfo1; tab-stops: list 90.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Negative
Hold:</b> If the internal data path delay is <i>significantly longer</i> than
the internal clock path delay <i>minus</i> the internal latch's intrinsic hold
time, the data pin (D) can change <i>before</i> the clock edge at the pin (CK)
has fully propagated to the internal latch, and the <i>previous</i> data value
will still be correctly held. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.3pt; mso-list: l0 level3 lfo1; tab-stops: list 90.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Consistency
Check:</b> While individual setup or hold can be negative, their sum
(Tsetup​+Thold​) for a given pin/clock edge combination must generally be
positive to represent a physically realizable sampling window. Libraries are
usually checked for this consistency.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.3pt; mso-list: l0 level2 lfo1; tab-stops: list 54.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><a href="https://www.youtube.com/watch?v=Wys-Q2xVzaE">https://www.youtube.com/watch?v=Wys-Q2xVzaE</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.3pt; mso-list: l0 level2 lfo1; tab-stops: list 54.3pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Library
Definitions: <a href="https://www.physicaldesign4u.com/2020/05/how-setup-and-hold-checks-are-defined.html" target="_blank">https://www.physicaldesign4u.com/2020/05/how-setup-and-hold-checks-are-defined.html</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -35.7pt;"><o:p>&nbsp;</o:p></p>