---
title: "What issues can arise if one of the SPEF files (or RC corner databases) is outdated, and how does that affect slack at the PnR stage?"
date: 2025-08-22
draft: false
categories: ["Routing"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Mismatch with Layout:</b><span style="text-indent: -18pt;"> An outdated SPEF
reflects an older version of the layout. If placement or routing has changed
since the SPEF was generated, the RC values in the SPEF will not accurately
represent the current physical structure. Wire lengths, adjacencies (coupling
capacitance), and via counts will be wrong.</span></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Mismatch with Process/Library:</b> If the RC
corner data itself is outdated (e.g., from a previous PDK version or library
characterization), the fundamental R-per-square or C-per-unit-length values
used for extraction might be incorrect for the current process target, even if
the layout is current.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt;">For ex, if earlier net was longer
and hence in old spef, RC is more. Now latest db, net is short, RC<span style="mso-spacerun: yes;">&nbsp; </span>is less but using old spef hence timing
calculation will be pessimistic and vice versa.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt;">If new net was added in DB, that
will not have any extracted parasitics in spef. Hence results in in accurate
delay calculation for that net. <o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>