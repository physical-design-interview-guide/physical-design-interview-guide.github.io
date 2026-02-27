---
title: "How is clock gater cloning done?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">Single ICG cell driving a large number of
flip-flops (high fanout) is replicated into multiple identical ICG cells, each
driving a smaller subset of the original flip-flops. All cloned ICG cells share
the same input clock and enable signal.</span></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo2; tab-stops: list 53.85pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">1.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Identify High Fanout ICGs:</b> The synthesis
or CTS tool identifies ICG cells whose fanout exceeds a certain threshold or
which are causing timing/DRV issues due to high load.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo2; tab-stops: list 53.85pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">2.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Cluster Sinks:</b> The flip-flops driven by
the original ICG are spatially clustered based on their placement location.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo2; tab-stops: list 53.85pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">3.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Replicate ICG:</b> The original ICG cell is
replaced by multiple instances of the <i>same</i> ICG cell type.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo2; tab-stops: list 53.85pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">4.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Connect Subsets:</b> Each cloned ICG cell is
connected to drive the clock pins of the flip-flops within one cluster.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 53.85pt; mso-list: l1 level2 lfo2; tab-stops: list 53.85pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="mso-bidi-font-family: Calibri; mso-bidi-theme-font: minor-latin;"><span style="mso-list: Ignore;">5.<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Connect Inputs:</b> The clock input and
enable input nets are connected to <i>all</i> the cloned ICG cells. (The enable
net might need buffering if its load increases significantly).<o:p></o:p></p>

<p class="MsoNormal">Cloning is typically performed automatically by synthesis or
CTS tools based on fanout limits, timing optimization, and power
considerations.<span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p></o:p></span></p>