---
title: "If there's no setup margin, how to fix hold?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">If setup and hold both are critical on same
path, check if it is exact same path or if there is any diversion from combo
logic in setup and hold timing path.</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->If there is any diversion, add delay at that
point so hold can be fixed without touching setup critical path.<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->If timing path is exactly same and having setup
and hold violations, there could be two reasons,<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Crosstalk impact – crosstalk will add delay in
setup and reduce it in hold. Impacting adversely both setup and hold. Fixing
crosstalk should give margin to fix setup and hold.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->If there is no crosstalk, there can be very high
setup and hold time requirement from endpoint. (may happen with reg2mem paths)<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Check if such cells can be replaced with less
access time cell.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->To get margin in setup and hold both, you need
to use cell with less delay variation across SS-FF corners.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->Use LVT cells in data path instead of SVT/HVT.
Use low drive strength cells and reduce net legth so that OCV impact can be
reduced giving margin for setup and hold.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>