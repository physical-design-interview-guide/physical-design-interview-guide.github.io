---
title: "How do you fix setup violations at the placement stage?"
date: 2025-08-20
draft: false
categories: ["Placement"]
description: ""
---

<p>Cell Sizing, VT Swap to allowed VT at placement, Buffer
insertion, Logic optimization, These optimizations are typically performed
automatically by the place_opt / optDesign -preCTS commands based on the timing
constraints (SDC) and available libraries and don’t use settings.</p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Need manual observation of critical paths,<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>high fanout</b>: it can cause trouble in
closing timing as balancing CTS and placing all FFs properly will be difficult
for the tool.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Cells are spread for longer distance</b>:
check the connectivity of start point endpoint, analyse module connection and
give appropriate bound or region.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Macro placement analysis and fanin fanout checks
gives better idea.<o:p></o:p></p>