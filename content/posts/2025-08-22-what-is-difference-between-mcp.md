---
title: "What is the difference between MCP (Multicycle Path) and false path?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">False Path (</b><span style="text-indent: -18pt;">set_false_path</span><b style="text-indent: -18pt;">):</b></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Specific path between a startpoint and endpoint <b>cannot
be logically sensitized</b> during normal circuit operation. Although a
physical path exists, signals will never actually propagate from the startpoint
to the endpoint along that path under functional conditions <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>STA Action:</b> The tool <b>completely
ignores</b> this path for all timing analysis (setup, hold, DRCs). It assumes
the path has infinite time to propagate.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>When to Use:</b> Only for paths that are
guaranteed to be functionally impossible or irrelevant to the timing modes
being analyzed. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Common uses:</b> between asynchronous clock
domains (after synchronizers), paths related to test logic disabled in
functional mode, static configuration paths.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt;"><br /></p>

<p class="MsoNormal" style="margin-left: 54.0pt;"><o:p>&nbsp;</o:p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEjl9xZs_I9qp-oZMUT8QwuTAggdCYyJhHhAFJYcZ8G2ugq8GUaXIW63JNO0QvgGfB4dOlPMhV4XLMqS80cl43j2JzZKmpl0L7wBARYnFxxaVhEEsl4sRHr0sAohtxMZDjZcm75busFYzijTS1ZLV985XBTq2jLZchwS7kLIUeo_Vb8rc1Lt5zhjHQdCsyyg" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="223" data-original-width="602" height="119" src="https://blogger.googleusercontent.com/img/a/AVvXsEjl9xZs_I9qp-oZMUT8QwuTAggdCYyJhHhAFJYcZ8G2ugq8GUaXIW63JNO0QvgGfB4dOlPMhV4XLMqS80cl43j2JzZKmpl0L7wBARYnFxxaVhEEsl4sRHr0sAohtxMZDjZcm75busFYzijTS1ZLV985XBTq2jLZchwS7kLIUeo_Vb8rc1Lt5zhjHQdCsyyg" width="320" /></a></div><br /><p></p>

<p class="MsoNormal" style="margin-left: 54.0pt;"><br /></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Multicycle Path (</b>set_multicycle_path<b>):</b>
<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Meaning:</b> data launched from the
startpoint is allowed <b>more than one clock cycle</b> of the destination clock
to arrive and be stable at the endpoint. <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>STA Action:</b> The tool <b>modifies the
setup and hold check edges:</b> <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l1 level3 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->set_multicycle_path &lt;N&gt; -setup: Moves the
setup check edge N clock cycles later.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 90.0pt; mso-list: l1 level3 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: Wingdings; mso-bidi-font-family: Wingdings; mso-fareast-font-family: Wingdings;"><span style="mso-list: Ignore;">§<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;
</span></span></span><!--[endif]-->set_multicycle_path &lt;N-1&gt; -hold: Moves the
hold check edge (N-1) cycles later (relative to the default hold edge, which is
0 cycles after launch). <o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Optimization Impact:</b> Synthesis and PnR
tools <b>will still optimize</b> the path, but against the relaxed (multicycle)
setup constraint.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>When to Use:</b> For paths intentionally
designed to take multiple clock cycles, often involving slow logic,
calculations spanning multiple cycles controlled by enables, or certain CDC
paths<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Key Difference:</b> False paths are <i>ignored</i>
by timing analysis and optimization. Multicycle paths are <i>analyzed and
optimized</i>, but against modified setup/hold timing requirements<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>