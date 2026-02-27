---
title: "How do you do power planning? Which power plan strategies do you follow? Command used for power plan?"
date: 2025-08-20
draft: false
categories: ["Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Requirement Analysis:</b><span style="text-indent: -18pt;"> Understand the
power consumption estimate of the design (static and dynamic), voltage levels
required, number of power domains, IR drop targets, and EM limits.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l1 level1 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Define Structure: </b><span style="mso-spacerun: yes;">&nbsp;</span>Design the hierarchy of the PDN, typically
involving: <o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Pads/Bumps</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Rings</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Stripes:</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l1 level2 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power Rails</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l2 level1 lfo4; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Calculate Widths/Spacing:</b> Determine the
required width and spacing of rings and stripes based on current density
requirements<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l2 level1 lfo4; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Layer Assignment:</b> Assign specific metal
layers for rings, horizontal stripes, and vertical stripes.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l2 level1 lfo4; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Implementation:</b> Use PnR tool commands to
create the rings, stripes, rails, and connect them with power vias.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l2 level1 lfo4; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Verification:</b> Perform IR drop
(static/dynamic) and EM analysis to verify the PDN meets the design
requirements.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l3 level2 lfo1; tab-stops: list 18.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Commands
(Tool Specific):</b> The exact commands depend on the PnR tool: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l3 level3 lfo2; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>Innovus:</b>
addRing, addStripe, editPowerVia, setDesignMode -powerPlanning, sroute (special
route for rails).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l3 level3 lfo2; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; font-size: 10.0pt; line-height: 107%; mso-bidi-font-family: Wingdings; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp; </span></span></span><!--[endif]--><b>ICC2:</b>
create_pg_* commands (e.g., create_pg_ring, create_pg_mesh_pattern,
create_pg_stripe_pattern), set_pg_strategy, compile_pg.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.15pt; mso-list: l0 level1 lfo5; tab-stops: list 18.15pt; text-indent: -18.0pt;"><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">Rings, Stripes, Grids: </span><a href="https://vlsiweb.com/power-plan/" style="text-indent: -18pt;" target="_blank">https://vlsiweb.com/power-plan/</a></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>