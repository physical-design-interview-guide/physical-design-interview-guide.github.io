---
title: "How do you solve/fix IR drop issues (at placement, ECO stage)?"
date: 2025-08-21
draft: false
categories: ["Signal-Integrity"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><span style="text-indent: -17.85pt;">Fixing
IR drop involves 1) strengthening the Power Distribution Network (PDN) to
reduce its resistance or </span><span style="text-indent: -17.85pt;">&nbsp;</span><span style="text-indent: -17.85pt;">2) reducing the
current drawn by the logic.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>During
Placement/Floorplan (Preventative)<o:p></o:p></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Robust PDN Design:</b> Plan a dense power
grid using wide straps/rings on low-resistance metal layers with ample vias<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Macro Placement:</b> Place high-power macros
near power sources or ensure they have strong connections to the power grid.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 53.85pt; mso-list: l0 level2 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Cell
Placement:</b> Avoid clustering high-power or high-switching activity cells in
one area. Use density controls.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>During
Post-Route Optimization / ECO Stage:<o:p></o:p></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Strengthen
PDN:</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Add/Widen
Power Straps:</b> Introduce more power/ground stripes in areas with high
voltage drop or increase the width of existing straps.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Add Power
Vias:</b> Increase the number of vias connecting different layers of the power
grid, at connections to cell rails, to reduce vertical resistance.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Add Decap
Cells (Primarily for Dynamic IR):</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Reduce
Current Draw:</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Cell
Downsizing:</b> Replace high-power cells in the violating region with smaller
drive-strength equivalents, if no timing violations.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level3 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">VT
Swapping (Higher Vt):</b> Swap cells to higher-Vt to reduce leakage current
(helps static IR) and slightly reduce peak dynamic current (helps dynamic IR), If
no timing issues.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b style="mso-bidi-font-weight: normal;">Spread
High-Activity Cells:</b> If dynamic IR drop is caused by simultaneously
switching cells clustered together, try spreading these cells apart during ECO
placement<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>