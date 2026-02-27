---
title: "What is functional vs timing ECOs? How to implement them?"
date: 2025-08-21
draft: false
categories: ["ECO"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -17.85pt;">Functional ECO:</b><span style="text-indent: -17.85pt;"> An Engineering Change
Order implemented to fix a </span><b style="text-indent: -17.85pt;">logical bug</b><span style="text-indent: -17.85pt;"> in the design's functionality or
to add/modify a feature. The change originates from an RTL modification.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->RTL code is modified to fix the bug or add the
feature.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->The changed RTL is synthesized (often just the
affected module).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Synopsys Formality ECO, Cadence Conformal ECO compares
the original synthesized netlist (the one in PnR) with the newly synthesized
netlist from the changed RTL.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 36.15pt; mso-add-space: auto; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->The ECO tool identifies the logical differences
and generates a set of gate-level changes (ECO patch – add/delete/modify gates
and connections) needed to transform the PnR netlist to match the new
functionality. This patch is often a sequence of tool commands (add_cell,
remove_cell, connect_net, disconnect_net, etc.).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.15pt; mso-list: l3 level1 lfo3; tab-stops: list 36.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Implementation in PnR:</b> The ECO patch
(script) is applied to the PnR database, followed by incremental placement
(legalization) and routing of the modified logic.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 36.15pt; mso-list: l3 level1 lfo3; tab-stops: list 36.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Verification:</b> LEC is run between the
patched PnR netlist and the new golden synthesized netlist. Full regression
testing (simulation) is also usually required.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l0 level1 lfo2; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Timing ECO:</b> An ECO implemented to fix <b>timing
violations</b> (setup, hold, DRVs) in a design that is already functionally
correct (i.e., LVS and LEC clean against the intended functionality).<o:p></o:p></p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l2 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->STA (e.g., PrimeTime) is run on the post-route
design, identifying timing violations. And generates ECO suggestions/scripts
(e.g., size_cell, insert_buffer, swap_vt_cell).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l2 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Alternatively, engineers manually analyze
failing paths and devise fixes.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l2 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Implementation in PnR:</b> Similar to
functional ECOs, the timing ECO script is applied to the PnR database, followed
by incremental placement and routing.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l2 level2 lfo4; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Verification:</b> STA is re-run to confirm
the timing violation is fixed and no new violations are introduced. LEC might
be run if there's a concern that the timing fix inadvertently changed logic<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l0 level1 lfo2; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Functional ECO: <a href="https://www.synopsys.com/glossary/what-is-functional-eco.html" target="_blank">https://www.synopsys.com/glossary/what-is-functional-eco.html</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>