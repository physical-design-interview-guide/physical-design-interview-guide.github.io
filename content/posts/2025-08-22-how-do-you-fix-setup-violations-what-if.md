---
title: "How do you fix setup violations? What if upsizing/layer change isn't possible?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">We
need to reduce cell delay or Net delay or use more skew – can use various
methods for each.</b></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><!--[endif]--><b>Reduce
Cell Delay:<o:p></o:p></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Cell Sizing (Upsizing):</b> Increase drive
strength of cells on the critical path. (Effective for small to moderate
violations).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>VT Swapping (Lowering Vt):</b> Swap cells to
faster, lower-Vt variants (HVT-&gt;SVT-&gt;LVT). (Effective, but increases
leakage).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Reduce amount of buffering if excessive bufs
are added.</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-bidi-font-weight: bold; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><!--[endif]--><b>Reduce
Net Delay:<o:p></o:p></b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Buffer Insertion:</b> Insert buffers to break
long nets or strengthen signals. (Good for net-delay dominated paths).<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Replace buffer with two inverters and reduce
net length.</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]-->Adjust cell position, keeping cell at middle of
the net gives less net delay.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 72.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Routing Optimization:</b> Re-route critical
nets on faster layers or using shorter paths. (Limited impact usually, but
possible).<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="mso-list: l0 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><!--[endif]--><b>Useful Skew:</b> Delay the capture clock or
speed up the launch clock path intentionally. (Requires careful analysis of
side effects).<o:p></o:p></p>

<p class="MsoNormal"><o:p>&nbsp;</o:p></p>

<ul style="margin-top: 0cm;" type="circle">
 <li class="MsoNormal"><b>Fixing Different
     Violation Magnitudes:</b> <o:p></o:p></li>
 <ul style="margin-top: 0cm;" type="circle">
  <li class="MsoNormal"><b>Small Violations
      (e.g., 5ps, 20ps):</b> Often fixed by minor sizing changes (e.g.,
      X2-&gt;X3), VT swaps on a few cells, or small useful skew adjustments.<o:p></o:p></li>
  <li class="MsoNormal"><b>Moderate Violations
      (e.g., 300ps):</b> May require more aggressive sizing (e.g., X1-&gt;X4),
      multiple VT swaps, buffer insertions, or significant useful skew. Logic
      restructuring might be needed. Placement is key.<o:p></o:p></li>
  <li class="MsoNormal"><b>Large Violations
      (e.g., 500ps, 1ns):</b> Indicate more fundamental issues. Simple
      sizing/VT swaps are unlikely to be sufficient. More likely constraint
      issues or missing MCP or pipelining.<o:p></o:p></li>
 </ul>
</ul>

<span style="font-family: &quot;Calibri&quot;,sans-serif; font-size: 11.0pt; line-height: 107%; mso-ansi-language: EN-IN; mso-ascii-theme-font: minor-latin; mso-bidi-font-family: &quot;Times New Roman&quot;; mso-bidi-language: AR-SA; mso-bidi-theme-font: minor-bidi; mso-fareast-font-family: Calibri; mso-fareast-language: EN-US; mso-fareast-theme-font: minor-latin; mso-hansi-theme-font: minor-latin;">Fixing Setup/Hold: <a href="https://www.vlsi-expert.com/2014/01/10-ways-to-fix-setup-and-hold-violation.html" target="_blank">https://www.vlsi-expert.com/2014/01/10-ways-to-fix-setup-and-hold-violation.html</a></span>