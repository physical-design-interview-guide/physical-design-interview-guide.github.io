---
title: "If setup & hold are clean but there are clock DRVs, can the block be closed? How to identify and fix clock DRVs?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">NO.</b><span style="text-indent: -18pt;"> Even if setup and hold timing checks
pass, significant Design Rule Violations (DRVs) either on data or clock needs
to be fixed.</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Reliability:</b> Slow transitions
(max_transition violation) make sequential elements susceptible to noise,
glitches, and potential metastability<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Timing Accuracy:</b> buffers/inverters are
characterized based on expected input transitions and output loads. Violating
max_transition or max_capacitance means the library timing models used for
setup/hold analysis are inaccurate, invalidating the "clean" timing result.
The actual delays might be worse.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Power:</b> Slow transitions increase
short-circuit power consumption in the clock buffers and the receiving
flip-flops.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Jitter:</b> Poor signal integrity on the
clock net can increase clock jitter<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 17.85pt; mso-list: l1 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Identifying
Clock DRVs:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>STA Reports:</b> Run STA reports specifically
targeting DRVs on the clock tree. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->report_constraint -all_violators (or similar)
will list max_cap, max_tran violations. Filter for clock nets/pins.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 17.85pt; mso-list: l1 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Fixing
Clock DRVs:</b> These are fixed using techniques similar to fixing DRVs on
signal nets, but applied specifically to the clock tree, often during
post-route optimization or ECOs: <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Buffer Insertion:</b> Insert additional clock
buffers/inverters to break long nets (fixes max_cap, max_tran) or to isolate
high capacitance sinks.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Cell Sizing (Upsizing):</b> Increase the
drive strength of the clock buffer driving the violating net segment. A
stronger driver provides faster transitions and can handle higher capacitance.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Cell Sizing (Downsizing):</b> If a buffer is
oversized for its load, downsizing it can reduce the load on the <i>previous</i>
stage, potentially fixing a violation there.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>VT Swapping (Lower Vt):</b> Swapping to lower
Vt clock buffers can provide faster transitions (fixing max_tran) but increases
leakage.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Net Topology/Routing Changes:</b> Minor
re-routing (e.g., layer change, shortening path) might slightly reduce
capacitance or resistance, helping fix violations (less common as a primary
fix).<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l2 level3 lfo3; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Load Splitting/Cloning:</b> If a single
buffer drives too many sinks causing max_fanout or max_cap issues, clone the
buffer and split the sinks between the clones.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>